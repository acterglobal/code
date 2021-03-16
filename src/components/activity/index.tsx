import React, { FC } from 'react'
import Image from 'next/image'
import { Modal } from 'src/components/util/modal'
import { Box, Grid } from '@material-ui/core'
import { makeStyles, Theme } from '@material-ui/core/styles'
import { ConnectProps } from 'src/components/acter/connect'
import { ActivityInfo } from 'src/components/activity/activity-info'
import { ActivityDescription } from 'src/components/activity/activity-description'
import { Participates } from 'src/components/activity/participates'
import { Organiser } from 'src/components/activity/organiser'
import { InterestType } from '@schema'
import { getImageUrl } from 'src/lib/images/get-image-url'
import { useRouter } from 'next/router'

const useStyles = makeStyles((theme: Theme) => ({
  container: {
    backgroundColor: '#F2F2F2',
    width: 800,
    height: 700,
    overflowY: 'scroll',
  },
  imageContainer: {
    backgroundColor: 'white',
    height: 200,
    overflow: 'hidden',
    objectFit: 'contain',
  },
  content: {
    padding: theme.spacing(2),
  },
}))

export interface ActivityDetailsProps extends ConnectProps {
  interestTypes: InterestType[]
}

export const ActivityDetails: FC<ActivityDetailsProps> = ({
  acter,
  interestTypes,
  user,
  onJoin,
  onLeave,
  loading,
}) => {
  const classes = useStyles()

  const router = useRouter()

  return (
    // TODO: style close button on top
    <Modal disableBackdropClick={false} handleModalClose={() => router.back()}>
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

        <ActivityInfo
          acter={acter}
          user={user}
          onJoin={onJoin}
          onLeave={onLeave}
          loading={loading}
        />

        <Grid container spacing={2} className={classes.content}>
          <Grid item sm={8}>
            <ActivityDescription acter={acter} interestTypes={interestTypes} />
          </Grid>
          <Grid item sm={4}>
            <Participates acter={acter} />
            <br />
            <Organiser acter={acter.Activity.Organiser} />
          </Grid>
        </Grid>
      </Box>
    </Modal>
  )
}
