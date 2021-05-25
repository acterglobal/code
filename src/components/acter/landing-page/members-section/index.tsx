import React, { FC, useState } from 'react'
import { mapFollowersByType } from 'src/lib/acter/map-followers-by-type'
import { Box } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import { Selectors } from 'src/components/acter/landing-page/members-section/selectors'
import {
  DisplayMembers,
  DisplayMembersProps,
  MemberType,
} from 'src/components/acter/landing-page/members-section/display-members'
import { ORGANISATIONS, PEOPLE } from 'src/constants'

const useStyles = makeStyles({
  container: {
    minWidth: 400,
  },
})

export type MembersSectionProps = Omit<
  DisplayMembersProps,
  'followers' | 'type'
>

export const MembersSection: FC<MembersSectionProps> = ({
  acter,
  user,
  onConnectionStateChange,
}) => {
  const followers = mapFollowersByType(acter)
  const classes = useStyles()
  const [activeSelector, setActiveSelector] = useState<MemberType>(PEOPLE)

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
        acter={acter}
        followers={
          activeSelector === PEOPLE ? followers.user : followers.organisation
        }
        type={activeSelector}
        user={user}
        onConnectionStateChange={onConnectionStateChange}
      />
    </Box>
  )
}
