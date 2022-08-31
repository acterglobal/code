import React, { FC } from 'react'

import {
  Box,
  makeStyles,
  Theme,
  createStyles,
  Typography,
} from '@material-ui/core'

import { ActerAvatar } from '@acter/components/acter/avatar'
import { excludeActerTypes } from '@acter/lib/acter/exclude-acter-types'
import { ActerTypes } from '@acter/lib/constants'
import { ActerConnectionRole, User } from '@acter/schema'

const { GROUP, ACTIVITY } = ActerTypes

interface ActersListProps {
  user: User
  role: ActerConnectionRole
}
export const ActersList: FC<ActersListProps> = ({ user, role }) => {
  const classes = useStyles()

  if (!user) return null

  const connections = user.Acter?.Following.filter(
    ({ role: connectionRole }) => role === connectionRole
  )

  const filteredConnections = excludeActerTypes(
    connections?.map(({ Following }) => Following),
    [GROUP, ACTIVITY]
  )

  return (
    <Box className={classes.container}>
      {filteredConnections?.map((acter) => (
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
