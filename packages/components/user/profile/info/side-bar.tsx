import React, { FC } from 'react'

import {
  Box,
  createStyles,
  makeStyles,
  Theme,
  Typography,
} from '@material-ui/core'

import { LoadingSpinner } from '@acter/components/atoms/loading/spinner'
import { About } from '@acter/components/user/profile/info/about'
import { PartOf } from '@acter/components/user/profile/info/part-of'
import { Image } from '@acter/components/util/image'
import { useTranslation } from '@acter/lib/i18n/use-translation'
import { getImageUrl } from '@acter/lib/images/get-image-url'
import { useUser } from '@acter/lib/user/use-user'

interface SidebarProfileProps {
  acterId: string
}

export const SidebarProfile: FC<SidebarProfileProps> = ({ acterId }) => {
  const classes = useStyles()
  const { user, fetching: userLoading } = useUser({ acterId })
  const { t } = useTranslation()

  if (userLoading) return <LoadingSpinner />

  if (!user) return null

  return (
    <Box className={classes.content}>
      <Box className={classes.avatarImage}>
        <Image
          src={getImageUrl(user.Acter?.avatarUrl, 'avatar')}
          alt="Acter Logo"
          height={200}
        />
      </Box>

      <Box className={classes.info}>
        <Typography className={classes.label}>{t('name')}</Typography>
        <Typography className={classes.detail}>{user.Acter?.name}</Typography>

        <Typography className={classes.label}>Email</Typography>
        <Typography className={classes.detail}>{user.email}</Typography>

        <Typography className={classes.label}>{t('form.location')}</Typography>
        <Typography className={classes.detail}>
          {user.Acter?.location}
        </Typography>
      </Box>

      {/* <About acter={acter} /> */}
      <PartOf />
    </Box>
  )
}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    content: {
      display: 'flex',
      alignItems: 'center',
      flexDirection: 'column',
      width: 526,
    },
    avatarImage: {
      marginLeft: 40,
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
      alignItems: 'flex-start',
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
