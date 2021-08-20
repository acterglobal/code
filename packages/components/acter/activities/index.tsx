import React, { FC } from 'react'
import { createStyles, Grid, makeStyles, Theme } from '@material-ui/core'
import {
  LandingPageLayout,
  LandingPageLayoutProps,
} from '@acter/components/acter/landing-page/layout'
import { ActivitiesSection } from './activities-section'
import { useUser } from '@acter/lib/user/use-user'
import { useActer } from '@acter/lib/acter/use-acter'

export type ActerActivitiesProps = LandingPageLayoutProps

export const ActerActivities: FC<ActerActivitiesProps> = ({
  onJoin,
  onLeave,
  loading,
}) => {
  const classes = useStyles()
  const { user } = useUser()
  const [acter] = useActer()

  return (
    <LandingPageLayout
      acter={acter}
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
      width: '100%',
    },
  })
)
