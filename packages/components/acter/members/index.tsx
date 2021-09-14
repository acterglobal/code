import React, { FC } from 'react'
import { Grid, makeStyles, createStyles } from '@material-ui/core'
import {
  InfoSection,
  InfoSectionProps,
} from '@acter/components/acter/landing-page/info-section'
import {
  LandingPageLayout,
  LandingPageLayoutProps,
} from '@acter/components/acter/landing-page/layout'
import {
  MembersSection,
  MembersSectionProps,
} from '@acter/components/group/members-section'

export type ActerMembersProps = LandingPageLayoutProps &
  MembersSectionProps &
  InfoSectionProps

export const ActerMembers: FC<ActerMembersProps> = ({
  acter,
  interestTypes,
  user,
  onJoin,
  onLeave,
  loading,
  onConnectionStateChange,
}) => {
  const classes = useStyles({})

  return (
    <LandingPageLayout
      acter={acter}
      user={user}
      onJoin={onJoin}
      onLeave={onLeave}
      loading={loading}
    >
      <Grid className={classes.main} item xs={12} sm={12} md={8} xl={10}>
        <MembersSection
          acter={acter}
          user={user}
          onConnectionStateChange={onConnectionStateChange}
        />
      </Grid>
      <Grid className={classes.info} item xs={12} sm={12} md={4} xl={2}>
        <InfoSection acter={acter} interestTypes={interestTypes} />
      </Grid>
    </LandingPageLayout>
  )
}

const useStyles = makeStyles(
  createStyles({
    // TODO: refactor
    menu: {
      order: 1,
    },
    main: {
      order: 2,
    },
    info: {
      order: 3,
    },
    postList: {
      marginLeft: 10,
    },
  })
)
