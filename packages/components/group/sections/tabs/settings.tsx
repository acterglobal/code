import React, { FC } from 'react'

import { Box, createStyles, makeStyles, Theme } from '@material-ui/core'

import { AccessSettings } from '@acter/components/acter/settings/access-settings'
import { VisibilitySettings } from '@acter/components/acter/settings/visibility-settings'
import { GroupDelete } from '@acter/components/group/delete'
import { useActer } from '@acter/lib/acter/use-acter'

export const Settings: FC = () => {
  const classes = useStyles()
  const { acter } = useActer()

  if (!acter) return null

  return (
    <Box className={classes.container}>
      <AccessSettings acter={acter} />
      <VisibilitySettings acter={acter} />
      <GroupDelete />
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
