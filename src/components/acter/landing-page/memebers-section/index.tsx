import React, { FC, useState } from 'react'
import { Box } from '@material-ui/core'
import { makeStyles, Theme } from '@material-ui/core/styles'
import { Selectors } from 'src/components/acter/landing-page/memebers-section/selectors'
import { DisplayMembers } from 'src/components/acter/landing-page/memebers-section/display-members'
import { Acter } from '@generated/type-graphql'

const useStyles = makeStyles((theme: Theme) => ({
  container: {
    minWidth: 400,
    height: 400,
  },
}))

export interface MembersSectionProps {
  // TODO: fix the types below
  people: any
  organisations: any
}

export const MembersSection: FC<MembersSectionProps> = (props) => {
  const { people, organisations } = props
  const classes = useStyles()
  const [activeSelector, setActiveSelector] = useState('people')

  const handleSelectorChange = (selector) => {
    setActiveSelector(selector)
  }

  const handleViewMember = (memeberId) => {
    // TODO:  implement this
  }

  return (
    <Box className={classes.container}>
      <Selectors
        people={people}
        organisations={organisations}
        activeSelector={activeSelector}
        handleSelectorChange={handleSelectorChange}
      />
      <DisplayMembers
        members={activeSelector === 'people' ? people : organisations}
        handleViewMember={handleViewMember}
      />
    </Box>
  )
}
