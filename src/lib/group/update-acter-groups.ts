import { Acter } from '@schema'
import { GROUP } from 'src/constants'

export const updateActerGroups = (acter: Acter, group: Acter): Acter => {
  return acter.ActerType.name === GROUP
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