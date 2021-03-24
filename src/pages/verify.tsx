import React from 'react'
import { NextPage } from 'next'
import { Layout } from 'src/components/layout'
import {
  Box,
  Typography,
  makeStyles,
  createStyles,
  Theme,
} from '@material-ui/core'

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    container: {
      margin: 'auto',
      maxWidth: 500,
      textAlign: 'center',
    },
    heading: {
      fontWeight: 'bold',
      color: theme.palette.primary.main,
      textAlign: 'center',
    },
  })
)

const VerifyPage: NextPage<any> = ({ providers }) => {
  const classes = useStyles()
  return (
    <Layout headTitle="Email send - Acter">
      <Box className={classes.container}>
        <Typography variant="h4" className={classes.heading}>
          You're on your way
        </Typography>
        <Typography variant="body1">
          A signin link has been sent to your email address.
        </Typography>
      </Box>
    </Layout>
  )
}

export default VerifyPage
