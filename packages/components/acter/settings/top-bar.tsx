import { FC } from 'react'

import {
  AppBar,
  makeStyles,
  Theme,
  createStyles,
  Toolbar,
  Typography,
  useTheme,
} from '@material-ui/core'

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
            color: theme.colors.white,
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
      color: theme.colors.white,
      fontWeight: theme.typography.fontWeightMedium,
      fontSize: theme.spacing(2),
    },
  })
)
