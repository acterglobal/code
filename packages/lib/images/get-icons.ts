/**
 * @param acterType acter type
 * @returns acter type icon
 */

export const getActerTypeIcon = (acterType: string): string =>
  `${process.env.NEXT_PUBLIC_IMAGE_LOADER_URL}/assets/${acterType}-icon.png`
