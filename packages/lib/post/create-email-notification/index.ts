import fs from 'fs'
import Handlebars from 'handlebars'
import path from 'path'

const postSource = fs.readFileSync(path.join(__dirname, 'post.hbs'), 'utf8')
export const postTemplate = Handlebars.compile(postSource)
