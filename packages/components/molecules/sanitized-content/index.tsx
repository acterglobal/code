import { ReactNode } from 'react'
import SanitizedHTML from 'react-sanitized-html'

import Markdown from 'markdown-to-jsx'

export const SantizedContent = (
  content: string & ReactNode,
  isMarkDown: boolean
): JSX.Element => {
  if (content)
    return isMarkDown ? (
      <Markdown>{content}</Markdown>
    ) : (
      <SanitizedHTML
        allowedAttributes={{ a: ['href'] }}
        allowedTags={['p', 'b', 'i', 'em', 'strong', 'a']}
        html={content}
      ></SanitizedHTML>
    )
}
