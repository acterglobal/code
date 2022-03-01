// import path from 'path'
// eslint-disable-next-line
const path = require('path')

module.exports = {
  i18n: {
    defaultLocale: 'en_UK',
    locales: ['en_UK', 'da_DK'], // import these locales from DB Languages
  },
  localPath: path.resolve(`../translations/json`),
}
