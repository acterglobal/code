import React, { FC, useState } from 'react'
import { di } from 'react-magnetic-di/macro'

import { Box } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'

import { DisplayMembers } from '@acter/components/acter/landing-page/members-section/display-members'
import { Selectors } from '@acter/components/acter/landing-page/members-section/selectors'
import { LoadingSpinner } from '@acter/components/util/loading-spinner'
import { mapFollowersByType } from '@acter/lib/acter/map-followers-by-type'
import { useActer } from '@acter/lib/acter/use-acter'
import { MemberType } from '@acter/lib/constants'

const { ORGANISATIONS, PEOPLE } = MemberType

const useStyles = makeStyles({
  container: {
    minWidth: 400,
  },
})

export const MembersSection: FC = () => {
  di(useActer)
  const classes = useStyles()
  const [activeSelector, setActiveSelector] = useState<MemberType>(PEOPLE)

  const { acter, loading: acterLoading } = useActer()

  if (acterLoading) return <LoadingSpinner />
  if (!acter) return null

  const followers = mapFollowersByType(acter)

  const handleSelectorChange = (selector) => {
    setActiveSelector(selector)
  }

  return (
    <Box className={classes.container}>
      <Selectors
        selectors={[PEOPLE, ORGANISATIONS]}
        activeSelector={activeSelector}
        onChange={handleSelectorChange}
      />
      <DisplayMembers
        followers={
          activeSelector === PEOPLE ? followers.user : followers.organisation
        }
        type={activeSelector}
        isOrganisation={activeSelector === ORGANISATIONS ? true : false}
      />
    </Box>
  )
}
