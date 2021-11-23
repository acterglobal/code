import React, { FC } from 'react'

import Image from 'next/image'

import { Box, Grid, Hidden, makeStyles, Theme } from '@material-ui/core'

import { ActivityDescription } from '@acter/components/activity/activity-description'
import { ActivityInfo } from '@acter/components/activity/activity-info'
import { Organiser } from '@acter/components/activity/organiser'
import { Participates } from '@acter/components/activity/participates'
import { PostsSection } from '@acter/components/activity/posts'
import { getImageUrl } from '@acter/lib/images/get-image-url'
import { Acter } from '@acter/schema'

export interface ActivityDetailsProps {
  acter: Acter
}

export const ActivityDetails: FC<ActivityDetailsProps> = ({ acter }) => {
  const classes = useStyles()

  if (!acter) return null

  return (
    <Box className={classes.container}>
      <Box className={classes.imageContainer}>
        <Image
          src={getImageUrl(acter.bannerUrl, 'banner')}
          alt="Picture of activity"
          layout="responsive"
          width={600}
          height={200}
        />
      </Box>

      <ActivityInfo acter={acter} />

      <Grid container spacing={2} className={classes.content}>
        <Hidden smDown>
          <Grid item xs={12} sm={8}>
            <ActivityDescription acter={acter} />
          </Grid>
        </Hidden>

        <Grid item xs={12} sm={4}>
          <Participates acter={acter} />
          <Organiser acter={acter?.Activity?.Organiser} />
        </Grid>

        <Grid item xs={12} className={classes.posts}>
          <PostsSection acter={acter} />
        </Grid>
      </Grid>

      <Hidden mdUp>
        <Grid item xs={12} sm={8}>
          <ActivityDescription acter={acter} />
        </Grid>
      </Hidden>
    </Box>
  )
}

const useStyles = makeStyles((theme: Theme) => ({
  container: {
    backgroundColor: theme.colors.grey.extraLight,
    width: 800,
    height: '100%',
    [theme.breakpoints.down('sm')]: {
      maxWidth: 700,
    },
    [theme.breakpoints.down('xs')]: {
      maxWidth: 310,
    },
    overflowY: 'scroll',
    marginBottom: 10,
  },
  imageContainer: {
    backgroundColor: 'white',
    overflow: 'hidden',
    objectFit: 'contain',
  },
  content: {
    padding: theme.spacing(2),
    [theme.breakpoints.down('sm')]: {
      padding: theme.spacing(1),
    },
  },
  membersContainer: {
    [theme.breakpoints.down('xs')]: {
      display: 'flex',
    },
  },
  posts: {
    '&.MuiGrid-item': {
      paddingRight: theme.spacing(5),
      paddingLeft: theme.spacing(5),
    },
  },
}))
