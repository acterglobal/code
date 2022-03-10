import React, { FC } from 'react'

import { Box, Hidden } from '@mui/material'
import { Theme } from '@mui/material/styles';

import makeStyles from '@mui/styles/makeStyles';

import { About } from '@acter/components/activity/about'
import { InterestsSection } from '@acter/components/interests/interests-section'
import { Acter } from '@acter/schema'

const useStyles = makeStyles((theme: Theme) => ({
  container: {
    padding: theme.spacing(2),
    backgroundColor: 'white',
    borderRadius: 5,
    [theme.breakpoints.down('sm')]: {
      height: '100%',
      overflow: 'scroll',
    },
  },
}))

export interface ActivityDescriptionProps {
  acter: Acter
}

export const ActivityDescription: FC<ActivityDescriptionProps> = ({
  acter,
}) => {
  const classes = useStyles()
  return (
    <Box className={classes.container}>
      <Hidden mdDown>
        <About acter={acter} />
      </Hidden>
      <InterestsSection
        selected={acter.ActerInterests.map(({ Interest }) => Interest)}
      />
    </Box>
  );
}
