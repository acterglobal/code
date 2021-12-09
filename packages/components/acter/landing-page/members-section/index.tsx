import React, { FC, useState } from 'react'

import { Box } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'

import { DisplayActers } from '@acter/components/acter/landing-page/members-section/display-acters'
import { DisplayMembers } from '@acter/components/acter/landing-page/members-section/display-members'
import { Selectors } from '@acter/components/acter/landing-page/members-section/selectors'
import { LoadingSpinner } from '@acter/components/util/loading-spinner'
import { getFollowersByType } from '@acter/lib/acter/get-followers-by-type'
import { useActer } from '@acter/lib/acter/use-acter'
import { MemberType } from '@acter/lib/constants'

const { ACTERS, PEOPLE } = MemberType

export const MembersSection: FC = () => {
  const classes = useStyles()
  const [activeSelector, setActiveSelector] = useState<MemberType>(PEOPLE)

  const { acter, fetching: acterLoading } = useActer()

  if (acterLoading) return <LoadingSpinner />
  if (!acter) return null

  const validFollowers = getFollowersByType(acter, activeSelector)

  const handleSelectorChange = (selector) => setActiveSelector(selector)

  const selectors = [PEOPLE, ACTERS]

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
