import fs from 'fs'
import Handlebars from 'handlebars'
import path from 'path'

export type ContentWithLayout = {
  content: string
}

const source = fs.readFileSync(path.join(__dirname, 'template.hbs'), 'utf8')
const template = Handlebars.compile<ContentWithLayout>(source)

export const renderWithLayout = (content: string): string => {
  return template({ content })
}
