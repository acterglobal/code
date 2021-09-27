import React, { FC } from 'react'

import Image from 'next/image'

import { Box, Grid, Hidden } from '@material-ui/core'
import { makeStyles, Theme } from '@material-ui/core/styles'

import { ActivityDescription } from '@acter/components/activity/activity-description'
import { ActivityInfo } from '@acter/components/activity/activity-info'
import { Organiser } from '@acter/components/activity/organiser'
import { Participates } from '@acter/components/activity/participates'
import { PostList } from '@acter/components/posts'
import { getImageUrl } from '@acter/lib/images/get-image-url'
import { Acter } from '@acter/schema'

interface ActivityDetailsProps {
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
      </Grid>

      <Hidden mdUp>
        <Grid item xs={12} sm={8}>
          <ActivityDescription acter={acter} />
        </Grid>
      </Hidden>

      <PostList />
    </Box>
  )
}

const useStyles = makeStyles((theme: Theme) => ({
  container: {
    backgroundColor: '#F2F2F2',
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
}))
