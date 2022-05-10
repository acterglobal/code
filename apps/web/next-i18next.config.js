/* eslint-disable @typescript-eslint/no-var-requires */
const path = require('path')

module.exports = {
  i18n: {
    defaultLocale: 'en-GB',
    locales: ['en-GB', 'da-DK'], // import these locales from DB Languages
    fallbackNS: 'common',
    localePath: path.resolve('./public/locales'),
  },
}
