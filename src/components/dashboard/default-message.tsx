import React, { FC } from 'react'
import Link from 'next/link'

import { Box, Typography, Link as MuiLink } from '@material-ui/core'
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles'

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      marginTop: theme.spacing(8),
      textAlign: 'center',
    },
    link: {
      cursor: 'pointer',
    },
  })
)

export const DefaultMessage: FC = () => {
  const classes = useStyles()
  return (
    <Box className={classes.root}>
      <Typography variant="body1">
        You have not created any Organisations or Networks.
      </Typography>
      <Typography variant="body1">
        Get started{' '}
        <Link href="/acter/new">
          <MuiLink className={classes.link}>here</MuiLink>
        </Link>{' '}
        or go to{' '}
        <Link href="/">
          <MuiLink className={classes.link}>Greenlight Aarhus</MuiLink>
        </Link>
      </Typography>
    </Box>
  )
}
