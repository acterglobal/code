import React, { FC } from 'react'

import {
  Box,
  createStyles,
  makeStyles,
  Theme,
  Typography,
} from '@material-ui/core'

import { Connect } from '@acter/components/acter/connect'
import { ActionButtons } from '@acter/components/acter/landing-page/header-section/action-buttons'
import { AddInviteSection } from '@acter/components/acter/landing-page/header-section/add-invite'
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
          <Typography className={classes.name} variant="subtitle1">
            # {capitalize(acter.name)}
          </Typography>

          <ActionButtons />
        </Box>

        <Box>
          <AddInviteSection />
          <Connect />
        </Box>
      </Box>
    </>
  )
}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    heading: {
      height: theme.spacing(7),
      borderBottom: '1px solid white',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
    },
    titleSection: {
      display: 'flex',
      alignItems: 'center',
    },
    name: {
      fontWeight: theme.typography.fontWeightBold,
    },
  })
)
