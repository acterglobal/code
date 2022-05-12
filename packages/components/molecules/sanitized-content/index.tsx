import { ReactNode } from 'react'
import SanitizedHTML from 'react-sanitized-html'

import Markdown from 'markdown-to-jsx'

export const SantizedContent = (
  content: string & ReactNode,
  isMarkDown: boolean
): JSX.Element => {
  const sanitizedComponent = (
    <SanitizedHTML
      allowedAttributes={{ a: ['href'] }}
      allowedTags={['p', 'b', 'i', 'em', 'strong', 'a']}
      disallowedTagsMode="discard"
      html={content}
    ></SanitizedHTML>
  )

  const filteredContent = sanitizedComponent.props.html.replaceAll(
    '<p><br></p>',
    ''
  )

  if (content)
    return isMarkDown ? (
      <Markdown>{content}</Markdown>
    ) : (
      <Markdown>{filteredContent}</Markdown>
    )
}
