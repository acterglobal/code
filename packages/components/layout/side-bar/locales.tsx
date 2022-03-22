import { FC, useEffect } from 'react'

import { useRouter } from 'next/router'

import {
  Box,
  createStyles,
  makeStyles,
  Theme,
  Typography,
} from '@material-ui/core'

import clsx from 'clsx'

import { LoadingSpinner } from '@acter/components/atoms/loading/spinner'
import { useUpdateUserLanguage } from '@acter/lib/acter/use-update-user-language'
import { getLocale } from '@acter/lib/i18n/get-locale'
import { useUser } from '@acter/lib/user/use-user'
import { Language as ActerLocales, Language } from '@acter/schema'

const { en_GB, da_DK } = ActerLocales

export const Locales: FC = () => {
  const router = useRouter()
  const classes = useStyles({ locale: router.locale })
  const { user } = useUser()
  const [{ fetching: updating }, updateLanguage] = useUpdateUserLanguage()

  useEffect(() => {
    if (user?.language && getLocale(user?.language) !== router.locale) {
      router.push(router.asPath, router.asPath, {
        locale: getLocale(user?.language),
      })
    }
  }, [user])

  const handleClick = (language: Language) => {
    if (!user) {
      router.push(router.asPath, router.asPath, { locale: getLocale(language) })
      return
    }

    updateLanguage({ email: user.email, language })
  }

  return (
    <Box className={classes.locales}>
      {updating ? (
        <LoadingSpinner />
      ) : (
        <>
          <Typography
            className={clsx(
              classes.locale,
              router.locale === getLocale(en_GB) && classes.active
            )}
            onClick={() => handleClick(en_GB)}
          >
            EN
          </Typography>
          /
          <Typography
            className={clsx(
              classes.locale,
              router.locale === getLocale(da_DK) && classes.active
            )}
            onClick={() => handleClick(da_DK)}
          >
            DA
          </Typography>
        </>
      )}
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
      cursor: 'pointer',
    },
    active: {
      fontWeight: theme.typography.fontWeightBold,
    },
  })
)
