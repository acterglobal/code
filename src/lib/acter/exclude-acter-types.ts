import { Acter } from '@schema'

export const excludeActerTypes = (
  acters: Acter[],
  acterTypes: string[]
): Acter[] => {
  return acters.filter(
    (acter) => !acterTypes.includes(acter.ActerType.name.toLocaleLowerCase())
  )
}
