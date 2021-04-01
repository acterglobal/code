import React, { FC, useState } from 'react'
import { mapFollowers } from 'src/lib/acter/map-followers'
import { Box } from '@material-ui/core'
import { makeStyles, Theme } from '@material-ui/core/styles'
import { Selectors } from 'src/components/acter/landing-page/members-section/selectors'
import { DisplayMembers } from 'src/components/acter/landing-page/members-section/display-members'
import { Acter } from '@schema'

const useStyles = makeStyles((theme: Theme) => ({
  container: {},
}))

const PEOPLE = 'people'
const ORGANISATIONS = 'organisations'

export interface MembersSectionProps {
  acter: Acter
}

export const MembersSection: FC<MembersSectionProps> = ({ acter }) => {
  const { user, organisation } = mapFollowers(acter)
  const classes = useStyles()
  const [activeSelector, setActiveSelector] = useState('people')

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
        acters={activeSelector === PEOPLE ? user : organisation}
        type={activeSelector}
      />
    </Box>
  )
}
