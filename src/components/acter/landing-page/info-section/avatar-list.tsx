import React, { FC } from 'react'
import { createStyles, makeStyles, Theme } from '@material-ui/core'
import { Box, Typography } from '@material-ui/core'
import { ActerAvatar } from 'src/components/acter/avatar'
import { Acter } from '@generated/type-graphql'

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    section: {
      fontSize: '0.7rem',
      fontWeight: 'bold',
      color: theme.palette.secondary.main,
    },
  })
)

export interface AvatarListProps {
  acters: Acter[]
  title: string
}

export const AvatarList: FC<AvatarListProps> = ({ acters, title }) => {
  const classes = useStyles()
  if (acters.length <= 0) {
    return null
  }
  return (
    <Box>
      <Typography variant="h6" className={classes.section}>
        {title} ({acters.length})
      </Typography>
      <Box style={{ display: 'flex' }}>
        {acters.map((acter) => (
          <ActerAvatar
            key={`info-follower-acter-${acter.id}`}
            acter={acter}
            size={4}
          />
        ))}
      </Box>
    </Box>
  )
}

// export default People
