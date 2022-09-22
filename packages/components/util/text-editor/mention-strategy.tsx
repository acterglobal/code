import { ContentBlock, ContentState } from 'draft-js'

import { DraftEntityTypes } from '@acter/lib/constants'

const { MENTION } = DraftEntityTypes
const matchesEntityType = (type: string) => type === MENTION
// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export const mentionStrategy = (
  contentBlock: ContentBlock,
  cb: (start: number, end: number) => void,
  contentState: ContentState
) => {
  if (!contentState) return
  contentBlock.findEntityRanges((character) => {
    const entityKey = character.getEntity()
    return (
      entityKey !== null &&
      matchesEntityType(contentState.getEntity(entityKey).getType())
    )
  }, cb)
}
