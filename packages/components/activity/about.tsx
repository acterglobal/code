import React, { FC } from 'react'

import { Box, Typography } from '@mui/material'
import { Theme } from '@mui/material/styles';

import makeStyles from '@mui/styles/makeStyles';

import Markdown from 'markdown-to-jsx'

import { Acter } from '@acter/schema'

const useStyles = makeStyles((theme: Theme) => ({
  heading: {
    fontWeight: 'bolder',
    fontSize: '0.9rem',
  },
  description: {
    fontSize: '0.7rem',
    lineHeight: '0.05rem',
    color: theme.palette.secondary.main,
    marginBottom: 5,
  },
}))

export interface AboutProps {
  acter: Acter
}

export const About: FC<AboutProps> = ({ acter }) => {
  const classes = useStyles()

  return (
    <>
      <Typography className={classes.heading} variant="h6">
        About
      </Typography>
      <Box className={classes.description}>
        <Typography variant="caption">
          {acter.description && <Markdown>{acter.description}</Markdown>}
        </Typography>
      </Box>
    </>
  )
}
