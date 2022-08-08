import React, { FC } from 'react'

import {
  Box,
  makeStyles,
  Theme,
  createStyles,
  Typography,
} from '@material-ui/core'

import { ActerAvatar } from '@acter/components/acter/avatar'
import { ActerConnectionRole, User } from '@acter/schema'

interface ActersListProps {
  user: User
  role: ActerConnectionRole
}
export const ActersList: FC<ActersListProps> = ({ user, role }) => {
  const classes = useStyles()

  const connections = user.Acter.Following.filter(
    ({ role: connectionRole }) => role === connectionRole
  )
  return (
    <Box className={classes.container}>
      {connections.map(({ Following: acter }) => (
        <Box key={`connection=${acter.id}`} className={classes.acter}>
          <ActerAvatar acter={acter} />
          <Typography className={classes.acterName}>{acter.name}</Typography>
        </Box>
      ))}
    </Box>
  )
}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    container: {
      padding: 10,
    },
    acter: {
      display: 'flex',
      alignItems: 'center',
      marginBottom: 15,
    },
    acterName: {
      marginLeft: 15,
      fontWeight: theme.typography.fontWeightMedium,
    },
  })
)
