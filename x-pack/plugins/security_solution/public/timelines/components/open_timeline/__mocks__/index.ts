/*
 * Copyright Elasticsearch B.V. and/or licensed to Elasticsearch B.V. under one
 * or more contributor license agreements. Licensed under the Elastic License
 * 2.0; you may not use this file except in compliance with the Elastic License
 * 2.0.
 */

import {
  DataProviderTypeEnum,
  type ResolveTimelineResponse,
  TimelineStatusEnum,
  TimelineTypeEnum,
} from '../../../../../common/api/timeline';

export const mockTimeline: ResolveTimelineResponse = {
  timeline: {
    savedObjectId: 'eb2781c0-1df5-11eb-8589-2f13958b79f7',
    columns: [
      {
        aggregatable: null,
        category: null,
        columnHeaderType: 'not-filtered',
        description: null,
        example: null,
        indexes: null,
        id: '@timestamp',
        name: null,
        searchable: null,
        type: null,
      },
      {
        aggregatable: null,
        category: null,
        columnHeaderType: 'not-filtered',
        description: null,
        example: null,
        indexes: null,
        id: 'message',
        name: null,
        searchable: null,
        type: null,
      },
      {
        aggregatable: null,
        category: null,
        columnHeaderType: 'not-filtered',
        description: null,
        example: null,
        indexes: null,
        id: 'event.category',
        name: null,
        searchable: null,
        type: null,
      },
      {
        aggregatable: null,
        category: null,
        columnHeaderType: 'not-filtered',
        description: null,
        example: null,
        indexes: null,
        id: 'event.action',
        name: null,
        searchable: null,
        type: null,
      },
      {
        aggregatable: null,
        category: null,
        columnHeaderType: 'not-filtered',
        description: null,
        example: null,
        indexes: null,
        id: 'host.name',
        name: null,
        searchable: null,
        type: null,
      },
      {
        aggregatable: null,
        category: null,
        columnHeaderType: 'not-filtered',
        description: null,
        example: null,
        indexes: null,
        id: 'source.ip',
        name: null,
        searchable: null,
        type: null,
      },
      {
        aggregatable: null,
        category: null,
        columnHeaderType: 'not-filtered',
        description: null,
        example: null,
        indexes: null,
        id: 'destination.ip',
        name: null,
        searchable: null,
        type: null,
      },
      {
        aggregatable: null,
        category: null,
        columnHeaderType: 'not-filtered',
        description: null,
        example: null,
        indexes: null,
        id: 'user.name',
        name: null,
        searchable: null,
        type: null,
      },
    ],
    dataProviders: [],
    dateRange: {
      start: '2020-11-01T14:30:59.935Z',
      end: '2020-11-03T14:31:11.417Z',
    },
    description: '',
    eventType: 'all',
    eventIdToNoteIds: [],
    excludedRowRendererIds: [],
    favorite: [],
    filters: [],
    kqlMode: 'filter',
    kqlQuery: { filterQuery: null },
    indexNames: [
      'auditbeat-*',
      'endgame-*',
      'filebeat-*',
      'logs-*',
      'packetbeat-*',
      'winlogbeat-*',
      '.siem-signals-angelachuang-default',
    ],
    notes: [],
    noteIds: [],
    pinnedEventIds: [],
    pinnedEventsSaveObject: [],
    status: TimelineStatusEnum.active,
    title: 'my timeline',
    timelineType: TimelineTypeEnum.default,
    templateTimelineId: null,
    templateTimelineVersion: null,
    savedQueryId: null,
    sort: {
      columnId: '@timestamp',
      columnType: 'number',
      sortDirection: 'desc',
    },
    created: 1604497127973,
    createdBy: 'elastic',
    updated: 1604500278364,
    updatedBy: 'elastic',
    version: 'WzQ4NSwxXQ==',
  },
  outcome: 'exactMatch',
};

export const mockTemplate: ResolveTimelineResponse = {
  timeline: {
    savedObjectId: '0c70a200-1de0-11eb-885c-6fc13fca1850',
    columns: [
      {
        aggregatable: null,
        category: null,
        columnHeaderType: 'not-filtered',
        description: null,
        example: null,
        indexes: null,
        id: '@timestamp',
        name: null,
        searchable: null,
        type: null,
      },
      {
        aggregatable: null,
        category: null,
        columnHeaderType: 'not-filtered',
        description: null,
        example: null,
        indexes: null,
        id: 'signal.rule.description',
        name: null,
        searchable: null,
        type: null,
      },
      {
        aggregatable: null,
        category: null,
        columnHeaderType: 'not-filtered',
        description: null,
        example: null,
        indexes: null,
        id: 'event.action',
        name: null,
        searchable: null,
        type: null,
      },
      {
        aggregatable: null,
        category: null,
        columnHeaderType: 'not-filtered',
        description: null,
        example: null,
        indexes: null,
        id: 'process.name',
        name: null,
        searchable: null,
        type: null,
      },
      {
        aggregatable: true,
        category: 'process',
        columnHeaderType: 'not-filtered',
        description: 'The working directory of the process.',
        example: '/home/alice',
        indexes: null,
        id: 'process.working_directory',
        name: null,
        searchable: null,
        type: 'string',
      },
      {
        aggregatable: true,
        category: 'process',
        columnHeaderType: 'not-filtered',
        description:
          'Array of process arguments, starting with the absolute path to\nthe executable.\n\nMay be filtered to protect sensitive information.',
        example: '["/usr/bin/ssh","-l","user","10.0.0.16"]',
        indexes: null,
        id: 'process.args',
        name: null,
        searchable: null,
        type: 'string',
      },
      {
        aggregatable: null,
        category: null,
        columnHeaderType: 'not-filtered',
        description: null,
        example: null,
        indexes: null,
        id: 'process.pid',
        name: null,
        searchable: null,
        type: null,
      },
      {
        aggregatable: true,
        category: 'process',
        columnHeaderType: 'not-filtered',
        description: 'Absolute path to the process executable.',
        example: '/usr/bin/ssh',
        indexes: null,
        id: 'process.parent.executable',
        name: null,
        searchable: null,
        type: 'string',
      },
      {
        aggregatable: true,
        category: 'process',
        columnHeaderType: 'not-filtered',
        description:
          'Array of process arguments.\n\nMay be filtered to protect sensitive information.',
        example: '["ssh","-l","user","10.0.0.16"]',
        indexes: null,
        id: 'process.parent.args',
        name: null,
        searchable: null,
        type: 'string',
      },
      {
        aggregatable: true,
        category: 'process',
        columnHeaderType: 'not-filtered',
        description: 'Process id.',
        example: '4242',
        indexes: null,
        id: 'process.parent.pid',
        name: null,
        searchable: null,
        type: 'number',
      },
      {
        aggregatable: true,
        category: 'user',
        columnHeaderType: 'not-filtered',
        description: 'Short name or login of the user.',
        example: 'albert',
        indexes: null,
        id: 'user.name',
        name: null,
        searchable: null,
        type: 'string',
      },
      {
        aggregatable: true,
        category: 'host',
        columnHeaderType: 'not-filtered',
        description:
          'Name of the host.\n\nIt can contain what `hostname` returns on Unix systems, the fully qualified\ndomain name, or a name specified by the user. The sender decides which value\nto use.',
        example: null,
        indexes: null,
        id: 'host.name',
        name: null,
        searchable: null,
        type: 'string',
      },
    ],
    dataProviders: [
      {
        id: 'timeline-1-8622010a-61fb-490d-b162-beac9c36a853',
        name: '{process.name}',
        enabled: true,
        excluded: false,
        kqlQuery: '',
        type: DataProviderTypeEnum.template,
        queryMatch: {
          field: 'process.name',
          displayField: null,
          value: '{process.name}',
          displayValue: null,
          operator: ':',
        },
        and: [],
      },
      {
        id: 'timeline-1-4685da24-35c1-43f3-892d-1f926dbf5568',
        name: '{event.type}',
        enabled: true,
        excluded: false,
        kqlQuery: '',
        type: DataProviderTypeEnum.template,
        queryMatch: {
          field: 'event.type',
          displayField: null,
          value: '{event.type}',
          displayValue: null,
          operator: ':*',
        },
        and: [],
      },
    ],
    dateRange: {
      start: '2020-10-27T14:22:11.809Z',
      end: '2020-11-03T14:22:11.809Z',
    },
    description: '',
    eventType: 'all',
    eventIdToNoteIds: [],
    excludedRowRendererIds: [],
    favorite: [],
    filters: [],
    kqlMode: 'filter',
    kqlQuery: {
      filterQuery: {
        kuery: { kind: 'kuery', expression: '' },
        serializedQuery: '',
      },
    },
    indexNames: [],
    notes: [],
    noteIds: [],
    pinnedEventIds: [],
    pinnedEventsSaveObject: [],
    status: TimelineStatusEnum.immutable,
    title: 'Generic Process Timeline',
    timelineType: TimelineTypeEnum.template,
    templateTimelineId: 'cd55e52b-7bce-4887-88e2-f1ece4c75447',
    templateTimelineVersion: 1,
    savedQueryId: null,
    sort: {
      columnId: '@timestamp',
      columnType: 'number',
      sortDirection: 'desc',
    },
    created: 1604413368243,
    createdBy: 'angela',
    updated: 1604413368243,
    updatedBy: 'angela',
    version: 'WzQwMywxXQ==',
  },
  outcome: 'exactMatch',
};
