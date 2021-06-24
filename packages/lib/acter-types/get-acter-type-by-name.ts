import { ActerType } from '@schema'

/**
 * Gives the acter type by its name
 * @param acterTypes list of acter types
 * @param acterTypeName acter type name
 * @returns acter type
 */
export const getActerTypeByName = (
  acterTypes: ActerType[],
  acterTypeName: string
): ActerType => acterTypes.find(({ name }) => name === acterTypeName)
