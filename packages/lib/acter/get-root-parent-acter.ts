import { Acter } from '@acter/schema'

/**
 *
 * @param acter activity or acter whose parent acter we are to return
 * @returns parent acter of acter passed as prop
 */

export const getRootParentActer = (acter: Acter): Acter => {
  return acter?.Parent ? getRootParentActer(acter.Parent) : acter
}
