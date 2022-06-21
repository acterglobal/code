import { EditorState, DraftEntityType } from 'draft-js'

/**
 * Get list of entities of a type from draft-js Editor State
 * @param editorState current state of the draft-js content
 * @param entityType number of initials. Default is 2
 * @returns a an array or elements of a given Entity Type
 */
export const getEntities = (
  editorState: EditorState,
  entityType: DraftEntityType
): DraftEntityType[] => {
  const content = editorState.getCurrentContent()
  const entities = []
  content.getBlocksAsArray().forEach((block) => {
    let selectedEntity = null
    block.findEntityRanges(
      (character) => {
        if (character.getEntity() !== null) {
          const entity = content.getEntity(character.getEntity())
          if (!entityType || (entityType && entity.getType() === entityType)) {
            selectedEntity = {
              entityKey: character.getEntity(),
              blockKey: block.getKey(),
              entity: content.getEntity(character.getEntity()),
              content: entity.getData(),
            }
            return true
          }
        }
        return false
      },
      (start, end) => {
        entities.push({ ...selectedEntity, start, end })
      }
    )
  })
  return entities
}
