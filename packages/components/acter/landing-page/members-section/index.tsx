import React, { FC, useState } from 'react'

import { Box } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'

import { DisplayMembers } from '@acter/components/acter/landing-page/members-section/display-members'
import { Selectors } from '@acter/components/acter/landing-page/members-section/selectors'
import { theme } from '@acter/components/themes/acter-theme'
import { LoadingSpinner } from '@acter/components/util/loading-spinner'
import { mapFollowersByType } from '@acter/lib/acter/map-followers-by-type'
import { useActer } from '@acter/lib/acter/use-acter'
import { MemberType } from '@acter/lib/constants'

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

  const handleSelectorChange = (selector) => {
    setActiveSelector(selector)
  }

  return (
    <Box className={classes.container}>
      <Selectors
        selectors={[PEOPLE, ACTERS]}
        activeSelector={activeSelector}
        onChange={handleSelectorChange}
        totalResults={followers?.length}
      />
      <DisplayMembers
        followers={followers}
        isOrganisation={activeSelector === ACTERS ? true : false}
      />
    </Box>
  )
}

const useStyles = makeStyles({
  container: {
    borderRadius: 6,
    backgroundColor: theme.colors.white,
  },
})
