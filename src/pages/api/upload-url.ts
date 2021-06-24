import aws from 'aws-sdk'
import type { NextApiRequest, NextApiResponse } from 'next'
import { getSession } from '@auth0/nextjs-auth0'
import { initSentry } from '@acter/lib/sentry'

initSentry()

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
): Promise<void> {
  const tokenUser = getSession(req, res)?.user?.email
  if (!tokenUser) {
    return res.status(401).send(null)
  }

  if (!req.query.contentType || !req.query.fileName) {
    return res.status(400).send(null)
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
