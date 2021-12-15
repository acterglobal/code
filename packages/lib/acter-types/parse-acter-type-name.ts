/**
 * @param acterTypeName
 * @returns removes spaces and converts ActerType name to lowercase
 */

export const parseActerTypeName = (acterTypeName: string): string =>
  acterTypeName.replace(/\s+/g, '-').toLowerCase()
