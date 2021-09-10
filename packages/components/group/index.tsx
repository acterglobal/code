import React, { FC } from 'react'
import {
  Box,
  createStyles,
  Grid,
  Hidden,
  makeStyles,
  Theme,
} from '@material-ui/core'
import {
  HeaderSection,
  HeaderSectionProps,
} from '@acter/components/group/header-section'
import { Header as AboutSection } from '@acter/components/acter/landing-page/info-section/header'
import {
  MembersSection,
  MembersSectionProps,
} from '@acter/components/group/members-section'
import { PostList, PostListProps } from '@acter/components/posts'

export type GroupLandingProps = HeaderSectionProps &
  MembersSectionProps &
  PostListProps

export const GroupLanding: FC<GroupLandingProps> = ({
  acter,
  user,
  onJoin,
  onLeave,
  onConnectionStateChange,
  loading,
  posts,
  onPostSubmit,
  onPostDelete,
  onPostUpdate,
}) => {
  const classes = useStyles()
  return (
    <Box className={classes.root}>
      <HeaderSection
        acter={acter}
        user={user}
        onJoin={onJoin}
        onLeave={onLeave}
        loading={loading}
      />
      <Grid container spacing={2} className={classes.content}>
        <Grid item xs={12} md={8}>
          <Box className={classes.posts}>
            <PostList
              user={user}
              acter={acter}
              posts={posts}
              onPostSubmit={onPostSubmit}
              onPostDelete={onPostDelete}
              onPostUpdate={onPostUpdate}
            />
          </Box>
        </Grid>

        <Hidden smDown>
          <Grid item md={4}>
            <Box className={classes.container}>
              <AboutSection
                title={acter.name}
                description={acter.description}
              />
            </Box>
            <Box className={classes.container}>
              <MembersSection
                acter={acter}
                user={user}
                onConnectionStateChange={onConnectionStateChange}
              />
            </Box>
          </Grid>
        </Hidden>
      </Grid>
    </Box>
  )
}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      height: '100%',
      paddingLeft: theme.spacing(3),
      paddingRight: theme.spacing(3),
    },
    content: {
      marginTop: theme.spacing(2),
    },
    posts: {},
    container: {
      backgroundColor: 'white',
      padding: theme.spacing(2),
      borderRadius: theme.spacing(1),
      marginBottom: theme.spacing(2),
    },
    name: {
      marginBottom: theme.spacing(1.5),
    },
  })
)
