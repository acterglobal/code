import React, { FC } from 'react'

import { Grid, makeStyles, createStyles, Theme } from '@material-ui/core'

import {
  HeaderSection,
  HeaderSectionProps,
} from 'src/components/acter/landing-page/header-section'
import { MenuSection } from 'src/components/acter/landing-page/menu-section'
import {
  InfoSection,
  InfoSectionProps,
} from 'src/components/acter/landing-page/info-section'
import { ActivitiesList } from 'src/components/activity/list'

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
      [theme.breakpoints.down('md')]: {
        // order: 1,
      },
    },
    info: {
      order: 3,
      [theme.breakpoints.down('md')]: {
        marginTop: theme.spacing(2),
      },
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
          <MenuSection />
        </Grid>
        <Grid className={classes.main} item xs={12} sm={8} md={6}>
          <ActivitiesList
            acter={acter}
            user={user}
            activities={acter.ActivitiesOrganized}
          />
        </Grid>
        <Grid className={classes.info} item xs={12} sm={12} md={4}>
          <InfoSection acter={acter} interestTypes={interestTypes} />
        </Grid>
      </Grid>
    </Grid>
  )
}
