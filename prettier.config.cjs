'use strict';

module.exports = {
  singleQuote: true,
  trailingComma: 'all',
  importOrder: ['^node:(.*)$', '<THIRD_PARTY_MODULES>', '^[./]'],
  importOrderSeparation: false,
  importOrderSortSpecifiers: true,
  importOrderParserPlugins: ['importAssertions', 'typescript', 'jsx'],
  printWidth: 80,
};
