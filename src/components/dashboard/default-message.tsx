import React, { FC } from 'react'
import { Link } from 'src/components/util/anchor-link'

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

export interface DefaultMessageProps {
  message?: string
  redirectTo?: string
}

export const DefaultMessage: FC<DefaultMessageProps> = (props) => {
  const { message, redirectTo } = props
  const classes = useStyles()
  return (
    <Box className={classes.root}>
      <Typography variant="body1">
        {message || `You have not created any Organisations or Networks.`}
      </Typography>
      {redirectTo && (
        <Typography variant="body1">
          Get started{' '}
          <Link href={redirectTo || `/acter/new`}>
            <MuiLink className={classes.link}>here</MuiLink>
          </Link>
        </Typography>
      )}
    </Box>
  )
}
