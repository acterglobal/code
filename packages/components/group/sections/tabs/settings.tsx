import React, { FC } from 'react'

import { Box, createStyles, makeStyles, Theme } from '@material-ui/core'

import { AccessabilitySettings } from '@acter/components/acter/settings/accessability-settings'
import { VisibilitySettings } from '@acter/components/acter/settings/visibility-settings'
import { useActer } from '@acter/lib/acter/use-acter'

export const Settings: FC = () => {
  const classes = useStyles()
  const { acter } = useActer()

  if (!acter) return null

  return (
    <Box className={classes.container}>
      <AccessabilitySettings acter={acter} />
      <VisibilitySettings acter={acter} />
    </Box>
  )
}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    container: {
      marginTop: theme.spacing(2),
      padding: theme.spacing(2),
      width: '100%',
    },
  })
)
