import React, { FC } from 'react'
import SanitizedHTML from 'react-sanitized-html'

import Markdown from 'markdown-to-jsx'

interface SanitizedContentProps {
  isMarkdown?: boolean
  children: string
}

export const SanitizedContent: FC<SanitizedContentProps> = ({
  isMarkdown,
  children,
}): JSX.Element => {
  if (children) {
    if (typeof children !== 'string')
      throw new Error('Cannot render Markdown for non-string content')

    const re = /<p>\s?<br(\\s\/)?>\s?<\/p>/gi
    const filteredContent = children.replaceAll(re, '')

    if (isMarkdown) return <Markdown>{filteredContent}</Markdown>

    return (
      <SanitizedHTML
        allowedAttributes={{ a: ['href', 'target'] }}
        allowedTags={[
          'h1',
          'h2',
          'h3',
          'p',
          'b',
          'i',
          'u',
          'em',
          'strong',
          'a',
          'ul',
          'ol',
          'li',
          'code',
          'blockquote',
        ]}
        disallowedTagsMode="discard"
        html={filteredContent}
      ></SanitizedHTML>
    )
  }
}
