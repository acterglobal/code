import 'reflect-metadata'
import { Job, Queue, Worker } from 'bullmq'
import { format, sub } from 'date-fns'
import prisma from '@acter/lib/prisma'
import {
  DATE_FORMAT_NO_TIME,
  DIGEST_CREATE_QUEUE,
  TIME_FORMAT_SHORT,
} from '@acter/lib/constants'
import { User } from '@acter/schema/types'
import { emailSendQueue } from './email-send-worker'

export interface DigestCreateJob {
  user: User
}

export const digestCreateQueue = new Queue<DigestCreateJob>(DIGEST_CREATE_QUEUE)

export const digestCreateWorker = new Worker(
  DIGEST_CREATE_QUEUE,
  async (job: Job<DigestCreateJob>) => {
    const now = new Date()
    const userPosts = await prisma.user.findMany({
      where: {
        id: job.data.user.id,
      },
      include: {
        Acter: {
          include: {
            Following: {
              include: {
                Following: {
                  include: {
                    AttachedPosts: {
                      include: {
                        Author: true,
                      },
                      where: {
                        createdAt: {
                          gt: sub(now, { days: 1 }),
                        },
                      },
                    },
                  },
                },
              },
            },
          },
        },
      },
    })

    const posts = userPosts.reduce(
      (memo, user) => [
        ...memo,
        ...user.Acter.Following.reduce(
          (memo2, { Following: { AttachedPosts } }) => [
            ...memo2,
            ...AttachedPosts.map(
              (post) =>
                `At ${format(post.createdAt, TIME_FORMAT_SHORT)} ${
                  post.Author.name
                } said:
                ${post.content}`
            ),
          ],
          []
        ),
      ],
      []
    )

    await emailSendQueue.add(`send_digest_${job.data.user.id}`, {
      to: job.data.user.email,
      subject: `Daily notification digest from Acter for ${format(
        new Date(),
        DATE_FORMAT_NO_TIME
      )}`,
      // prettier-ignore
      content: posts.join("\n"),
    })
  },
  { concurrency: 50 }
)
