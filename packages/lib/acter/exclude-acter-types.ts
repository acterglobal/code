import { Acter } from '@acter/schema/types'

export const excludeActerTypes = (
  acters: Acter[],
  acterTypes: string[]
): Acter[] => {
  return acters.filter(
    (acter) => !acterTypes.includes(acter.ActerType.name.toLocaleLowerCase())
  )
}
