/*
 * Copyright Elasticsearch B.V. and/or licensed to Elasticsearch B.V. under one
 * or more contributor license agreements. Licensed under the Elastic License
 * 2.0; you may not use this file except in compliance with the Elastic License
 * 2.0.
 */

import { keyBy } from 'lodash';
import type { IndexPatternField } from '../editor_frame_service/types';

export function getFieldByNameFactory(newFields: IndexPatternField[]) {
  const fieldsLookup = keyBy(newFields, 'name');
  return (name: string) => fieldsLookup[name];
}
