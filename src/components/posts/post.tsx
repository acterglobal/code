import React, { FC } from 'react'
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles'
import { grey } from '@material-ui/core/colors'
import { Box, Typography } from '@material-ui/core'
import { ActerAvatar } from 'src/components/acter/avatar'
import { Post as Posts } from '@schema'

export interface PostsProps {
  post: Posts
  commenting?: boolean
}

export const Post: FC<PostsProps> = ({ post, commenting }) => {
  const classes = useStyles()

  return (
    <Box className={classes.postItems}>
      <ActerAvatar acter={post.Author} size={commenting ? 4 : 6} />
      <Box
        className={
          commenting ? classes.commentContainer : classes.postContainer
        }
      >
        <Box>
          <Typography variant="subtitle1" className={classes.title}>
            {post.Author.name}
          </Typography>
          <Typography
            className={classes.acterTypeName}
            variant="body2"
            gutterBottom
          >
            {post.Acter.name}
          </Typography>
        </Box>
        <Box>
          <Typography variant="caption" className={classes.description}>
            {post.content}
          </Typography>
        </Box>
      </Box>
    </Box>
  )
}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    postItems: {
      display: 'flex',
      flexDirection: 'row',
      padding: 5,
    },
    postContainer: {
      backgroundColor: 'white',
      borderRadius: 7,
      width: '100%',
      padding: theme.spacing(1),
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'flex-start',
    },
    commentContainer: {
      backgroundColor: grey[200],
      borderRadius: 7,
      width: '80%',
      marginLeft: 14,
      padding: theme.spacing(1),
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'flex-start',
    },
    acterTypeName: {
      color: grey[700],
      fontWeight: theme.typography.fontWeightLight,
      fontSize: 13,
      textTransform: 'capitalize',
    },
    title: {
      color: grey[700],
      fontWeight: theme.typography.fontWeightMedium,
      marginBottom: 0,
      lineHeight: 1,
    },
    description: {
      color: grey[700],
      hyphens: 'auto',
      overflow: 'hidden',
    },
  })
)
