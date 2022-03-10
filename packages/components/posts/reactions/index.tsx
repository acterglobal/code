import React, { FC } from 'react'

import { Theme, Box, Typography } from '@mui/material/';

import makeStyles from '@mui/styles/makeStyles';
import createStyles from '@mui/styles/createStyles';

import { AddPostReaction } from '@acter/components/posts/reactions/add-reaction'
import { checkMemberAccess } from '@acter/lib/acter/check-member-access'
import { useActer } from '@acter/lib/acter/use-acter'
import { useCreatePostReaction } from '@acter/lib/post/use-create-post-reaction'
import { useDeletePostReaction } from '@acter/lib/post/use-delete-post-reaction'
import { getPostReactionsGroupByEmoji } from '@acter/lib/reactions/get-reactions-group-by-emoji'
import { EmojiData, handleReaction } from '@acter/lib/reactions/handle-reaction'
import { useUser } from '@acter/lib/user/use-user'
import { Post } from '@acter/schema'

export interface PostReactionsProps {
  post: Post
}
export const PostReactions: FC<PostReactionsProps> = ({ post }) => {
  const isComment = Boolean(post.parentId)
  const classes = useStyles({ isComment })

  const [_deleteResult, deleteReaction] = useDeletePostReaction()
  const [_createResult, createReaction] = useCreatePostReaction()
  const { user } = useUser()
  const { acter } = useActer()

  const reactions = getPostReactionsGroupByEmoji(post.PostReactions)
  if (!reactions) return null

  const isMember = checkMemberAccess(user, acter)

  const handleClick = (emoji) => {
    if (!isMember) return null

    const emojiData: EmojiData = {
      emoji,
      emojiUnicode: reactions[emoji][0].emojiUnicode,
    }
    handleReaction({ emojiData, post, user, createReaction, deleteReaction })
  }

  return (
    <Box className={classes.postReactions}>
      {Object.keys(reactions).map((emoji, i) => (
        <Typography
          className={classes.emoji}
          onClick={() => handleClick(emoji)}
          key={`emoji-${i}`}
        >
          {emoji}&nbsp;
          {reactions[emoji].length}
        </Typography>
      ))}

      {isMember && <AddPostReaction postId={post.id} isComment={isComment} />}
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
  })
)
