import React, { FC } from 'react'

import Image from 'next/image'
import { useRouter } from 'next/router'

import { Box, Grid, Hidden } from '@material-ui/core'
import { makeStyles, Theme } from '@material-ui/core/styles'

import { LoadingSpinner } from '../util/loading-spinner'

import { ActivityDescription } from '@acter/components/activity/activity-description'
import { ActivityInfo } from '@acter/components/activity/activity-info'
import { Organiser } from '@acter/components/activity/organiser'
import { Participates } from '@acter/components/activity/participates'
import { PostList } from '@acter/components/posts'
import { StateFullModal as Modal } from '@acter/components/util/modal/statefull-modal'
import { acterAsUrl } from '@acter/lib/acter/acter-as-url'
import { useActer } from '@acter/lib/acter/use-acter'
import { getImageUrl } from '@acter/lib/images/get-image-url'
import { useUser } from '@acter/lib/user/use-user'

export const ActivityDetails: FC = () => {
  const classes = useStyles()

  const router = useRouter()

  const { user, loading: userLoading } = useUser()
  const { acter, loading: acterLoading } = useActer()

  if (acterLoading || userLoading) return <LoadingSpinner />
  if (!acter) return null

  const handleModalClose = () => {
    router.push(
      `${acterAsUrl({
        acter: acter.Activity.Organiser,
        extraPath: ['activities'],
      })}`
    )
  }

  return (
    <Modal
      handleModalClose={handleModalClose}
      actionButtons={['edit', 'delete']}
      acter={acter}
      user={user}
    >
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
            <Organiser acter={acter.Activity.Organiser} />
          </Grid>
        </Grid>

        <Hidden mdUp>
          <Grid item xs={12} sm={8}>
            <ActivityDescription acter={acter} />
          </Grid>
        </Hidden>

        <PostList />
      </Box>
    </Modal>
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
