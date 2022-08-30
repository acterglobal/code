import React, { FC } from 'react'

import { Box, Typography } from '@material-ui/core'
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles'

import { getPostTimeStamp } from '@acter/lib/post/get-post-timestamp'
import { Post } from '@acter/schema'

export interface PostInfoProps {
  post: Post
  handleOpenSidePanel: (data: string) => void
}

export const PostInfo: FC<PostInfoProps> = ({ post, handleOpenSidePanel }) => {
  const classes = useStyles()

  return (
    <Box>
      <Box className={classes.topSection}>
        <Box onClick={() => handleOpenSidePanel(post.Author?.id)}>
          <Typography variant="h6" className={classes.title}>
            {post.Author.name}
          </Typography>
        </Box>

        <Typography variant="body2" className={classes.timeStamp}>
          {getPostTimeStamp(post.updatedAt)}
        </Typography>
      </Box>
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
      cursor: 'pointer',
    },
    topSection: {
      display: 'flex',
      alignItems: 'center',
      marginBottom: theme.spacing(1),
    },
    timeStamp: {
      fontSize: 9,
      marginLeft: theme.spacing(1),
      fontWeight: theme.typography.fontWeightLight,
      color: theme.palette.secondary.main,
    },
  })
)
