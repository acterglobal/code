import React, { FC } from 'react'

import { Box, Hidden } from '@material-ui/core'
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles'

import { InterestsSection } from '@acter/components/interests/interests-section'
import { Acter, InterestType } from '@acter/schema'

export interface ActerTileInterestsProps {
  acter: Acter
  interestTypes: InterestType[]
}

export const ActerTileInterests: FC<ActerTileInterestsProps> = ({
  acter,
  interestTypes,
}) => {
  const classes = useStyles()

  return (
    <Hidden smDown>
      <Box className={classes.interests}>
        <InterestsSection
          interestTypes={interestTypes}
          selected={acter.ActerInterests?.map(({ Interest }) => Interest)}
        />
      </Box>
    </Hidden>
  )
}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    interests: {
      height: '100%',
      width: 310,
      marginTop: theme.spacing(1),
      marginRight: theme.spacing(1),
    },
  })
)
