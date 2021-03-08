import React, { FC } from 'react'
import Image from 'next/image'
import { Modal } from 'src/components/util/modal/modal'
import { Box, Grid } from '@material-ui/core'
import { makeStyles, Theme } from '@material-ui/core/styles'
import { ConnectProps } from 'src/components/acter/connect'
import { ActivityInfo } from 'src/components/activity/activity-info'
import { ActivityDescription } from 'src/components/activity/activity-description'
import { Participates } from 'src/components/activity/participates'
import { Organiser } from 'src/components/activity/organiser'
import { InterestType } from '@generated/type-graphql'
import { getImageUrl } from 'src/lib/images/get-image-url'

const useStyles = makeStyles((theme: Theme) => ({
  container: {
    backgroundColor: '#F2F2F2',
  },
  imageContainer: {
    backgroundColor: 'white',
    height: 250,
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

  return (
    <Box className={classes.container}>
      <Box className={classes.imageContainer}>
        <Image
          src={getImageUrl(acter.bannerUrl, 'banner')}
          alt="Picture of activity"
          layout="responsive"
          width={600}
          height={250}
        />
      </Box>

      <ActivityInfo acter={acter} />

      <Grid container spacing={2} className={classes.content}>
        <Grid item sm={8}>
          <ActivityDescription acter={acter} interestTypes={interestTypes} />
        </Grid>
        <Grid item sm={4}>
          <Participates
            acter={acter}
            user={user}
            onJoin={onJoin}
            onLeave={onLeave}
            loading={loading}
          />
          <br />
          <Organiser acter={acter.Activity.Organiser} />
        </Grid>
      </Grid>
    </Box>
  )
}
