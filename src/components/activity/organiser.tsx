import React, { FC } from 'react'
import { useRouter } from 'next/router'
import { Box, Typography } from '@material-ui/core'
import { makeStyles, Theme } from '@material-ui/core/styles'
import { acterAsUrl } from 'src/lib/acter/acter-as-url'
import { ActerAvatar } from 'src/components/acter/avatar'
import { Acter } from '@schema'

const useStyles = makeStyles((theme: Theme) => ({
  container: {
    padding: theme.spacing(2),
    backgroundColor: 'white',
    borderRadius: theme.spacing(1),
    marginTop: theme.spacing(2),
    [theme.breakpoints.down('xs')]: {
      marginTop: theme.spacing(1),
    },
  },
  heading: {
    fontWeight: 'bolder',
    fontSize: '0.9rem',
  },
  organiserContainer: {
    display: 'flex',
    alignItems: 'center',
    cursor: 'pointer',
  },
  organiser: {
    width: theme.spacing(4),
    height: theme.spacing(4),
  },
  name: {
    color: theme.palette.secondary.main,
    fontSize: '0.7rem',
    fontWeight: theme.typography.fontWeightBold,
    marginLeft: 10,
  },
}))

interface OrganiserProps {
  acter: Acter
}

export const Organiser: FC<OrganiserProps> = ({ acter }) => {
  const classes = useStyles()
  const router = useRouter()
  return (
    <Box className={classes.container}>
      <Typography className={classes.heading} variant="h6">
        Part of:
      </Typography>
      <Box
        className={classes.organiserContainer}
        onClick={() => router.push(acterAsUrl(acter))}
      >
        <ActerAvatar acter={acter} size={4} />
        <Typography className={classes.name} variant="body1">
          {acter.name}
        </Typography>
      </Box>
    </Box>
  )
}
