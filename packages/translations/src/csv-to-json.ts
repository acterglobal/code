import csv from 'csvtojson'
import { promises as fs } from 'fs'
import path from 'path'

type Language = Record<string, string>
type LanguageMap = Record<string, Language>

// TODO :create languageMap with typegraphql generated Language enum keys
const languageMap: LanguageMap = {
  en_UK: {},
  da_DK: {},
}

export const csvToJson = async (): Promise<void> => {
  const csvPath = path.join(__dirname, '..', 'csv')
  const files = await fs.readdir(csvPath)

  await files.map(async (filename) => {
    const file = await csv().fromFile(path.join(csvPath, filename))
    const outFilename = filename.replace(
      /Translations - ([^\\.]*).csv/,
      '$1.json'
    )

    const translations = Object.keys(languageMap).reduce<LanguageMap>(
      (memo, locale) => {
        return {
          ...memo,
          [locale]: file.reduce(
            (ts, t) => ({
              ...ts,
              [t['Translation key']]: t[locale],
            }),
            {}
          ),
        }
      },
      languageMap
    )

    await Object.keys(translations).map(async (locale) => {
      const folder = path.join(__dirname, '..', 'json', locale)
      await fs.mkdir(folder, { recursive: true })
      await fs.writeFile(
        path.join(folder, outFilename),
        Buffer.from(JSON.stringify(translations[locale], null, 2))
      )
    })
  })
}
;(async () => csvToJson())()
