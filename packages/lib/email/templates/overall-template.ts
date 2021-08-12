import fs from 'fs'
import Handlebars from 'handlebars'
import path from 'path'

const source = fs.readFileSync(
  path.join(__dirname, 'overall-template.hbs'),
  'utf8'
)
export const overallTemplate = Handlebars.compile(source)
