import React, { FC, useState } from 'react'

import { useRouter } from 'next/router'

import {
  Button,
  createStyles,
  makeStyles,
  Theme,
  Typography,
} from '@material-ui/core'

import { SettingContainer } from '@acter/components/util/forms/setting-container'
import { LoadingSpinner } from '@acter/components/util/loading-spinner'
import { acterAsUrl } from '@acter/lib/acter/acter-as-url'
import { useActer } from '@acter/lib/acter/use-acter'
import { useDeleteActer } from '@acter/lib/acter/use-delete-acter'
import { useUser } from '@acter/lib/user/use-user'
import { userHasRoleOnActer } from '@acter/lib/user/user-has-role-on-acter'
import { ActerConnectionRole } from '@acter/schema'

export const GroupDelete: FC = () => {
  const classes = useStyles()
  const router = useRouter()
  const [redirectUrl, setRedirectUrl] = useState(null)

  const { user } = useUser()
  const { acter } = useActer()

  const [{ fetching: deleting }, deleteActer] = useDeleteActer({
    onCompleted: () => router.push(redirectUrl),
  })

  const handleClick = () => {
    setRedirectUrl(acterAsUrl({ acter: acter?.Parent }))
    deleteActer(acter?.id)
  }

  if (!acter || !user) return null

  const isAdmin = userHasRoleOnActer(user, ActerConnectionRole.ADMIN, acter)
  if (!isAdmin) return null

  return (
    <SettingContainer heading="Group Termination">
      <Button
        className={classes.button}
        onClick={handleClick}
        disabled={deleting}
      >
        <Typography className={classes.text}>Delete group </Typography>
        {deleting && <LoadingSpinner thickness={6} size={13} />}
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
      marginRight: theme.spacing(1),
      textTransform: 'capitalize',
      fontSize: 14,
      fontWeight: theme.typography.fontWeightMedium,
      '&:hover': {
        textDecoration: 'underline',
      },
    },
  })
)
