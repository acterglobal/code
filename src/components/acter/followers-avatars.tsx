import React, { FC } from 'react'
import { useRouter } from 'next/router'
import { createStyles, makeStyles, Theme } from '@material-ui/core'
import { AvatarGroup } from 'src/components/acter/avatar-group'
import { Box, Typography } from '@material-ui/core'
import { titleCase } from 'title-case'
import { acterAsUrl } from 'src/lib/acter/acter-as-url'
import { Acter, ActerType } from '@schema'
import { ORGANISATION } from 'src/constants'

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    section: {
      fontSize: '0.7rem',
      fontWeight: 'bold',
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

  const users = acter.Followers?.filter(
    ({ Follower }) => Follower.ActerType.name === 'user'
  ).map(({ Follower }) => Follower)
  const organisations = acter.Followers?.filter(
    ({ Follower }) => Follower.ActerType.name === ORGANISATION
  ).map(({ Follower }) => Follower)

  return (
    <Box>
      {[users, organisations].map((acters) => {
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
              acters={acters.slice(0, 8)}
              totalCount={acters.length}
            />
          </Box>
        )
      })}
    </Box>
  )
}
