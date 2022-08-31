import React, { FC } from 'react'

import {
  Box,
  createStyles,
  makeStyles,
  Theme,
  Typography,
} from '@material-ui/core'

import clsx from 'clsx'

import { Image } from '@acter/components/util/image'
import { useTranslation } from '@acter/lib/i18n/use-translation'
import { getImageUrl } from '@acter/lib/images/get-image-url'
import { useUser } from '@acter/lib/user/use-user'

interface ContentProps {
  acterId?: string
}

export const Content: FC<ContentProps> = ({ acterId }) => {
  const classes = useStyles()
  const { user } = useUser(acterId && { acterId })
  const { t } = useTranslation()

  if (!user) {
    return null
  }

  return (
    <Box className={clsx(acterId ? classes.sidebarContent : classes.content)}>
      <Box
        className={clsx(
          classes.avatarImage,
          acterId ? classes.sidebarAvatar : classes.profileAvatar
        )}
      >
        <Image
          src={getImageUrl(user.Acter?.avatarUrl, 'avatar')}
          alt="Acter Logo"
          height={200}
        />
      </Box>

      <Box className={classes.info}>
        <Typography className={classes.label}>{t('name')}</Typography>
        <Typography className={classes.detail}>{user.Acter?.name}</Typography>

        <Typography className={classes.label}>{t('email')}</Typography>
        <Typography className={classes.detail}>{user.email}</Typography>

        <Typography className={classes.label}>{t('form.location')}</Typography>
        <Typography className={classes.detail}>
          {user.Acter?.location}
        </Typography>
      </Box>
    </Box>
  )
}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    content: {
      display: 'flex',
      alignItems: 'center',
    },
    sidebarContent: {
      display: 'flex',
      flexDirection: 'column',
      width: 526,
      background: theme.colors.grey.extraLight,
    },
    sidebarAvatar: {
      marginLeft: 'auto',
      marginRight: 'auto',
      marginTop: 20,
    },
    profileAvatar: {
      marginLeft: 40,
      marginRight: 0,
    },
    avatarImage: {
      borderRadius: '50%',
      backgroundColor: theme.colors.white,
      borderColor: theme.colors.blue.grey,
      border: '10px solid',
      width: 220,
      height: 220,
      objectFit: 'cover',
      overflow: 'hidden',
      zIndex: 99,
      [theme.breakpoints.down('xs')]: {
        marginLeft: theme.spacing(1),
        width: 60,
        height: 60,
      },
    },
    info: {
      marginLeft: 40,
    },
    label: {
      fontWeight: theme.typography.fontWeightBold,
      fontSize: '0.75rem',
      color: theme.colors.blue.mediumGrey,
      textTransform: 'capitalize',
    },
    detail: {
      fontWeight: theme.typography.fontWeightBold,
      fontSize: '1.3rem',
      color: theme.palette.secondary.main,
      marginBottom: 18,
    },
  })
)
