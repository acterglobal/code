import React, { FC, useState } from 'react'
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles'
import Markdown from 'markdown-to-jsx'
import { grey } from '@material-ui/core/colors'
import { Box, Typography } from '@material-ui/core'
import IconButton from '@material-ui/core/IconButton'
import Menu from '@material-ui/core/Menu'
import MenuItem from '@material-ui/core/MenuItem'
import { ActerAvatar } from 'src/components/acter/avatar'
import { Post as Posts } from '@schema'

export interface PostsProps {
  post: Posts
  commenting?: boolean
}

export const Post: FC<PostsProps> = ({ post, commenting }) => {
  const classes = useStyles()
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null)
  const open = Boolean(anchorEl)

  const menuOptions = ['Edit', 'Delete']

  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget)
  }

  const handleClose = () => {
    setAnchorEl(null)
  }

  // const ITEM_HEIGHT = 48

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
          <IconButton
            aria-label="more"
            aria-controls="long-menu"
            aria-haspopup="true"
            style={{ backgroundColor: 'red' }}
            onClick={handleClick}
          ></IconButton>
          <Menu
            id="long-menu"
            anchorEl={anchorEl}
            keepMounted
            open={open}
            onClose={handleClose}
            PaperProps={{
              style: {
                // maxHeight: ITEM_HEIGHT * 4.5,
                width: '20ch',
              },
            }}
          >
            {menuOptions.map((option) => (
              <MenuItem key={option} onClick={handleClose}>
                {option}
              </MenuItem>
            ))}
          </Menu>
        </Box>
        <Box>
          <Typography variant="caption" className={classes.description}>
            <Markdown>{post.content}</Markdown>
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
      fontSize: 11,
      textTransform: 'capitalize',
    },
    title: {
      color: grey[700],
      fontWeight: theme.typography.fontWeightMedium,
      fontSize: 11,
      marginBottom: 0,
      lineHeight: 1,
    },
    description: {
      color: grey[700],
      fontSize: 13,
      hyphens: 'auto',
      overflow: 'hidden',
    },
  })
)
