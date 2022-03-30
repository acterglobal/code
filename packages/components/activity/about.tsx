import React, { FC } from 'react'

import { Box, Typography } from '@material-ui/core'
import { makeStyles, Theme } from '@material-ui/core/styles'

import Markdown from 'markdown-to-jsx'

import { useTranslation } from '@acter/lib/i18n/use-translation'
import { capitalize } from '@acter/lib/string/capitalize'
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
  const { t } = useTranslation('common')

  return (
    <>
      <Typography className={classes.heading} variant="h6">
        {capitalize(t('about'))}
      </Typography>
      <Box className={classes.description}>
        <Typography variant="caption">
          {acter.description && <Markdown>{acter.description}</Markdown>}
        </Typography>
      </Box>
    </>
  )
}
