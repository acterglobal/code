import React, { FC } from 'react'
import { Box, Typography } from '@material-ui/core'
import { makeStyles, Theme } from '@material-ui/core/styles'
// import {InterestsSection} from 'src/components/interests/interests-section'

const useStyles = makeStyles((theme: Theme) => ({
  container: {
    margin: '10px 0px 10px 10px',
    padding: 20,
    width: 300,
    // height: '100%',
    backgroundColor: 'white',
    borderRadius: 5,
  },
  heading: {
    fontWeight: 'bolder',
    fontSize: '0.9rem',
  },
  description: {
    fontSize: '0.7rem',
    lineHeight: '0.05rem',
    color: theme.palette.secondary.main,
  },
}))

// TODO: add interests
export interface ActivityDescriptionProps {
  description: string
}

export const ActivityDescription: FC<ActivityDescriptionProps> = ({
  description,
}) => {
  const classes = useStyles()
  return (
    <Box className={classes.container}>
      <Typography className={classes.heading} variant="h6">
        About
      </Typography>
      <Typography className={classes.description} variant="caption">
        {description}
      </Typography>
    </Box>
  )
}
