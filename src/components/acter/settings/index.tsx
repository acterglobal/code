import React, { FC } from 'react'

import {
  Grid,
  MenuList,
  MenuItem,
  Typography,
  createStyles,
  makeStyles,
  Theme,
} from '@material-ui/core'
import {
  ActerUsersSettings,
  ActerUsersSettingsProps,
} from 'src/components/acter/settings/acter-users-settings'
import { Acter } from '@schema'

export interface ActerSettingsProps extends ActerUsersSettingsProps {
  acter: Acter
}

export const ActerSettings: FC<ActerSettingsProps> = ({
  acter,
  onSettingsChange,
  loading,
}) => {
  const classes = useStyles()

  return (
    <Grid container className={classes.settingsContainer}>
      <Grid item className={classes.menu} xs={2}>
        <MenuList>
          <MenuItem>Members</MenuItem>
        </MenuList>
      </Grid>
      <Grid item className={classes.formContainer} xs={10}>
        <Typography variant="h2" className={classes.sectionHead}>
          Join
        </Typography>
        <ActerUsersSettings
          acter={acter}
          onSettingsChange={onSettingsChange}
          loading={loading}
        />
      </Grid>
    </Grid>
  )
}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    settingsContainer: {
      padding: theme.spacing(4),
    },
    menu: {
      borderRight: `1px solid ${theme.palette.grey[500]}`,
    },
    formContainer: {
      paddingLeft: theme.spacing(5),
    },
    sectionHead: {
      width: '75%',
      fontSize: '1.2rem',
      paddingBottom: theme.spacing(1),
      marginBottom: theme.spacing(2),
      borderBottom: `1px solid ${theme.palette.grey[500]}`,
    },
  })
)
