import { generateSchema } from './generate-schema'

generateSchema(true)
  .catch((e) => {
    console.error(e)
    process.exit(1)
  })
  .then(() => process.exit(0))
