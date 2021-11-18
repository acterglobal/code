import React, { FC } from 'react'

import { Box, Typography } from '@material-ui/core'
import { createStyles, makeStyles, Theme } from '@material-ui/core'

import { titleCase } from 'title-case'

import { AvatarGroup } from '@acter/components/acter/avatar-group'
import { filterConnectionsByAtLeastRole } from '@acter/lib/acter/filter-connections-by-at-least-role'
import { mapFollowersByType } from '@acter/lib/acter/map-followers-by-type'
import { capitalize } from '@acter/lib/string/capitalize'
import { Acter, ActerConnectionRole, ActerType } from '@acter/schema'

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
  if (acterType.name === 'user') {
    return 'People'
  }

  return `${titleCase(acterType.name)}s`
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

        const acters = filterConnectionsByAtLeastRole(
          connections,
          ActerConnectionRole.MEMBER
        ).map(({ Follower }) => Follower)
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
