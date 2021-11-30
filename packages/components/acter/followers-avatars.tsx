import React, { FC } from 'react'

import { Box, Typography } from '@material-ui/core'
import { createStyles, makeStyles, Theme } from '@material-ui/core'

import { AvatarGroup } from '@acter/components/acter/avatar-group'
import { filterConnectionsByActerSetting } from '@acter/lib/acter/filter-by-acter-setting'
import { filterConnectionsByAtLeastRole } from '@acter/lib/acter/filter-connections-by-at-least-role'
import { mapFollowersByType } from '@acter/lib/acter/map-followers-by-type'
import { ActerTypes } from '@acter/lib/constants/acter-types'
import { capitalize } from '@acter/lib/string/capitalize'
import {
  Acter,
  ActerConnectionRole,
  ActerType,
  ActerWhoCanJoinSettings,
} from '@acter/schema'

const { ACTERS, PEOPLE } = ActerWhoCanJoinSettings

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    section: {
      fontSize: '0.7rem',
      fontWeight: theme.typography.fontWeightBold,
      color: theme.palette.secondary.main,
      marginBottom: theme.spacing(0.5),
    },
    container: {
      display: 'flex',
    },
    followers: {
      cursor: 'pointer',
      marginBottom: theme.spacing(1),
    },
  })
)

export interface FollowersAvatarsProps {
  acter: Acter
  onAvatarClick?: () => void
}

const getActerTypeTitle = (acterType: ActerType) => {
  return capitalize(acterType.name === ActerTypes.USER ? PEOPLE : ACTERS)
}

export const FollowersAvatars: FC<FollowersAvatarsProps> = ({
  acter,
  onAvatarClick,
}) => {
  const classes = useStyles()

  const followerTypeMap = mapFollowersByType(acter)

  return (
    <Box>
      {Object.keys(followerTypeMap).map((type) => {
        const connections = followerTypeMap[type]

        const filteredConnections = filterConnectionsByAtLeastRole(
          connections,
          ActerConnectionRole.MEMBER
        ).map(({ Follower }) => Follower)

        const acters = filterConnectionsByActerSetting(
          acter,
          filteredConnections
        )

        if (!acters?.length) {
          return null
        }
        const title = getActerTypeTitle(acters[0].ActerType)

        return (
          <Box
            key={`${title}-followers`}
            className={classes.followers}
            onClick={onAvatarClick}
          >
            <Typography variant="h6" className={classes.section}>
              {capitalize(title)} ({acters.length})
            </Typography>
            <AvatarGroup
              acters={acters.slice(0, 7)}
              totalCount={acters.length}
            />
          </Box>
        )
      })}
    </Box>
  )
}
