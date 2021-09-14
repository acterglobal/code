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
} from '@acter/components/acter/landing-page/members-section'

export type ActerMembersProps = LandingPageLayoutProps &
  MembersSectionProps &
  InfoSectionProps

export const ActerMembers: FC<ActerMembersProps> = ({
  acter,
  interestTypes,
  onJoin,
  onLeave,
  loading,
  onConnectionStateChange,
}) => {
  const classes = useStyles({})

  return (
    <LandingPageLayout
      acter={acter}
      onJoin={onJoin}
      onLeave={onLeave}
      loading={loading}
    >
      <Grid className={classes.main} item xs={12} sm={12} md={8} xl={10}>
        <MembersSection
          acter={acter}
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
    main: {
      order: 1,
      marginLeft: 10,
    },
    info: {
      order: 2,
    },
  })
)
