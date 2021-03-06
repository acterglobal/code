import React, { FC } from 'react'
import Image from 'next/image'
import { Modal } from 'src/components/util/modal/modal'
import { Box } from '@material-ui/core'
import { makeStyles, Theme } from '@material-ui/core/styles'
import { ConnectProps } from 'src/components/acter/connect'
import { ActivityInfo } from 'src/components/activity/activity-info'
import { ActivityDescription } from 'src/components/activity/activity-description'
import { Participates } from 'src/components/activity/participates'
import { Organiser } from 'src/components/activity/organiser'

import { Acter, InterestType, User } from '@generated/type-graphql'

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
    <Modal>
      <Box className={classes.container}>
        <Box className={classes.imageContainer}>
          <Image
            className={classes.image}
            src={`https://acter.ams3.cdn.digitaloceanspaces.com/${acter.bannerUrl}`}
            alt="Picture of activity"
            width={750}
            height={250}
          />
        </Box>

        <ActivityInfo acter={acter} />
        <Box style={{ display: 'flex' }}>
          <ActivityDescription acter={acter} interestTypes={interestTypes} />
          <Box style={{ margin: 10, width: '330px' }}>
            <Participates
              acter={acter}
              user={user}
              onJoin={onJoin}
              onLeave={onLeave}
              loading={loading}
            />
            <Organiser acter={acter.Activity.Organiser} />
          </Box>
        </Box>
      </Box>
    </Modal>
  )
}
