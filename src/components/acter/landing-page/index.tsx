import React, { FC } from 'react'
import { useRouter } from 'next/router'

import {
  Grid,
  makeStyles,
  createStyles,
  Theme,
  Typography,
} from '@material-ui/core'

import {
  HeaderSection,
  HeaderSectionProps,
} from 'src/components/acter/landing-page/header-section'
import {
  InfoSection,
  InfoSectionProps,
} from 'src/components/acter/landing-page/info-section'
import { ActivitiesList } from 'src/components/activity/list'
import {
  MembersSection,
  MembersSectionProps,
} from 'src/components/acter/landing-page/members-section'
import { ACTIVITIES, MEMBERS, FEED } from 'src/constants'
import { getLandingPageTab } from 'src/lib/acter/get-landing-page-tab'

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    header: {
      marginBottom: theme.spacing(2),
    },
    menu: {
      order: 1,
    },
    main: {
      order: 2,
    },
    info: {
      order: 3,
    },
  })
)

export type ActerLandingProps = HeaderSectionProps &
  InfoSectionProps &
  MembersSectionProps

export const ActerLanding: FC<ActerLandingProps> = ({
  acter,
  interestTypes,
  user,
  onJoin,
  onLeave,
  onConnectionStateChange,
  loading,
}) => {
  const classes = useStyles({})
  const router = useRouter()
  const tab = getLandingPageTab(router, FEED)

  return (
    <Grid className={classes.header} container>
      <HeaderSection
        acter={acter}
        user={user}
        onJoin={onJoin}
        onLeave={onLeave}
        loading={loading}
      />
      <Grid container spacing={2}>
        <Grid className={classes.main} item xs={12} sm={12} md={8} xl={10}>
          <div role="tabpanel" hidden={tab !== ACTIVITIES}>
            <ActivitiesList acter={acter} user={user} />
          </div>
          <div role="tabpanel" hidden={tab !== MEMBERS}>
            <MembersSection
              acter={acter}
              user={user}
              onConnectionStateChange={onConnectionStateChange}
            />
          </div>
          <div role="tabpanel" hidden={tab !== FEED}>
            <Typography variant="subtitle1">Coming soon...</Typography>
          </div>
        </Grid>
        <Grid className={classes.info} item xs={12} sm={12} md={4} xl={2}>
          <InfoSection acter={acter} interestTypes={interestTypes} />
        </Grid>
      </Grid>
    </Grid>
  )
}
