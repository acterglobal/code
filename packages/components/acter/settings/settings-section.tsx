import React, { FC } from 'react'

import { Box, createStyles, makeStyles, Theme } from '@material-ui/core'

import { AccessSettings } from '@acter/components/acter/settings/access-settings'
import { VisibilitySettings } from '@acter/components/acter/settings/visibility-settings'
import { useActer } from '@acter/lib/acter/use-acter'

export const SettingsSection: FC = () => {
  const classes = useStyles()
  const { acter } = useActer()
  if (!acter) return null

  return (
    <Box className={classes.settingsSection}>
      <AccessSettings acter={acter} />
      <VisibilitySettings acter={acter} />
    </Box>
  )
}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    settingsSection: {
      marginTop: theme.spacing(2),
      padding: theme.spacing(2),
      width: '100%',
    },
  })
)
