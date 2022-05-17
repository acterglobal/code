import React, { FC } from 'react'
import SanitizedHTML from 'react-sanitized-html'

import Markdown from 'markdown-to-jsx'

interface SanitizedContentProps {
  isMarkdown?: boolean
}

export const SanitizedContent: FC<SanitizedContentProps> = ({
  isMarkdown,
  children,
}): JSX.Element => {
  if (children) {
    if (isMarkdown) {
      if (typeof children !== 'string')
        throw new Error('Cannot render Markdown for non-string content')
      return <Markdown>{children as string}</Markdown>
    }

    return (
      <SanitizedHTML
        allowedAttributes={{ a: ['href'] }}
        allowedTags={['p', 'b', 'i', 'em', 'strong', 'a']}
        disallowedTagsMode="discard"
        html={children}
      ></SanitizedHTML>
    )
  }
}
