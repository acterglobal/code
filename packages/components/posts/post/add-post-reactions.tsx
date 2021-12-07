import React, { FC } from 'react'

import dynamic from 'next/dynamic'

import {
  makeStyles,
  createStyles,
  Theme,
  IconButton,
  Popover,
} from '@material-ui/core'

import { AddEmojiIcon } from '@acter/components/icons/add-emoji-icon'
import { LoadingSpinner } from '@acter/components/util/loading-spinner'
import { useActer } from '@acter/lib/acter/use-acter'
import {
  useCreatePostReaction,
  CreatePostReactionVariables,
} from '@acter/lib/post/use-create-post-reaction'
import { useUser } from '@acter/lib/user/use-user'

const Picker = dynamic(() => import('emoji-picker-react'), {
  ssr: false,
})

interface AddPostReactionsProps {
  postId: string
}
export const AddPostReactions: FC<AddPostReactionsProps> = ({ postId }) => {
  const classes = useStyles()
  const [anchorEl, setAnchorEl] = React.useState(null)
  const [
    { fetching: addingReaction },
    createPostReaction,
  ] = useCreatePostReaction()
  const { acter } = useActer()
  const { user } = useUser()

  if (!acter || !user) return null

  const onEmojiClick = (_, emojiObject) => {
    const data: CreatePostReactionVariables = {
      emoji: emojiObject.emoji,
      emojiUnicode: emojiObject.unified,
      acterId: user.Acter.id,
      postId: postId,
      createdByUserId: user.id,
    }

    createPostReaction(data)

    handleClose()
  }

  const handleClick = (event) => setAnchorEl(event.currentTarget)
  const handleClose = () => setAnchorEl(null)
  const open = Boolean(anchorEl)

  if (addingReaction) return <LoadingSpinner thickness={5} />

  return (
    <>
      <IconButton
        disableRipple
        classes={{ root: classes.icon }}
        onClick={handleClick}
      >
        <AddEmojiIcon />
      </IconButton>

      <Popover
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
        transformOrigin={{ vertical: 'top', horizontal: 'center' }}
      >
        <Picker
          onEmojiClick={onEmojiClick}
          disableAutoFocus={true}
          groupNames={{ smileys_people: 'PEOPLE' }}
          native
        />
      </Popover>
    </>
  )
}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    icon: {
      padding: 0,
      paddingTop: theme.spacing(0.5),
      height: theme.spacing(3.5),
      '&:hover': {
        background: 'none',
      },
    },
  })
)
