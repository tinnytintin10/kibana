/*
 * Copyright Elasticsearch B.V. and/or licensed to Elasticsearch B.V. under one
 * or more contributor license agreements. Licensed under the Elastic License
 * 2.0; you may not use this file except in compliance with the Elastic License
 * 2.0.
 */

import {
  Plugin,
  CoreSetup,
  RequestHandlerContext,
  CoreStart,
  PluginInitializerContext,
  PluginConfigDescriptor,
  Logger,
  ElasticsearchClient,
} from '@kbn/core/server';

import { upsertTemplate } from './lib/manage_index_templates';
import { startImplicitCollection } from './lib/implicit_collection';
import { setupRoutes } from './routes';
import { assetsIndexTemplateConfig } from './templates/assets_template';
import { AssetClient } from './lib/asset_client';
import { AssetManagerPluginSetupDependencies, AssetManagerPluginStartDependencies } from './types';
import { AssetManagerConfig, configSchema, exposeToBrowserConfig } from '../common/config';

export type AssetManagerServerPluginSetup = ReturnType<AssetManagerServerPlugin['setup']>;
export type AssetManagerServerPluginStart = ReturnType<AssetManagerServerPlugin['start']>;

export const config: PluginConfigDescriptor<AssetManagerConfig> = {
  schema: configSchema,
  exposeToBrowser: exposeToBrowserConfig,
};

export class AssetManagerServerPlugin
  implements
    Plugin<
      AssetManagerServerPluginSetup,
      AssetManagerServerPluginStart,
      AssetManagerPluginSetupDependencies,
      AssetManagerPluginStartDependencies
    >
{
  private context: PluginInitializerContext<AssetManagerConfig>;
  private stopImplicitCollection?: () => void;
  public config: AssetManagerConfig;
  public logger: Logger;

  constructor(context: PluginInitializerContext<AssetManagerConfig>) {
    this.context = context;
    this.config = context.config.get();
    this.logger = context.logger.get();
  }

  public setup(core: CoreSetup, plugins: AssetManagerPluginSetupDependencies) {
    // Check for config value and bail out if not "alpha-enabled"
    if (!this.config.alphaEnabled) {
      this.logger.info('Server is NOT enabled');
      return;
    }

    this.logger.info('Server is enabled');

    const assetClient = new AssetClient({
      sourceIndices: this.config.sourceIndices,
      getApmIndices: plugins.apmDataAccess.getApmIndices,
      metricsClient: plugins.metricsDataAccess.client,
    });

    const router = core.http.createRouter();
    setupRoutes<RequestHandlerContext>({ router, assetClient });

    return {
      assetClient,
    };
  }

  public start(core: CoreStart) {
    // Check for config value and bail out if not "alpha-enabled"
    if (!this.config.alphaEnabled) {
      return;
    }

    // create/update assets-* index template
    upsertTemplate({
      esClient: core.elasticsearch.client.asInternalUser,
      template: assetsIndexTemplateConfig,
      logger: this.logger,
    });

    if (this.config.implicitCollection?.enabled) {
      this.logger.info(
        `Implicit collection set to run every ${this.config.implicitCollection.interval}`
      );

      const [inputClient, outputClient] = this.getClients(core);

      this.stopImplicitCollection = startImplicitCollection({
        inputClient,
        outputClient,
        intervalMs: this.config.implicitCollection.interval.asMilliseconds(),
        logger: this.context.logger.get('implicit_collection'),
        sourceIndices: this.config.sourceIndices,
      });
    }

    return {};
  }

  public stop() {
    this.stopImplicitCollection?.();
  }

  private getClients({ elasticsearch }: CoreStart): [ElasticsearchClient, ElasticsearchClient] {
    let inputClient = elasticsearch.client.asInternalUser;
    let outputClient = elasticsearch.client.asInternalUser;

    if (this.config.implicitCollection?.input) {
      inputClient = elasticsearch.createClient('asset_manager.implicit_collection.reader', {
        hosts: [this.config.implicitCollection.input.hosts],
        username: this.config.implicitCollection.input.username,
        password: this.config.implicitCollection.input.password,
      }).asInternalUser;
    }

    if (this.config.implicitCollection?.output) {
      outputClient = elasticsearch.createClient('asset_manager.implicit_collection.writer', {
        hosts: [this.config.implicitCollection.output.hosts],
        username: this.config.implicitCollection.output.username,
        password: this.config.implicitCollection.output.password,
      }).asInternalUser;
    }

    return [inputClient, outputClient];
  }
}
