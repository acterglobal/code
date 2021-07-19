import 'reflect-metadata'
import { Job, Queue, Worker } from 'bullmq'
import { sub } from 'date-fns'
import prisma from '@acter/lib/prisma'
import { DIGEST_CREATE_QUEUE } from '@acter/lib/constants'
import { User } from '@acter/schema/types'

export interface DigestCreateJob {
  user: User
}

export const digestCreateQueue = new Queue<DigestCreateJob>(DIGEST_CREATE_QUEUE)

export const digestCreateWorker = new Worker(
  DIGEST_CREATE_QUEUE,
  async (job: Job<DigestCreateJob>) => {
    const now = new Date()
    const posts = await prisma.user.findMany({
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

    console.log('Posts from which we create a digest')
    posts.forEach((user) => {
      user.Acter.Following.forEach((Following) => {
        Following.Following.AttachedPosts.forEach((post) => {
          console.log(post)
        })
      })
    })
  },
  { concurrency: 50 }
)
