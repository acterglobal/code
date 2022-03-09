/**
 * @param acterType acter type
 * @returns acter type icon
 */
import { getImageUrl } from './get-image-url'

export const getActerTypeIcon = (acterType: string): string =>
  getImageUrl(`/assets/${acterType}-icon.png`)
