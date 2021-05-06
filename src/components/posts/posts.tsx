import React, { FC } from 'react'
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles'
import { grey } from '@material-ui/core/colors'
import { Box, Typography } from '@material-ui/core'
import Image from 'next/image'
import { getImageUrl } from 'src/lib/images/get-image-url'
import { Post } from '@schema'

export interface PostBoxProps {
  post: Post
  comment?: boolean
}

export const PostBox: FC<PostBoxProps> = ({ post, comment }) => {
  const classes = useStyles()

  return (
    <>
      <Box className={classes.image}>
        <Image
          src={getImageUrl(post.Author.avatarUrl, 'avatar')}
          alt={post.Author.name}
          layout="responsive"
          width="50"
          height="50"
        />
      </Box>
      <Box
        className={comment ? classes.commentContainer : classes.postContainer}
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
    </>
  )
}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    image: {
      marginRight: theme.spacing(3),
      objectFit: 'cover',
      border: '1px solid black',
      width: 30,
      height: 30,
      padding: theme.spacing(0.8),
      borderRadius: '50%',
      [theme.breakpoints.down('xs')]: {
        display: 'none',
      },
    },
    postContainer: {
      backgroundColor: 'white',
      borderRadius: 7,
      width: '90%',
      padding: theme.spacing(1),
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'flex-start',
    },
    commentContainer: {
      backgroundColor: grey[200],
      borderRadius: 7,
      width: 400,
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
      color: grey[800],
      display: '-webkit-box',
      boxOrient: 'vertical',
      wordBreak: 'break-all',
      overflow: 'hidden',
      width: '90%',
    },
  })
)
