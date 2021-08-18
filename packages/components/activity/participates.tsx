import React, { FC } from 'react'
import { Box, Typography } from '@material-ui/core'
import { makeStyles, Theme } from '@material-ui/core/styles'
import { FollowersAvatars } from '@acter/components/acter/followers-avatars'
import { useRouter } from 'next/router'
import { acterAsUrl, ActerWithSlugAndType } from '@acter/lib/acter/acter-as-url'

const useStyles = makeStyles((theme: Theme) => ({
  container: {
    backgroundColor: 'white',
    padding: theme.spacing(2),
    borderRadius: theme.spacing(1),
  },
  heading: {
    fontWeight: 'bolder',
    fontSize: '0.9rem',
  },
}))

export type ParticipatesProps = {
  acter: ActerWithSlugAndType
}

export const Participates: FC<ParticipatesProps> = ({ acter }) => {
  const classes = useStyles()
  const router = useRouter()
  const handleOnAvatarClick = () =>
    router.push(`${acterAsUrl({ acter, extraPath: ['members'] })}`)
  return (
    <Box className={classes.container}>
      <Typography className={classes.heading} variant="h6">
        Participates
      </Typography>
      <FollowersAvatars acter={acter} onAvatarClick={handleOnAvatarClick} />
    </Box>
  )
}
