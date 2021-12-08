import React, { FC } from 'react'

import {
  makeStyles,
  createStyles,
  Theme,
  Box,
  Typography,
} from '@material-ui/core/'

import { AddPostReactions } from '@acter/components/posts/post/add-post-reactions'
import { getPostReactionsGroupByEmoji } from '@acter/lib/post/get-reactions-group-by-emoji'
import { useCreatePostReaction } from '@acter/lib/post/use-create-post-reaction'
import { useDeletePostReaction } from '@acter/lib/post/use-delete-post-reaction'
import { useUser } from '@acter/lib/user/use-user'
import { Post } from '@acter/schema'

interface PostReactionsProps {
  post: Post
}
export const PostReactions: FC<PostReactionsProps> = ({ post }) => {
  const classes = useStyles({ isComment: Boolean(post.parentId) })

  const [_deleteResult, deletePostReaction] = useDeletePostReaction()
  const [_createResult, createPostReaction] = useCreatePostReaction()
  const { user } = useUser()

  const memberReactions = post.PostReactions.filter(
    (reaction) => reaction.acterId === user?.Acter.id
  )

  const reactions = getPostReactionsGroupByEmoji(post.PostReactions)
  if (Object.keys(reactions).length === 0) return null

  const handleClick = (emoji) => {
    if (!user) return null

    const reaction = memberReactions.find(
      (reaction) => reaction.emoji === emoji
    )

    if (reaction?.id) {
      return deletePostReaction({ id: reaction.id })
    }

    createPostReaction({
      postId: post.id,
      acterId: user.Acter.id,
      createdByUserId: user.id,
      emojiUnicode: reactions[emoji][0].emojiUnicode,
      emoji,
    })
  }

  return (
    <Box className={classes.postReactions}>
      {Object.keys(reactions).map((emoji) => (
        <Typography
          className={classes.emoji}
          onClick={() => handleClick(emoji)}
        >
          {emoji}&nbsp;
          {reactions[emoji].length}
        </Typography>
      ))}

      <Box className={classes.icon}>
        <AddPostReactions postId={post.id} />
      </Box>
    </Box>
  )
}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    postReactions: {
      display: 'flex',
      alignItems: 'center',
    },
    emoji: {
      fontSize: theme.spacing(2),
      paddingLeft: theme.spacing(1),
      paddingRight: theme.spacing(1),
      backgroundColor: ({ isComment }: { isComment: boolean }) =>
        isComment ? theme.colors.white : theme.colors.grey.extraLight,
      borderRadius: 30,
      marginRight: theme.spacing(0.5),
      fontWeight: theme.typography.fontWeightLight,
      cursor: 'pointer',
    },
    icon: {
      paddingLeft: theme.spacing(1),
      backgroundColor: theme.colors.grey.extraLight,
      borderRadius: 30,
    },
  })
)
