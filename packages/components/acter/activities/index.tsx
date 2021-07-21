import React, { FC } from 'react'
import { createStyles, Grid, makeStyles, Theme } from '@material-ui/core'
import {
  LandingPageLayout,
  LandingPageLayoutProps,
} from '@acter/components/acter/landing-page/layout'
import { ActivitiesSection } from './activities-section'

export type ActerActivitiesProps = LandingPageLayoutProps

export const ActerActivities: FC<ActerActivitiesProps> = ({
  acter,
  user,
  onJoin,
  onLeave,
  loading,
}) => {
  const classes = useStyles()
  return (
    <LandingPageLayout
      acter={acter}
      user={user}
      onJoin={onJoin}
      onLeave={onLeave}
      loading={loading}
    >
      <Grid className={classes.main} item>
        <ActivitiesSection acter={acter} user={user} />
      </Grid>
    </LandingPageLayout>
  )
}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    main: {
      marginLeft: theme.spacing(2),
    },
  })
)
