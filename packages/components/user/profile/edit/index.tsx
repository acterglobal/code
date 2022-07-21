import React, { FC } from 'react'

import { Box, createStyles, Grid, makeStyles } from '@material-ui/core'

import { ProfileInfoForm } from '@acter/components/user/form/info'
import { About } from '@acter/components/user/profile/info/about'
import { PartOf } from '@acter/components/user/profile/info/part-of'

export const ProfileEdit: FC = () => {
  const classes = useStyles()

  return (
    <>
      <ProfileInfoForm />

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

const useStyles = makeStyles(
  createStyles({
    bottomSection: {
      flexGrow: 1,
      paddingTop: '5%',
      paddingLeft: '10%',
      paddingRight: '10%',
    },
  })
)
