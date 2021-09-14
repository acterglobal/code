import React, { FC, useState } from 'react'
import { mapFollowersByType } from '@acter/lib/acter/map-followers-by-type'
import { Box } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import { Selectors } from '@acter/components/acter/landing-page/members-section/selectors'
import {
  DisplayMembers,
  DisplayMembersProps,
} from '@acter/components/acter/landing-page/members-section/display-members'
import { MemberType } from '@acter/lib/constants'
import { useUser } from '@acter/lib/user/use-user'
import { useActer } from '@acter/lib/acter/use-acter'
import { LoadingSpinner } from '@acter/components/util/loading-spinner'

const { ORGANISATIONS, PEOPLE } = MemberType

const useStyles = makeStyles({
  container: {
    minWidth: 400,
  },
})

export type MembersSectionProps = Omit<
  DisplayMembersProps,
  'followers' | 'type' | 'user'
>

export const MembersSection: FC<MembersSectionProps> = ({
  onConnectionStateChange,
}) => {
  const classes = useStyles()
  const [activeSelector, setActiveSelector] = useState<MemberType>(PEOPLE)

  const { acter, loading: acterLoading } = useActer()
  const { user, loading: userLoading } = useUser()

  if (acterLoading || userLoading) return <LoadingSpinner />
  if (!acter || !user) return null

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
        user={user}
        onConnectionStateChange={onConnectionStateChange}
        isOrganisation={activeSelector === ORGANISATIONS ? true : false}
      />
    </Box>
  )
}
