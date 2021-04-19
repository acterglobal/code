import React, { FC, useState } from 'react'
import { mapFollowers } from 'src/lib/acter/map-followers'
import { Box } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import { Selectors } from 'src/components/acter/landing-page/members-section/selectors'
import { DisplayMembers } from 'src/components/acter/landing-page/members-section/display-members'
import {
  DisplayUsers,
  DisplayUsersProps,
} from 'src/components/acter/landing-page/members-section/display-users'

const useStyles = makeStyles({
  container: {
    minWidth: 400,
  },
})

const PEOPLE = 'people'
const ORGANISATIONS = 'organisations'

export type MembersSectionProps = Omit<DisplayUsersProps, 'acters'>

export const MembersSection: FC<MembersSectionProps> = ({
  acter,
  onSettingsChange,
  loading,
}) => {
  const { user, organisation } = mapFollowers(acter)
  const classes = useStyles()
  const [activeSelector, setActiveSelector] = useState('people')

  const handleSelectorChange = (selector) => {
    setActiveSelector(selector)
  }

  const Display = activeSelector === PEOPLE ? DisplayUsers : DisplayMembers

  return (
    <Box className={classes.container}>
      <Selectors
        selectors={[PEOPLE, ORGANISATIONS]}
        activeSelector={activeSelector}
        onChange={handleSelectorChange}
      />
      <Display
        acter={acter}
        acters={activeSelector === PEOPLE ? user : organisation}
        type={activeSelector}
        onSettingsChange={onSettingsChange}
        loading={loading}
      />
    </Box>
  )
}
