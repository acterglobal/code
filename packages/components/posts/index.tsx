import React, { FC, useState } from 'react'

import { Box } from '@material-ui/core'
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles'

import { LoadingSpinner } from '@acter/components/atoms/loading/spinner'
import { PostFormSection } from '@acter/components/posts/form/post-form-section'
import { SinglePost } from '@acter/components/posts/single-post'
import { SidebarProfile } from '@acter/components/user/profile/info/side-bar'
import { Drawer } from '@acter/components/util/drawer'
import { checkMemberAccess } from '@acter/lib/acter/check-member-access'
import { getFollowersByType } from '@acter/lib/acter/get-followers-by-type'
import { useActer } from '@acter/lib/acter/use-acter'
import { MemberType } from '@acter/lib/constants'
import { usePosts } from '@acter/lib/post/use-posts'
import { useUser } from '@acter/lib/user/use-user'
import { ActerJoinSettings } from '@acter/schema'

const { PEOPLE } = MemberType

interface PostListProps {
  acterId?: string
}

export const PostList: FC<PostListProps> = ({ acterId }) => {
  const classes = useStyles()

  const { posts, fetching: postsLoading } = usePosts({ acterId })
  const { user, fetching: userLoading } = useUser()
  const { acter, fetching: acterLoading } = useActer({ acterId })
  const [openDrawer, setDrawerOpen] = useState(false)
  const heading = 'User Profile' as string
  const [mentionActerId, setMentionedActerId] = useState(null)

  const handleDrawerOpen = (mentionActerId: string) => {
    setMentionedActerId(mentionActerId)
    setDrawerOpen(true)
  }

  const handleDrawerClose = () => {
    setDrawerOpen(false)
    setMentionedActerId(null)
  }

  if (acterLoading || userLoading || postsLoading) return <LoadingSpinner />
  if (!acter) return null

  const isUserActerFollower = acter.Followers.find(
    ({ Follower }) => Follower.id === user?.Acter?.id
  )

  const isActerPublic = acter.acterJoinSetting === ActerJoinSettings.EVERYONE

  if (!isActerPublic && (!user || !isUserActerFollower)) return null

  const isMember = checkMemberAccess(user, acter)

  const validFollowers = getFollowersByType(acter, PEOPLE)

  return (
    <Box className={classes.mainContainer}>
      {isMember && (
        <PostFormSection
          user={user}
          acterId={acterId}
          followers={validFollowers}
        />
      )}

      {(isActerPublic || isMember) && (
        <>
          {posts?.map((post) => (
            <SinglePost
              post={post}
              acterId={acterId}
              key={`post-${post.id}`}
              handleOpenSidePanel={handleDrawerOpen}
            />
          ))}
          {mentionActerId && (
            <Drawer
              heading={heading}
              open={openDrawer}
              handleClose={handleDrawerClose}
            >
              <SidebarProfile acterId={mentionActerId} />
            </Drawer>
          )}
        </>
      )}
    </Box>
  )
}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    mainContainer: {
      width: '100%',
      margin: 'auto',
      display: 'flex',
      flexWrap: 'wrap',
      marginBottom: theme.spacing(1),
      [theme.breakpoints.down('xs')]: {
        width: 300,
      },
    },
  })
)
