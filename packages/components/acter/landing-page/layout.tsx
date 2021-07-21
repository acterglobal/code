import React, { FC } from 'react'
import { createStyles, Grid, makeStyles, Theme } from '@material-ui/core'
import {
  HeaderSection,
  HeaderSectionProps,
} from '@acter/components/acter/landing-page/header-section'

export type LandingPageLayoutProps = HeaderSectionProps

export const LandingPageLayout: FC<LandingPageLayoutProps> = ({
  acter,
  user,
  onJoin,
  onLeave,
  loading,
  children,
}) => {
  const classes = useStyles()

  return (
    <Grid className={classes.header} container>
      <HeaderSection
        acter={acter}
        user={user}
        onJoin={onJoin}
        onLeave={onLeave}
        loading={loading}
      />
      <Grid container spacing={2} className={classes.content}>
        {children}
      </Grid>
    </Grid>
  )
}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    header: {
      marginBottom: theme.spacing(2),
    },
    content: {
      marginRight: theme.spacing(0.5),
    },
  })
)
