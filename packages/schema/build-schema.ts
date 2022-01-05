import path from 'path'
import { emitSchemaDefinitionFile } from 'type-graphql'

import { generateSchema } from '@acter/backend-service/generate-schema'

const main = async () => {
  const schema = await generateSchema()
  const generatedPath = path.join(__dirname, 'generated')
  const graphQLSchemaFilename = path.join(generatedPath, 'schema.graphql')
  await emitSchemaDefinitionFile(graphQLSchemaFilename, schema)
}

main()
  .catch((e) => {
    console.error(e)
    process.exit(1)
  })
  .then(() => process.exit(0))
