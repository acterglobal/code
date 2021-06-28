import { Acter } from '@schema'
import { ActerTypes } from '@acter/lib/constants'

export const updateActerGroups = (acter: Acter, group: Acter): Acter => {
  return acter.ActerType.name === ActerTypes.GROUP
    ? {
        ...group,
        Parent: {
          ...acter.Parent,
          Children: updateChildren(acter.Parent.Children, group),
        },
      }
    : {
        ...acter,
        Children: updateChildren(acter.Children, group),
      }
}

const updateChildren = (children: Acter[], group): Acter[] => {
  const existingIndex = children.findIndex((acter) => acter.id === group.id)
  if (existingIndex !== -1) {
    return [
      ...children.slice(0, existingIndex),
      group,
      ...children.slice(existingIndex + 1),
    ]
  }

  return [...children, group]
}
