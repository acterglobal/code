module.exports = {
  loadLocaleFrom: (lang, ns) =>
    import(`./locales/${lang}/${ns}.json`).then((m) => m.default),
  locales: ['en-UK', 'da-DK'], // TODO: use locales from DB enum
  defaultLocale: 'en-UK',
  pages: {
    '*': ['common'],
    '/': ['common'],
    '/dashboard': ['common', 'dashboard'],
  },
}
