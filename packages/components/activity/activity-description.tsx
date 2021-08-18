import React, { FC } from 'react'
import { Box, Hidden } from '@material-ui/core'
import { makeStyles, Theme } from '@material-ui/core/styles'
import { InterestsSection } from '@acter/components/interests/interests-section'
import { About } from '@acter/components/activity/about'
import { Acter, InterestType } from '@acter/schema'

const useStyles = makeStyles((theme: Theme) => ({
  container: {
    padding: theme.spacing(2),
    backgroundColor: 'white',
    borderRadius: 5,
    [theme.breakpoints.down('xs')]: {
      height: '100%',
      overflow: 'scroll',
    },
  },
}))

export interface ActivityDescriptionProps {
  acter: Acter
  interestTypes: InterestType[]
}

export const ActivityDescription: FC<ActivityDescriptionProps> = ({
  acter,
  interestTypes,
}) => {
  const classes = useStyles()
  return (
    <Box className={classes.container}>
      <Hidden smDown>
        <About acter={acter} />
      </Hidden>
      <InterestsSection
        interestTypes={interestTypes}
        selected={acter.ActerInterests.map(({ Interest }) => Interest)}
      />
    </Box>
  )
}
