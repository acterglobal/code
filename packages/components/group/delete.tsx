import React, { FC } from 'react'

import { Button, Theme, Typography } from '@mui/material';

import createStyles from '@mui/styles/createStyles';
import makeStyles from '@mui/styles/makeStyles';

import { SettingContainer } from '@acter/components/util/forms/setting-container'
import { useActer } from '@acter/lib/acter/use-acter'
import { useUser } from '@acter/lib/user/use-user'
import { userHasRoleOnActer } from '@acter/lib/user/user-has-role-on-acter'
import { ActerConnectionRole } from '@acter/schema'

interface GroupDeleteProps {
  handleClick: () => void
}
export const GroupDelete: FC<GroupDeleteProps> = ({ handleClick }) => {
  const classes = useStyles()

  const { user } = useUser()
  const { acter } = useActer()

  if (!acter || !user) return null

  const isAdmin = userHasRoleOnActer(user, ActerConnectionRole.ADMIN, acter)
  if (!isAdmin) return null

  return (
    <SettingContainer heading="Group Termination">
      <Button className={classes.button} onClick={handleClick}>
        <Typography className={classes.text}>Delete group</Typography>
      </Button>
    </SettingContainer>
  )
}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    button: {
      marginLeft: theme.spacing(2),
      padding: 0,
      '&:hover': {
        background: 'none',
      },
      color: theme.palette.secondary.main,
    },
    text: {
      textTransform: 'capitalize',
      fontSize: 14,
      fontWeight: theme.typography.fontWeightMedium,
      '&:hover': {
        textDecoration: 'underline',
      },
    },
  })
)
