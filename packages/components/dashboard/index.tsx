import React, { FC } from 'react'

import {
  Box,
  createStyles,
  makeStyles,
  Typography,
  Theme,
  useTheme,
} from '@material-ui/core'

import { DashboardContent } from '@acter/components/dashboard/content'
import { HomeIcon } from '@acter/components/icons/home-icon'
import { useTranslation } from '@acter/lib/i18n/use-translation'

export const Dashboard: FC = () => {
  const classes = useStyles()

  return (
    <Box className={classes.container}>
      <TopSection />
      <DashboardContent />
    </Box>
  )
}

const TopSection: FC = () => {
  const classes = useStyles()
  const theme = useTheme()
  const { t } = useTranslation('dashboard')

  return (
    <Box className={classes.topSection}>
      <HomeIcon
        color="inherit"
        style={{
          color: theme.palette.secondary.main,
          fontWeight: 'bold',
          fontSize: 30,
        }}
      />
      <Typography variant="h6" className={classes.heading}>
        {t('dashboard')}
      </Typography>
    </Box>
  )
}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    container: {
      backgroundColor: theme.colors.white,
      minHeight: '100vh',
    },
    topSection: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      position: 'fixed',
      zIndex: 100,
      top: 0,
      width: '100%',
      height: 52,
      backgroundColor: theme.colors.white,
    },
    heading: {
      fontSize: theme.spacing(2),
      fontWeight: theme.typography.fontWeightBold,
      color: theme.palette.secondary.main,
      marginLeft: theme.spacing(1),
    },
  })
)
