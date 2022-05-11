import { ReactNode } from 'react'
import SanitizedHTML from 'react-sanitized-html'

import Markdown from 'markdown-to-jsx'
import sanitizeHtml from 'sanitize-html'

export const SantizedContent = (
  content: string & ReactNode,
  isMarkDown: boolean
): JSX.Element => {
  const sanitizedConmponent = (
    <SanitizedHTML
      allowedAttributes={{ a: ['href'] }}
      allowedTags={['p', 'b', 'i', 'em', 'strong', 'a']}
      html={content}
    ></SanitizedHTML>
  )

  const tester1 = sanitizeHtml(sanitizedConmponent.props.html, {
    exclusiveFilter: function (frame) {
      return frame.tag === 'br' && !frame.text.trim()
    },
  })

  if (content)
    return isMarkDown ? (
      <Markdown>{content}</Markdown>
    ) : (
      <Markdown>{tester1}</Markdown>
    )
}
