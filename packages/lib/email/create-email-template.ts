import fs from 'fs'
import Handlebars from 'handlebars'
import path from 'path'

export interface CreateEmailReturn {
  html: string
  text: string
}

const layout = fs.readFileSync(
  path.join(__dirname, 'layout', 'template.hbs'),
  'utf8'
)

export const createEmailTemplate = <TData>(
  templatePath: string
): HandlebarsTemplateDelegate<TData> => {
  const content = fs.readFileSync(templatePath, 'utf8')
  Handlebars.registerPartial('content', content)
  return Handlebars.compile<TData>(layout)
}
