import React, { FC, useState } from 'react'

import { Box } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'

import { DisplayActers } from '@acter/components/acter/landing-page/members-section/display-acters'
import { DisplayMembers } from '@acter/components/acter/landing-page/members-section/display-members'
import { Selectors } from '@acter/components/acter/landing-page/members-section/selectors'
import { LoadingSpinner } from '@acter/components/util/loading-spinner'
import { mapFollowersByType } from '@acter/lib/acter/map-followers-by-type'
import { useActer } from '@acter/lib/acter/use-acter'
import { MemberType } from '@acter/lib/constants'
import { ActerConnectionRole } from '@acter/schema'
import { ActerWhoCanJoinSettings } from '@acter/schema'

const { ADMIN, MEMBER } = ActerConnectionRole

const { ACTERS, PEOPLE } = MemberType

export const MembersSection: FC = () => {
  const classes = useStyles()
  const [activeSelector, setActiveSelector] = useState<MemberType>(PEOPLE)

  const { acter, fetching: acterLoading } = useActer()

  if (acterLoading) return <LoadingSpinner />
  if (!acter) return null

  const allFollowers = mapFollowersByType(acter)

  const followers =
    activeSelector === PEOPLE ? allFollowers.user : allFollowers.organisation

  const validFollowers = followers?.filter((follower) =>
    [ADMIN, MEMBER].includes(follower.role as ActerConnectionRole)
  )

  const handleSelectorChange = (selector) => setActiveSelector(selector)

  const isOrganisationsCanJoin =
    acter.acterWhoCanJoinSetting === ActerWhoCanJoinSettings.ACTERS

  const selectors = [PEOPLE]
  isOrganisationsCanJoin && selectors.push(ORGANISATIONS)

  return (
    <Box className={classes.container}>
      <Selectors
        selectors={selectors}
        activeSelector={activeSelector}
        onChange={handleSelectorChange}
        totalResults={validFollowers?.length}
      />
      {activeSelector === PEOPLE && (
        <DisplayMembers followers={validFollowers} />
      )}
      {activeSelector === ACTERS && (
        <DisplayActers followers={validFollowers} />
      )}
    </Box>
  )
}

const useStyles = makeStyles({
  container: {
    width: '100%',
  },
})
