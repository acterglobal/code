import React, { FC } from 'react'

import dynamic from 'next/dynamic'

import { Theme, Popover, Box } from '@mui/material'
import createStyles from '@mui/styles/createStyles'
import makeStyles from '@mui/styles/makeStyles'

import { LoadingSpinner } from '@acter/components/atoms/loading/spinner'
import { AddEmojiIcon } from '@acter/components/icons/add-emoji-icon'
import { blueGrey } from '@acter/components/themes/colors'
import { useActer } from '@acter/lib/acter/use-acter'
import {
  useCreatePostReaction,
  CreatePostReactionVariables,
} from '@acter/lib/post/use-create-post-reaction'
import { useUser } from '@acter/lib/user/use-user'

const Picker = dynamic(() => import('emoji-picker-react'), {
  ssr: false,
  loading: () => <Loading />,
})

interface AddPostReactionsProps {
  postId: string
  isComment?: boolean
}
export const AddPostReaction: FC<AddPostReactionsProps> = ({
  postId,
  isComment,
}) => {
  const classes = useStyles({ isComment })
  const [anchorEl, setAnchorEl] = React.useState(null)

  const [{ fetching: addingReaction }, createPostReaction] =
    useCreatePostReaction()
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
      <Box className={classes.icon} onClick={handleClick}>
        <AddEmojiIcon />
      </Box>

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

const Loading: FC = () => {
  const classes = useStyles({})
  return (
    <Box className={classes.loading}>
      <LoadingSpinner size={20} thickness={7} />
    </Box>
  )
}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    icon: {
      width: theme.spacing(4.5),
      cursor: 'pointer',
      display: 'flex',
      justifyContent: 'center',
      paddingLeft: theme.spacing(0.2),
      paddingRight: theme.spacing(0.1),
      height: theme.spacing(3),
      borderRadius: 30,
      backgroundColor: ({ isComment }: { isComment?: boolean }) =>
        isComment ? theme.palette.background.paper : blueGrey.A100,
    },
    loading: {
      width: 280,
      display: 'flex',
      justifyContent: 'center',
    },
  })
)
