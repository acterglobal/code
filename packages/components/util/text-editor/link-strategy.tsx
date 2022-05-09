import { ContentBlock, ContentState } from 'draft-js'

const matchesEntityType = (type: string) => type === 'LINK'
// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export const linkStrategy = (
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
