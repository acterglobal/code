import { FC } from 'react'

import { AppBar, Theme, Toolbar, Typography, useTheme } from '@mui/material'
import createStyles from '@mui/styles/createStyles'
import makeStyles from '@mui/styles/makeStyles'

import { SettingsIcon } from '@acter/components/icons'
import { useActer } from '@acter/lib/acter/use-acter'

export const TopBar: FC = () => {
  const classes = useStyles()
  const theme = useTheme()
  const { acter } = useActer()
  if (!acter) return null

  return (
    <AppBar className={classes.topBar} position="static">
      <Toolbar>
        <SettingsIcon
          color="inherit"
          style={{
            color: theme.palette.background.paper,
            marginRight: theme.spacing(1),
          }}
        />
        <Typography className={classes.title}>
          Settings for {acter.name}
        </Typography>
      </Toolbar>
    </AppBar>
  )
}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    topBar: {
      height: theme.spacing(6),
      backgroundColor: theme.palette.secondary.main,
      border: 'none',
      boxShadow: 'none',
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
    },
    title: {
      color: theme.palette.background.paper,
      fontWeight: theme.typography.fontWeightMedium,
      fontSize: theme.spacing(2),
    },
  })
)
