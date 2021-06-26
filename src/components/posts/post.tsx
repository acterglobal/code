import React, { FC } from 'react'
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles'
import Markdown from 'markdown-to-jsx'
import { grey } from '@material-ui/core/colors'
import { Box, Typography } from '@material-ui/core'
import MenuItem from '@material-ui/core/MenuItem'
import { MoreVert as ThreeDotsIcon } from '@material-ui/icons'
import { DropdownMenu } from 'src/components/util/dropdown-menu'
import { ActerAvatar } from 'src/components/acter/avatar'
import { Post as PostType } from '@schema'
import moment from 'moment'
import clsx from 'clsx'

export interface PostsProps {
  post?: PostType
  commenting?: boolean
  onPostDelete: (post: PostType) => Promise<void>
}

export const Post: FC<PostsProps> = ({ post, commenting, onPostDelete }) => {
  const classes = useStyles()

  const onDelete = () => {
    onPostDelete(post)
  }

  const timeStamp = moment(post.updatedAt).fromNow()

  return (
    <Box className={clsx(classes.post, commenting && classes.comment)}>
      <ActerAvatar acter={post.Author} size={commenting ? 4 : 6} />
      <Box className={classes.postContent}>
        <Box>
          <Box className={classes.topSection}>
            <Typography variant="h6" className={classes.title}>
              {post.Author.name}
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
            {post.Acter.name}
          </Typography>
        </Box>
        <Box>
          <Typography variant="caption" className={classes.description}>
            <Markdown>{post.content}</Markdown>
          </Typography>
        </Box>
      </Box>
      <Box>
        <DropdownMenu anchorNode={<ThreeDotsIcon />} closeOnClick>
          <MenuItem onClick={onDelete}>Delete</MenuItem>
        </DropdownMenu>
      </Box>
    </Box>
  )
}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    post: {
      display: 'flex',
      flexDirection: 'row',
      padding: 5,
      paddingTop: 10,
    },
    postContent: {
      marginLeft: theme.spacing(1),
      marginTop: 5,
      borderRadius: 7,
      width: '100%',
    },
    comment: {
      backgroundColor: grey[200],
      borderRadius: 7,
      marginLeft: 8,
      marginRight: 16,
      marginBottom: 10,
      padding: theme.spacing(1),
      display: 'flex',
      alignItems: 'flex-start',
    },
    acterTypeName: {
      color: grey[600],
      fontSize: 11,
      textTransform: 'capitalize',
    },
    title: {
      color: grey[700],
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
      color: grey[600],
    },
    description: {
      color: grey[700],
      fontSize: 12,
      hyphens: 'auto',
      overflow: 'hidden',
    },
  })
)
