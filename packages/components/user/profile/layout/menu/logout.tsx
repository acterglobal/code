import React, { FC } from 'react'

import {
  createStyles,
  Divider,
  makeStyles,
  Theme,
  Typography,
} from '@material-ui/core'

import { useTranslation } from '@acter/lib/i18n/use-translation'
import { useUser } from '@acter/lib/user/use-user'

export const Logout: FC = () => {
  const classes = useStyles()
  const { t } = useTranslation('common')
  const { user } = useUser()

  if (!user) return null

  return (
    <>
      <Divider className={classes.divider} />

      <Typography className={classes.heading} variant="body2">
        {t('signOut')}
      </Typography>
    </>
  )
}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    divider: {
      marginTop: theme.spacing(1),
    },
    heading: {
      marginLeft: theme.spacing(2),
      fontWeight: theme.typography.fontWeightLight,
      color: theme.palette.secondary.contrastText,
    },
  })
)
