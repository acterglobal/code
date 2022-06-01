import React, { FC } from 'react'

import { Box } from '@material-ui/core'
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles'

import { LoadingSpinner } from '@acter/components/atoms/loading/spinner'
import { InfiniteList } from '@acter/components/pagination/infinite-list'
import { PostFormSection } from '@acter/components/posts/form/post-form-section'
import { SinglePost } from '@acter/components/posts/single-post'
import { checkMemberAccess } from '@acter/lib/acter/check-member-access'
import { useActer } from '@acter/lib/acter/use-acter'
import { usePosts } from '@acter/lib/post/use-posts'
import { useUser } from '@acter/lib/user/use-user'
import { ActerJoinSettings, Post } from '@acter/schema'

interface PostListProps {
  acterId?: string
}

export const PostList: FC<PostListProps> = ({ acterId }) => {
  const classes = useStyles()

  const {
    posts,
    fetching: postsLoading,
    hasMore,
    loadMore,
  } = usePosts({ acterId })
  const { user, fetching: userLoading } = useUser()
  const { acter, fetching: acterLoading } = useActer({ acterId })

  if (!posts && (acterLoading || userLoading || postsLoading))
    return <LoadingSpinner />
  if (!acter) return null

  const isUserActerFollower = acter.Followers.find(
    ({ Follower }) => Follower.id === user?.Acter?.id
  )

  const isActerPublic = acter.acterJoinSetting === ActerJoinSettings.EVERYONE

  if (!isActerPublic && (!user || !isUserActerFollower)) return null

  const isMember = checkMemberAccess(user, acter)

  return (
    <Box className={classes.mainContainer}>
      {isMember && <PostFormSection user={user} acterId={acterId} />}

      {(isActerPublic || isMember) && (
        <InfiniteList
          entities={posts}
          fetching={postsLoading}
          hasMore={hasMore}
          loadMore={loadMore}
          renderOnLoading={() => <LoadingSpinner />}
          render={(post: Post) => (
            <SinglePost post={post} acterId={acterId} key={`post-${post.id}`} />
          )}
        />
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
