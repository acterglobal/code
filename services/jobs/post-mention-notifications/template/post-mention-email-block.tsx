import React, { FC } from 'react'

import Markdown from 'markdown-to-jsx'
import { MjmlColumn, MjmlSection, MjmlText } from 'mjml-react'

import { DATE_TIME_FORMAT_LONG } from '@acter/lib/constants'
import { parseAndFormat } from '@acter/lib/datetime/parse-and-format'
import { Post } from '@acter/schema'

export interface PostMentionEmailBlockProps {
  post: Post
  notificationUrl: string
}

export const PostMentionEmailBlock: FC<PostMentionEmailBlockProps> = ({
  post,
  notificationUrl,
}) => {
  const sentAt = parseAndFormat({
    dateString: post.createdAt,
    formatString: DATE_TIME_FORMAT_LONG,
  })
  return (
    <>
      <MjmlSection backgroundColor="#fff">
        <MjmlColumn>
          <MjmlText fontFamily="Montserrat, Arial, non-serif">
            On {sentAt} {post.Author.name}{' '}
            <a href={notificationUrl}>mentioned you in the following post</a>:
          </MjmlText>
        </MjmlColumn>
      </MjmlSection>
      <MjmlSection backgroundColor="#fff">
        <MjmlColumn>
          <MjmlText fontFamily="Montserrat, Arial, non-serif">
            <div className="post-content">
              <Markdown>{post.content}</Markdown>
            </div>
          </MjmlText>
        </MjmlColumn>
      </MjmlSection>
    </>
  )
}
