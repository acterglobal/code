import React, { FC } from 'react'

import {
  Box,
  createStyles,
  makeStyles,
  Theme,
  Typography,
  useTheme,
} from '@material-ui/core'

import { EditIcon } from '@acter/components/icons'
import { useTranslation } from '@acter/lib/i18n/use-translation'
import { useUser } from '@acter/lib/user/use-user'

export const TopBanner: FC = () => {
  const classes = useStyles()
  const { user } = useUser()
  const theme = useTheme()
  const { t } = useTranslation()

  if (!user) {
    return null
  }

  return (
    <Box className={classes.topBanner}>
      <Box className={classes.editButton}>
        <EditIcon
          style={{
            color: theme.palette.secondary.dark,
            marginRight: 4,
          }}
        />
        <Typography
          className="buttonText"
          variant="body1"
          style={{ fontWeight: theme.typography.fontWeightMedium }}
        >
          {t('editProfile')}
        </Typography>
      </Box>
    </Box>
  )
}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    topBanner: {
      padding: 10,
      height: 72,
    },

    editButton: {
      backgroundColor: theme.colors.white,
      color: theme.palette.secondary.main,
      border: '2px solid',
      borderColor: theme.palette.secondary.main,
      height: 48,
      width: 168,
      float: 'right',
      borderRadius: 5,
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      cursor: 'pointer',
    },
  })
)
