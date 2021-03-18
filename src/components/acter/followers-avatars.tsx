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
    followers: {
      cursor: 'pointer',
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
    <>
      {[users, organisations].map((acters) => {
        if (!acters?.length) {
          return null
        }
        const title = getActerTypeTitle(acters[0].ActerType)

        const actersList = []
        for (let i = 0; i <= 100; i++) {
          actersList.push(acters[0])
        }

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
              acters={actersList.slice(0, 8)}
              totalCount={actersList.length}
            />
          </Box>
        )
      })}
    </>
  )
}
