/* eslint-disable @typescript-eslint/no-var-requires */
const path = require('path')

module.exports = {
  i18n: {
    defaultLocale: 'en_GB',
    locales: ['en_GB', 'da_DK'], // import these locales from DB Languages
  },
  localePath: path.resolve(`../translations/json`),
}
