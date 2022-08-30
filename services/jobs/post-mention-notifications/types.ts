import { PostMention } from '@acter/schema'

import { PostWithActerAndAuthor } from '../post-notifications/template'

export interface PostMentionJobVariables {
  id: string
}

export interface PostMentionJobData {
  postMention: PostMention
  post: PostWithActerAndAuthor
}
