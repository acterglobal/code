import axios from 'axios'
import { MiddlewareFn } from 'type-graphql'

export const QueuePostNotifications = (): MiddlewareFn => async (_, next) => {
  const post = await next()

  if (!post?.id) {
    console.error('No ID to create post notification', post)
    return
  }

  console.debug('Sending post job notification')
  axios({
    method: 'POST',
    url: `${process.env.BASE_URL}/api/jobs/notify`,
    data: {
      post,
    },
  })
}
