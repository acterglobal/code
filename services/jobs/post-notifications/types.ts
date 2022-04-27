import { PostWithActerAndAuthor } from './template'

export interface PostJobVariables {
  post: {
    id: string
  }
}

export interface PostJobData {
  post: PostWithActerAndAuthor
}
