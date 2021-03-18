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
import { Tabs } from 'src/components/util/tabs/'
import {
  InfoSection,
  InfoSectionProps,
} from 'src/components/acter/landing-page/info-section'
import { ActivitiesList } from 'src/components/activity/list'
import { MembersSection } from 'src/components/acter/landing-page/members-section'
import { ACTIVITIES, MEMBERS, FORUM } from 'src/constants'
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

export type ActerLandingProps = HeaderSectionProps & InfoSectionProps

export const ActerLanding: FC<ActerLandingProps> = ({
  acter,
  interestTypes,
  user,
  onJoin,
  onLeave,
  loading,
}) => {
  const classes = useStyles({})
  const router = useRouter()
  const tab = getLandingPageTab(router, ACTIVITIES)

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
        <Grid className={classes.menu} item xs={12} sm={4} md={2}>
          <Tabs
            tabLabels={[ACTIVITIES, MEMBERS, FORUM]}
            initialValue={tab}
            handleTabChange={(newTab) => {
              router.push(
                {
                  pathname: router.pathname,
                  query: {
                    ...router.query,
                    tab: [newTab],
                  },
                },
                undefined,
                { shallow: true }
              )
            }}
          />
        </Grid>
        <Grid className={classes.main} item xs={12} sm={8} md={7}>
          <div role="tabpanel" hidden={tab !== ACTIVITIES}>
            <ActivitiesList acter={acter} user={user} />
          </div>
          <div role="tabpanel" hidden={tab !== MEMBERS}>
            <MembersSection acter={acter} />
          </div>
          <div role="tabpanel" hidden={tab !== FORUM}>
            <Typography variant="subtitle1">Coming soon...</Typography>
          </div>
        </Grid>
        <Grid className={classes.info} item xs={12} sm={12} md={3}>
          <InfoSection acter={acter} interestTypes={interestTypes} />
        </Grid>
      </Grid>
    </Grid>
  )
}
