import React, { FC, useState } from 'react'
import { mapFollowers } from 'src/lib/acter/map-followers'
import { Box } from '@material-ui/core'
import { makeStyles, Theme } from '@material-ui/core/styles'
import { Selectors } from 'src/components/acter/landing-page/members-section/selectors'
import { DisplayMembers } from 'src/components/acter/landing-page/members-section/display-members'
import { Acter } from '@generated/type-graphql'

const useStyles = makeStyles((theme: Theme) => ({
  container: {
    minWidth: 400,
    height: 400,
  },
}))

const PEOPLE = 'people'
const ORGANISATIONS = 'organisations'

export interface MembersSectionProps {
  acter: Acter
}

export const MembersSection: FC<MembersSectionProps> = ({ acter }) => {
  // const { users, organisations } = mapFollowers(acter)
  const classes = useStyles()
  const [activeSelector, setActiveSelector] = useState('people')

  const handleSelectorChange = (selector) => {
    setActiveSelector(selector)
  }

  return (
    <Box className={classes.container}>
      Coming soon
      {/* <Selectors
        selectors={[PEOPLE, ORGANISATIONS]}
        activeSelector={activeSelector}
        handleSelectorChange={handleSelectorChange}
      />
      <DisplayMembers
        acters={activeSelector === PEOPLE ? users : organisations}
        type={activeSelector}
      /> */}
    </Box>
  )
}
