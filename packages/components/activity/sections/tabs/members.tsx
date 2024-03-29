import React, { FC } from 'react'

import { createStyles, makeStyles, Theme } from '@material-ui/core'

import { FollowersAvatars } from '@acter/components/acter/followers-avatars'
import { SectionContainer } from '@acter/components/group/sections/container'
import { useActer } from '@acter/lib/acter/use-acter'
import { SectionTabs as ActivitySectionTabs } from '@acter/lib/constants'

export const MembersSection: FC = () => {
  const classes = useStyles()
  const { acter } = useActer()

  return (
    <SectionContainer
      title="Participants"
      buttonText="See All Participants"
      sectionContent={ActivitySectionTabs.MEMBERS}
    >
      <div className={classes.list}>
        <FollowersAvatars acter={acter} />
      </div>
    </SectionContainer>
  )
}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    list: {
      paddingTop: theme.spacing(1),
      height: theme.spacing(15),
    },
  })
)
