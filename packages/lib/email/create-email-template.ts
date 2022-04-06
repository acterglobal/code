import fs from 'fs'
import Handlebars from 'handlebars'
import path from 'path'

export interface CreateEmailReturn {
  html: string
  text: string
}

type LayoutVars = {
  baseUrl: string
}

export const createEmailTemplate = <TData>(
  templatePath: string,
  _languageCode: string
): HandlebarsTemplateDelegate<TData> => {
  const layout = fs.readFileSync(
    path.join(__dirname, 'layout', 'template.hbs'),
    'utf8'
  )

  const content = fs.readFileSync(templatePath, 'utf8')
  Handlebars.registerPartial('content', content)

  const baseUrl = process.env.BASE_URL

  const template = Handlebars.compile<TData & LayoutVars>(layout)

  return (args) => template({ baseUrl, ...args })
}
