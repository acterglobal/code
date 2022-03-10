import { FC, useEffect } from 'react'

import { useRouter } from 'next/router'

import { Box, Theme, Typography } from '@mui/material';

import createStyles from '@mui/styles/createStyles';
import makeStyles from '@mui/styles/makeStyles';

import clsx from 'clsx'

import { Link } from '@acter/components/util/anchor-link'
import { useUpdateUserLanguage } from '@acter/lib/acter/use-update-user-language'
import { useUser } from '@acter/lib/user/use-user'
import { Language as ActerLocales, Language } from '@acter/schema'

const { en_GB, da_DK } = ActerLocales

export const Locales: FC = () => {
  const router = useRouter()
  const classes = useStyles({ locale: router.locale })
  const { user } = useUser()
  const [_, updateLanguage] = useUpdateUserLanguage()

  useEffect(() => {
    if (user?.language !== router.locale) {
      router.push(router.asPath, router.asPath, { locale: user?.language })
    }
  }, [user])

  const handleClick = (language: Language) => {
    if (!user) return null

    updateLanguage({ email: user.email, language })
  }

  return (
    <Box className={classes.locales}>
      <Link href={router.asPath} locale={en_GB}>
        <Typography
          className={clsx(
            classes.locale,
            router.locale === en_GB && classes.active
          )}
          onClick={() => handleClick(en_GB)}
        >
          EN
        </Typography>
      </Link>
      /
      <Link href={router.asPath} locale={da_DK}>
        <Typography
          className={clsx(
            classes.locale,
            router.locale === da_DK && classes.active
          )}
          onClick={() => handleClick(da_DK)}
        >
          DA
        </Typography>
      </Link>
    </Box>
  )
}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    locales: {
      display: 'flex',
      justifyContent: 'space-around',
      alignItems: 'center',
      marginBottom: theme.spacing(1),
      paddingRight: 10,
      paddingLeft: 10,
    },
    locale: {
      color: theme.colors.white,
      fontSize: 10,
      fontWeight: theme.typography.fontWeightLight,
    },
    active: {
      fontWeight: theme.typography.fontWeightBold,
    },
  })
)
