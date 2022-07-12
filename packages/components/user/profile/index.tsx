import React, { FC } from 'react'

import { Box, createStyles, Grid, makeStyles, Theme } from '@material-ui/core'

import { About } from '@acter/components/user/profile/info/about'
import { Content } from '@acter/components/user/profile/info/content'
import { PartOf } from '@acter/components/user/profile/info/part-of'
import { TopBanner } from '@acter/components/user/profile/layout/tob-banner'

export const ProfileView: FC = () => {
  const classes = useStyles()

  return (
    <>
      <Box className={classes.topSection}>
        <TopBanner />
        <Content />
      </Box>

      <Box className={classes.bottomSection}>
        <Grid container spacing={8}>
          <Grid item xs={12} sm={6}>
            <About />
          </Grid>
          <Grid item xs={12} sm={6}>
            <PartOf />
          </Grid>
        </Grid>
      </Box>
    </>
  )
}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    topSection: {
      paddingRight: '5%',
      paddingLeft: '5%',
      height: 350,
      backgroundColor: theme.colors.grey.extraLight,
    },

    bottomSection: {
      flexGrow: 1,
      paddingTop: '5%',
      paddingLeft: '10%',
      paddingRight: '10%',
    },
  })
)
