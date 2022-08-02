import React, { FC } from 'react'

import {
  Button,
  capitalize,
  createStyles,
  makeStyles,
  Theme,
  Typography,
} from '@material-ui/core'

import { SettingContainer } from '@acter/components/util/forms/setting-container'
import { useUser } from '@acter/lib/user/use-user'
import { userHasRoleOnActer } from '@acter/lib/user/user-has-role-on-acter'
import { Acter, ActerConnectionRole } from '@acter/schema'

interface ActerDeleteProps {
  acter: Acter
  handleClick: () => void
}
export const ActerDelete: FC<ActerDeleteProps> = ({ acter, handleClick }) => {
  const classes = useStyles()

  const { user } = useUser()

  if (!user) return null

  const isAdmin = userHasRoleOnActer(user, ActerConnectionRole.ADMIN, acter)
  if (!isAdmin) return null

  return (
    <SettingContainer heading={capitalize('acter termination')}>
      <Button className={classes.button} onClick={handleClick}>
        <Typography
          className={classes.text}
        >{`Delete ${acter.name}`}</Typography>
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
      color: theme.colors.red,
    },
  })
)
