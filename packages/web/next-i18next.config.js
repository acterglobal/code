/* eslint-disable @typescript-eslint/no-var-requires */
const path = require('path')

module.exports = {
  i18n: {
    defaultLocale: 'en_UK',
    locales: ['en_UK', 'da_DK'], // import these locales from DB Languages
  },
  localePath: path.resolve(`../translations/json`),
}
