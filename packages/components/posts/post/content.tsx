import React, { FC, useEffect } from 'react'

import { Box } from '@material-ui/core'
import { makeStyles, createStyles, Theme } from '@material-ui/core'

import { SanitizedContent } from '@acter/components/molecules/sanitized-content'
import { PostInfo, PostInfoProps } from '@acter/components/posts/post/info'
import { PostReactions } from '@acter/components/posts/reactions'
import { addMentionListener } from '@acter/lib/post/add-mention-listener'

type PostContentProps = PostInfoProps & {
  handleOpenSidePanel: (data: string) => void
}

export const PostContent: FC<PostContentProps> = ({
  post,
  handleOpenSidePanel,
}) => {
  const classes = useStyles()

  useEffect(() => {
    addMentionListener(handleOpenSidePanel)
  }, [])

  return (
    <>
      <Box className={classes.postContent}>
        <PostInfo post={post} handleOpenSidePanel={handleOpenSidePanel} />

        {post.content && (
          <div className={classes.description}>
            <SanitizedContent isMarkdown={post.isMarkDown}>
              {post.content}
            </SanitizedContent>
          </div>
        )}

        <PostReactions post={post} />
      </Box>
    </>
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
        color: theme.palette.secondary.main,
        fontWeight: theme.typography.fontWeightBold,
        '&:hover': {
          color: theme.colors.green.light,
        },
      },
    },
    description: {
      display: 'block',
      color: theme.palette.secondary.main,
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
