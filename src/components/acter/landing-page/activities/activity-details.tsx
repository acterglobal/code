import React, { FC } from 'react'
import Image from 'next/image'
import { Modal } from 'src/components/util/modal/modal'
import { ExampleActiivity } from 'src/__fixtures__/activity/example-activity'
import { Box } from '@material-ui/core'
import { makeStyles, Theme } from '@material-ui/core/styles'
import { ActivityInfo } from 'src/components/acter/landing-page/activities/activity-info'
import { ActivityDescription } from 'src/components/acter/landing-page/activities/activity-description'
import { Participates } from 'src/components/acter/landing-page/activities/participates'
import { Organiser } from 'src/components/acter/landing-page/activities/organiser'
const useStyles = makeStyles((theme: Theme) => ({
  container: {
    width: 700,
    height: 680,
    backgroundColor: '#F2F2F2',
    borderRadius: '10px 10px 10px 10px',
  },
  imageContainer: {
    borderRadius: '10px 10px 0px 0px',
    backgroundColor: 'white',
  },
  image: {
    borderRadius: '10px 10px 0px 0px',
  },
}))

export const ActivityDetails = () => {
  const classes = useStyles()
  const activity = { ...ExampleActiivity }

  return (
    <Modal>
      <Box className={classes.container}>
        <Box className={classes.imageContainer}>
          <Image
            className={classes.image}
            src={activity.image}
            alt="Picture of activity"
            width={750}
            height={250}
          />
        </Box>

        <ActivityInfo activity={activity} />
        <Box style={{ display: 'flex' }}>
          <ActivityDescription description={activity.description} />
          <Box style={{ margin: 10, width: '330px' }}>
            <Participates />
            <Organiser />
          </Box>
        </Box>
      </Box>
    </Modal>
  )
}
