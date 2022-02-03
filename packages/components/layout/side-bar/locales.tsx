import { FC } from 'react'

import { useRouter } from 'next/router'

import {
  Box,
  createStyles,
  makeStyles,
  Theme,
  Typography,
} from '@material-ui/core'

import clsx from 'clsx'

import { Link } from '@acter/components/util/anchor-link'
import { Language as ActerLocales } from '@acter/schema'

const { EN, DK } = ActerLocales

export const Locales: FC = () => {
  const router = useRouter()
  const classes = useStyles({ locale: router.locale })

  return (
    <Box className={classes.locales}>
      <Link href={router.asPath} locale={EN}>
        <Typography
          className={clsx(
            classes.locale,
            router.locale === EN && classes.active
          )}
        >
          {EN}
        </Typography>
      </Link>
      /
      <Link href={router.asPath} locale={DK}>
        <Typography
          className={clsx(
            classes.locale,
            router.locale === DK && classes.active
          )}
        >
          {DK}
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
