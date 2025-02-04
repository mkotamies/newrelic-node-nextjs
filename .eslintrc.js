/*
 * Copyright 2021 New Relic Corporation. All rights reserved.
 * SPDX-License-Identifier: Apache-2.0
 */

'use strict'
module.exports = {
  extends: '@newrelic',
  parserOptions: {
    ecmaVersion: 2020
  },
  ignorePatterns: ['tests/versioned/app']
}
