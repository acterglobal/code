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
} from 'src/components/group/header-section'
import { Header as AboutSection } from 'src/components/acter/landing-page/info-section/header'
import {
  MembersSection,
  MembersSectionProps,
} from 'src/components/group/members-section'
import { PostList, PostListProps } from 'src/components/posts'
import { ActerType, Acter } from '@schema'

export type GroupLandingProps = HeaderSectionProps &
  MembersSectionProps &
  PostListProps & {
    acterTypes: ActerType[]
    onGroupSubmit: (groupData: Acter) => void
  }

export const GroupLanding: FC<GroupLandingProps> = ({
  acter,
  acterTypes,
  user,
  onJoin,
  onLeave,
  onGroupSubmit,
  onConnectionStateChange,
  loading,
  posts,
  onPostSubmit,
  onPostDelete,
}) => {
  const classes = useStyles()
  return (
    <Box className={classes.root}>
      <HeaderSection
        acter={acter}
        acterTypes={acterTypes}
        user={user}
        onGroupSubmit={onGroupSubmit}
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
