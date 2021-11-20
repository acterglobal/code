import React, { FC } from 'react'

import {
  Box,
  createStyles,
  makeStyles,
  Theme,
  Typography,
} from '@material-ui/core'

import { Connect } from '@acter/components/acter/connect'
import { AddInviteSection } from '@acter/components/acter/landing-page/header-section/add-invite'
import { FeatureFlag } from '@acter/components/util/feature-flag'
import { LoadingSpinner } from '@acter/components/util/loading-spinner'
import { useActer } from '@acter/lib/acter/use-acter'
import { capitalize } from '@acter/lib/string/capitalize'

export const HeaderSection: FC = () => {
  const classes = useStyles()
  const { acter, fetching: acterLoading } = useActer()

  if (acterLoading) return <LoadingSpinner />
  if (!acter) return null

  return (
    <>
      <Box className={classes.heading}>
        <Box className={classes.titleSection}>
          <Typography className={classes.name}>
            # {capitalize(acter.name)}
          </Typography>
        </Box>
        <Box className={classes.buttonContainer}>
          <FeatureFlag>
            <AddInviteSection />
          </FeatureFlag>
          <Connect />
        </Box>
      </Box>
    </>
  )
}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    heading: {
      height: theme.spacing(6),
      borderBottom: '1px solid white',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      paddingLeft: theme.spacing(6),
    },
    titleSection: {
      display: 'flex',
      alignItems: 'center',
    },
    name: {
      fontWeight: theme.typography.fontWeightBold,
      fontSize: 14,
    },
    buttonContainer: {
      display: 'flex',
      fontSize: '.8rem',
      marginRight: theme.spacing(3),
    },
  })
)
