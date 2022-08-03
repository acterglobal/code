import React, { FC, useState } from 'react'

import { Box } from '@material-ui/core'
import { makeStyles, createStyles, Theme } from '@material-ui/core'

import { SanitizedContent } from '@acter/components/molecules/sanitized-content'
import { PostInfo, PostInfoProps } from '@acter/components/posts/post/info'
import { PostReactions } from '@acter/components/posts/reactions'
import { SidebarProfile } from '@acter/components/user/profile/info/side-bar'
import { Drawer } from '@acter/components/util/drawer'

type PostContentProps = PostInfoProps

export const PostContent: FC<PostContentProps> = ({ post }) => {
  const classes = useStyles()
  const [openDrawer, setDrawerOpen] = useState(false)
  const [heading, setHeading] = useState('')
  const [mentionActerId, setMentionedActerId] = useState(null)

  const handleDrawerOpen = (mentionActerId) => {
    setMentionedActerId(mentionActerId)
    setDrawerOpen(true)
    setHeading('User Profile')
  }

  const handleDrawerClose = () => {
    setDrawerOpen(false)
    setHeading('')
  }

  document.body.addEventListener('click', (e) => {
    if (e.target && e.target.nodeName == 'A' && !!e.target.getAttribute('id')) {
      const mentionActerId = e.target.getAttribute('id')
      handleDrawerOpen(mentionActerId)
    }
  })

  return (
    <Box className={classes.postContent}>
      <PostInfo post={post} />

      {post.content && (
        <div className={classes.description}>
          <SanitizedContent isMarkdown={post.isMarkDown}>
            {post.content}
          </SanitizedContent>
        </div>
      )}

      <PostReactions post={post} />
      <Drawer
        heading={heading}
        open={openDrawer}
        handleClose={handleDrawerClose}
      >
        <SidebarProfile acterId={mentionActerId} />
      </Drawer>
    </Box>
  )
}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    postContent: {
      marginLeft: theme.spacing(1),
      marginTop: theme.spacing(0.6),
      borderRadius: theme.spacing(1),
      width: '100%',
      overflowX: 'auto',
      padding: theme.spacing(1),
      '& a': {
        textDecoration: 'none',
        lineHeight: '1.2rem',
        color: theme.colors.green.light,
        fontWeight: theme.typography.fontWeightBold,
        '&:hover': {
          color: theme.colors.green.dark,
        },
      },
    },
    description: {
      display: 'block',
      color: theme.palette.secondary.dark,
      fontSize: '0.813rem',
      lineHeight: 1,
      hyphens: 'auto',
      overflow: 'hidden',
      '& p': {
        margin: 0,
        lineHeight: '1.25rem',
      },
      '& li': {
        lineHeight: '1.2rem',
      },
    },
  })
)
