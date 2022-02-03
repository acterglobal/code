module.exports = {
  loadLocaleFrom: (lang, ns) =>
    import(`./locales/${lang.toLowerCase()}/${ns}.json`).then((m) => m.default),
  locales: ['EN', 'DK'],
  defaultLocale: 'EN',
  pages: {
    '*': ['common'],
    '/': ['common'],
    '/dashboard': ['common', 'dashboard'],
  },
}
