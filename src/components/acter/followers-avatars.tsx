import React, { FC } from 'react'
import { createStyles, makeStyles, Theme } from '@material-ui/core'
import { AvatarGroup } from 'src/components/acter/avatar-group'
import { Box, Typography } from '@material-ui/core'
import { titleCase } from 'title-case'
import { ActerAvatar } from 'src/components/acter/avatar'
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

        return (
          <Box key={`${title}-followers`}>
            <Typography variant="h6" className={classes.section}>
              {title} ({acters.length})
            </Typography>
            <AvatarGroup acters={acters} totalCount={2} />
          </Box>
        )
      })}
    </>
  )
}
