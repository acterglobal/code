import { mapFollowersByType } from '@acter/lib/acter/map-followers-by-type'
import { MemberType } from '@acter/lib/constants'
import { Acter, ActerConnection, ActerConnectionRole } from '@acter/schema'

const { PEOPLE, ACTERS } = MemberType
const { ADMIN, MEMBER } = ActerConnectionRole

export const getFollowersByType = (
  acter: Acter,
  activeSelector: MemberType
): ActerConnection[] => {
  const allFollowers = mapFollowersByType(acter)

  const followers =
    activeSelector === PEOPLE ? allFollowers[PEOPLE] : allFollowers[ACTERS]

  const validFollowers = followers?.filter((follower) =>
    [ADMIN, MEMBER].includes(follower.role as ActerConnectionRole)
  )

  return validFollowers
}
