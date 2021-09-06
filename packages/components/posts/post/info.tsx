import React, { FC } from 'react'
import { formatRelative, parseISO } from 'date-fns/fp'
import { pipe } from 'fp-ts/function'
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles'
import { Box, Typography } from '@material-ui/core'
import { Post } from '@acter/schema'
import { capitalize } from '@acter/lib/string/capitalize'
export interface PostInfoProps {
  post: Post
}

export const PostInfo: FC<PostInfoProps> = ({ post }) => {
  const classes = useStyles()

  //@ts-ignore
  const timeStamp = pipe(post.updatedAt, parseISO, formatRelative(new Date()))

  return (
    <Box>
      <Box className={classes.topSection}>
        <Typography variant="h6" className={classes.title}>
          {post.Author.name && capitalize(post.Author.name)}
        </Typography>
        <Typography variant="body2" className={classes.timeStamp}>
          {timeStamp}
        </Typography>
      </Box>
      <Typography
        className={classes.acterTypeName}
        variant="body2"
        gutterBottom
      >
        {post.Acter.name && capitalize(post.Acter.name)}
      </Typography>
    </Box>
  )
}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    acterTypeName: {
      color: theme.palette.secondary.main,
      fontSize: 11,
    },
    title: {
      color: theme.palette.secondary.main,
      fontWeight: theme.typography.fontWeightBold,
      fontSize: 11,
      marginBottom: 0,
      lineHeight: 1,
    },
    topSection: {
      display: 'flex',
      alignItems: 'center',
    },
    timeStamp: {
      fontSize: 9,
      marginLeft: theme.spacing(1),
      fontWeight: theme.typography.fontWeightLight,
      color: theme.palette.secondary.main,
    },
  })
)
