/*
 * Copyright Elasticsearch B.V. and/or licensed to Elasticsearch B.V. under one
 * or more contributor license agreements. Licensed under the Elastic License
 * 2.0; you may not use this file except in compliance with the Elastic License
 * 2.0.
 */

/*
 * NOTICE: Do not edit this file manually.
 * This file is automatically generated by the OpenAPI Generator, @kbn/openapi-generator.
 *
 * info:
 *   title: Elastic Security - Timeline - Delete Timelines API
 *   version: 2023-10-31
 */

import { z } from '@kbn/zod';

export type DeleteTimelinesRequestBody = z.infer<typeof DeleteTimelinesRequestBody>;
export const DeleteTimelinesRequestBody = z.object({
  savedObjectIds: z.array(z.string()),
  /**
   * Saved search ids that should be deleted alongside the timelines
   */
  searchIds: z.array(z.string()).optional(),
});
export type DeleteTimelinesRequestBodyInput = z.input<typeof DeleteTimelinesRequestBody>;
