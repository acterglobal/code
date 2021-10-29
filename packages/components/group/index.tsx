import React, { FC } from 'react'

import {
  Box,
  createStyles,
  Grid,
  Hidden,
  makeStyles,
  Theme,
} from '@material-ui/core'

import { Header as AboutSection } from '@acter/components/acter/landing-page/info-section/header'
import { HeaderSection } from '@acter/components/group/header-section'
import { MembersSection } from '@acter/components/group/members-section'
import { PostList } from '@acter/components/posts'
import { LoadingSpinner } from '@acter/components/util/loading-spinner'
import { useActer } from '@acter/lib/acter/use-acter'

export const GroupLanding: FC = () => {
  const classes = useStyles()

  const { acter, fetching: acterLoading } = useActer()

  if (acterLoading) return <LoadingSpinner />
  if (!acter) return null

  return (
    <Box className={classes.root}>
      <HeaderSection />
      <Grid container spacing={2} className={classes.content}>
        <Grid item xs={12} md={8}>
          <Box className={classes.posts}>
            <PostList />
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
              <MembersSection />
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
