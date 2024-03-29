import React, { FC } from 'react'

import { Box, Button, Typography } from '@material-ui/core'
import { makeStyles, Theme } from '@material-ui/core/styles'

import { FollowersAvatars } from '@acter/components/acter/followers-avatars'
import { useTranslation } from '@acter/lib/i18n/use-translation'
import { Acter } from '@acter/schema'

export type ParticipantsProps = {
  acter: Acter
  handleOnClick: () => void
}

export const Participants: FC<ParticipantsProps> = ({
  acter,
  handleOnClick,
}) => {
  const classes = useStyles()
  const { t } = useTranslation('common')

  return (
    <Box className={classes.participants}>
      <Box className={classes.headingContainer}>
        <Typography className={classes.heading} variant="h6">
          {t('participants')}
        </Typography>
        <Button className={classes.button} onClick={handleOnClick}>
          {t('seeAllParticipants')}
        </Button>
      </Box>

      <FollowersAvatars acter={acter} />
    </Box>
  )
}

const useStyles = makeStyles((theme: Theme) => ({
  participants: {
    backgroundColor: 'white',
    padding: theme.spacing(2),
    borderRadius: theme.spacing(1),
  },
  headingContainer: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: theme.spacing(1),
  },
  heading: {
    fontWeight: 'bolder',
    fontSize: '0.9rem',
  },
  button: {
    padding: 0,
    marginLeft: theme.spacing(0.5),
    textTransform: 'none',
    textDecoration: 'underline',
    fontSize: 12,
    color: theme.colors.grey.main,
    '&:hover': {
      color: theme.colors.grey.dark,
      textDecoration: 'underline',
      backgroundColor: theme.colors.white,
    },
  },
}))
