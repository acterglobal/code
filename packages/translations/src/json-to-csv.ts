import { promises as fs } from 'fs'
import { Parser } from 'json2csv'
import path from 'path'

type Language = Record<string, string>
type LanguageMap = Record<string, Language>

export const languageMap: LanguageMap = {
  en_GB: {},
  da_DK: {},
}

const jsonToCsv = async () => {
  const jsonPath = path.join(__dirname, '..', 'json')
  const folders = await fs.readdir(jsonPath)

  const bulkData = await folders.reduce(async (memo, folder) => {
    const files = await fs.readdir(path.join(jsonPath, folder))

    const folderData = await files.reduce(async (prevFilesData, file) => {
      const fileRawData = await fs.readFile(path.join(jsonPath, folder, file))
      const jsonData = await JSON.parse(fileRawData.toString())
      const fileName = file.split('.')[0]

      return {
        ...(await prevFilesData),
        [fileName]: jsonData,
      }
    }, {})

    return {
      ...(await memo),
      [folder]: folderData,
    }
  }, {})

  const data = Object.keys(bulkData['en_GB']).reduce((prev1, namespace) => {
    const keysData = Object.keys(bulkData['en_GB'][namespace]).reduce(
      (prev2, key) => {
        const localeData = Object.keys(languageMap).reduce((prev3, locale) => {
          return {
            ...prev3,
            [locale]: bulkData[locale][namespace][key],
          }
        }, {})

        return [
          ...prev2,
          {
            'Translation key': key,
            ...localeData,
          },
        ]
      },
      []
    )
    return {
      ...prev1,
      [namespace]: keysData,
    }
  }, {})

  await Object.keys(data).map(async (namespace) => {
    const json2csvParser = new Parser()
    const csvData = json2csvParser.parse(data[namespace])

    const folder = path.join(__dirname, '..', 'csv')
    const fileName = `Translations - ${namespace}.csv`
    await fs.writeFile(path.join(folder, fileName), csvData)
  })
}

;(async () => jsonToCsv())()
