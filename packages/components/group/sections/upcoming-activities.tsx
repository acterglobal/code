import React, { FC } from 'react'

import { Box, createStyles, makeStyles, Theme } from '@material-ui/core'

import { SectionContainer } from '@acter/components/group/sections/container'
import { ZeroMessage } from '@acter/components/group/sections/zero-message'
import { ActerTypes } from '@acter/lib/constants'

export const UpcomingActivities: FC = () => {
  const classes = useStyles()
  const upcomingActivities = []

  return (
    <SectionContainer
      title="Upcoming Activities"
      buttonText="See All Activities"
      addItem={ActerTypes.ACTIVITY}
    >
      <Box className={classes.list}>
        {upcomingActivities?.length === 0 ? (
          <ZeroMessage
            addItem={ActerTypes.ACTIVITY}
            primaryText="There are currently no activities planned for this group."
            secondaryText="Do you want to plan an activity?"
            buttonText="Create Activity"
          />
        ) : (
          <>activities list comes here</>
        )}
      </Box>
    </SectionContainer>
  )
}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    list: {
      height: theme.spacing(14),
    },
  })
)
