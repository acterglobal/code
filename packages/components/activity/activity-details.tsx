import React, { FC } from 'react'

import { Box, Grid, Hidden, Theme } from '@mui/material';

import makeStyles from '@mui/styles/makeStyles';

import { ActivityDescription } from '@acter/components/activity/activity-description'
import { Participants } from '@acter/components/activity/participants'
import { PostsSection } from '@acter/components/activity/posts'
import { LoadingSpinner } from '@acter/components/atoms/loading/spinner'
import { Acter } from '@acter/schema'

export interface ActivityDetailsProps {
  acter: Acter
  acterLoading?: boolean
  handleOnClick: () => void
}

export const ActivityDetails: FC<ActivityDetailsProps> = ({
  acter,
  acterLoading,
  handleOnClick,
}) => {
  const classes = useStyles()

  if (acterLoading || !acter) return <LoadingSpinner />

  return (
    <Box className={classes.activityDetails}>
      <Grid container spacing={2} className={classes.content}>
        <Hidden mdDown>
          <Grid item xs={12} sm={7}>
            <ActivityDescription acter={acter} />
          </Grid>
        </Hidden>

        <Grid item xs={12} sm={5}>
          <Participants acter={acter} handleOnClick={handleOnClick} />
        </Grid>

        <Grid item className={classes.posts} xs={12} sm={7}>
          <PostsSection acter={acter} />
        </Grid>
      </Grid>
    </Box>
  );
}

const useStyles = makeStyles((theme: Theme) => ({
  activityDetails: {
    backgroundColor: theme.colors.grey.extraLight,
    columnGap: '120px',
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    [theme.breakpoints.down('md')]: {
      maxWidth: 700,
    },
    [theme.breakpoints.down('sm')]: {
      maxWidth: 310,
    },
    marginBottom: 10,
    overflowY: 'scroll',
    'ms-overflow-style': 'none',
    scrollbarWidth: 'none',
    '&::-webkit-scrollbar': {
      display: 'none',
      overflowY: 'hidden',
    },
  },
  content: {
    borderRadius: 5,
    justifyContent: 'space-between',
    [theme.breakpoints.down('md')]: {
      padding: theme.spacing(1),
    },
  },
  posts: {
    '&.MuiGrid-item': {
      paddingRight: theme.spacing(1),
      paddingLeft: theme.spacing(1),
    },
  },
}))
