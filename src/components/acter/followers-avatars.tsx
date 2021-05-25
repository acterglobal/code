import React, { FC } from 'react'
import { useRouter } from 'next/router'
import { Box, Typography } from '@material-ui/core'
import { createStyles, makeStyles, Theme } from '@material-ui/core'
import { titleCase } from 'title-case'
import { acterAsUrl } from 'src/lib/acter/acter-as-url'
import { filterConnectionsByAtLeastRole } from 'src/lib/acter/filter-connections-by-at-least-role'
import { mapFollowersByType } from 'src/lib/acter/map-followers-by-type'
import { AvatarGroup } from 'src/components/acter/avatar-group'
import { Acter, ActerConnectionRole, ActerType } from '@schema'

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    section: {
      fontSize: '0.7rem',
      fontWeight: theme.typography.fontWeightBold,
      color: theme.palette.secondary.main,
      capitalize: 'title',
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
}

const getActerTypeTitle = (acterType: ActerType) => {
  if (acterType.name === 'user') {
    return 'People'
  }

  return `${titleCase(acterType.name)}s`
}

export const FollowersAvatars: FC<FollowersAvatarsProps> = ({ acter }) => {
  const classes = useStyles()
  const router = useRouter()

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
            onClick={() => router.push(`${acterAsUrl(acter)}/members`)}
          >
            <Typography variant="h6" className={classes.section}>
              {title} ({acters.length})
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
