import type { NextApiRequest, NextApiResponse } from 'next'

import { createPostNotifications } from '@acter/jobs/post-notifications'

export default (req: NextApiRequest, res: NextApiResponse): void => {
  try {
    createPostNotifications({
      post: req.body.post,
    })
  } catch (e) {
    console.error(e)
  }

  res.status(200).send('ok')
}
