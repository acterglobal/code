import aws from 'aws-sdk'
import { getTokenUser } from 'src/lib/next-auth/jwt'
import { initSentry } from 'src/lib/sentry'

initSentry()

export default async function handler(req, res) {
  const tokenUser = await getTokenUser(req)
  if (!tokenUser) {
    return res.status(401).send()
  }

  if (!req.query.contentType || !req.query.fileName) {
    return res.status(400).send()
  }

  // const spacesEndpoint = new aws.Endpoint(process.env.S3_URI)
  const s3 = new aws.S3({
    // endpoint: spacesEndpoint,
    accessKeyId: process.env.S3_KEY,
    secretAccessKey: process.env.S3_SECRET,
    region: 'eu-central-1',
  })

  const expireSeconds = 60

  const url = s3.getSignedUrl('putObject', {
    Bucket: process.env.S3_BUCKET,
    Key: req.query.fileName,
    ContentType: req.query.contentType,
    Expires: expireSeconds,
    ACL: 'public-read',
  })

  res.send(url)
}
