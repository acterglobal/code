import React, { FC } from 'react'

import router from 'next/router'

import { Box, Typography } from '@material-ui/core'
import { makeStyles, Theme } from '@material-ui/core/styles'

import { ActerAvatar } from '@acter/components/acter/avatar'
import { acterAsUrl } from '@acter/lib/acter/acter-as-url'
import { Acter } from '@acter/schema'

interface OrganiserProps {
  acter: Acter
}

export const Organiser: FC<OrganiserProps> = ({ acter }) => {
  const classes = useStyles()
  if (!acter) return null

  return (
    <Box className={classes.container}>
      <ActerAvatar acter={acter} size={4} />
      <Typography className={classes.heading}>Hosted by</Typography>
      <Typography className={classes.heading}> </Typography>
      <Box
        className={classes.organiserContainer}
        onClick={() => router.push(acterAsUrl({ acter }))}
      >
        <Typography className={classes.name}>{acter.name}</Typography>
      </Box>
    </Box>
  )
}

const useStyles = makeStyles((theme: Theme) => ({
  container: {
    alignItems: 'center',
    height: '100%',
    padding: theme.spacing(2),
    backgroundColor: 'white',
    borderRadius: theme.spacing(1),
    display: 'flex',
    [theme.breakpoints.down('xs')]: {},
  },
  heading: {
    display: 'flex',
    alignItems: 'center',
    marginLeft: 10,
    color: theme.palette.secondary.main,
    fontSize: '0.9rem',
  },
  organiserContainer: {
    display: 'flex',
    alignItems: 'center',
    cursor: 'pointer',
  },
  name: {
    color: theme.palette.secondary.main,
    fontSize: '0.9rem',
    fontWeight: theme.typography.fontWeightBold,
  },
}))
