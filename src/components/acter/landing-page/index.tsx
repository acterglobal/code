import React, { FC } from 'react'
import { useRouter } from 'next/router'
import { Grid, Box, makeStyles, createStyles, Theme } from '@material-ui/core'
import { grey } from '@material-ui/core/colors'
import {
  HeaderSection,
  HeaderSectionProps,
} from 'src/components/acter/landing-page/header-section'
import {
  InfoSection,
  InfoSectionProps,
} from 'src/components/acter/landing-page/info-section'
import { ActivitiesList } from 'src/components/activity/list'
import {
  MembersSection,
  MembersSectionProps,
} from 'src/components/acter/landing-page/members-section'
import { PostList, PostListProps } from 'src/components/posts'
import { PostForm } from 'src/components/posts/form'
import { ACTIVITIES, MEMBERS, FEED } from 'src/constants'
import { getLandingPageTab } from 'src/lib/acter/get-landing-page-tab'

export type ActerLandingProps = HeaderSectionProps &
  InfoSectionProps &
  MembersSectionProps &
  PostListProps & { onPostCreate: (data: string) => void }

export const ActerLanding: FC<ActerLandingProps> = ({
  acter,
  interestTypes,
  user,
  onJoin,
  onLeave,
  onConnectionStateChange,
  loading,
  posts,
  onPostCreate,
}) => {
  const classes = useStyles({})
  const router = useRouter()
  const tab = getLandingPageTab(router, FEED)

  const handleSubmit = (values, submitProps) => {
    submitProps.resetForm()
    onPostCreate(values.postText)
  }

  return (
    <Grid className={classes.header} container>
      <HeaderSection
        acter={acter}
        user={user}
        onJoin={onJoin}
        onLeave={onLeave}
        loading={loading}
      />
      <Grid container spacing={2}>
        <Grid className={classes.main} item xs={12} sm={12} md={8} xl={10}>
          <div role="tabpanel" hidden={tab !== ACTIVITIES}>
            <ActivitiesList acter={acter} user={user} />
          </div>
          <div role="tabpanel" hidden={tab !== MEMBERS}>
            <MembersSection
              acter={acter}
              user={user}
              onConnectionStateChange={onConnectionStateChange}
            />
          </div>
          <div role="tabpanel" hidden={tab !== FEED}>
            <Box className={classes.root}>
              <Box className={classes.mainContainer}>
                <PostForm user={user} onSubmit={handleSubmit} />
                <PostList posts={posts} />
              </Box>
            </Box>
          </div>
        </Grid>
        <Grid className={classes.info} item xs={12} sm={12} md={4} xl={2}>
          <InfoSection acter={acter} interestTypes={interestTypes} />
        </Grid>
      </Grid>
    </Grid>
  )
}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    header: {
      marginBottom: theme.spacing(2),
    },
    menu: {
      order: 1,
    },
    main: {
      order: 2,
    },
    info: {
      order: 3,
    },
    root: {
      background: grey[200],
      width: 800,
      overflow: 'hidden',
      justifyContent: 'center',
      padding: theme.spacing(2),
    },
    mainContainer: {
      backgroundColor: 'white',
      borderRadius: 7,
      width: '95%',
      display: 'flex',
      flexWrap: 'wrap',
      marginLeft: 'auto',
      marginRight: 'auto',
      marginBottom: theme.spacing(1),
      padding: theme.spacing(0.1),
      [theme.breakpoints.down('xs')]: {
        width: 300,
      },
    },
  })
)
