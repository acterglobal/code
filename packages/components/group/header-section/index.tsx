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
import { LoadingSpinner } from '@acter/components/util/loading-spinner'
import { useActer } from '@acter/lib/acter/use-acter'
import { capitalize } from '@acter/lib/string/capitalize'
import { useUser } from '@acter/lib/user/use-user'
import { userHasRoleOnActer } from '@acter/lib/user/user-has-role-on-acter'
import { ActerConnectionRole } from '@acter/schema'

export const HeaderSection: FC = () => {
  const classes = useStyles()
  const { user, loading: userLoading } = useUser()
  const { acter, loading: acterLoading } = useActer()

  if (acterLoading || userLoading) return <LoadingSpinner />
  if (!acter) return null

  const isAdmin = userHasRoleOnActer(user, ActerConnectionRole.ADMIN, acter)

  return (
    <>
      <Box className={classes.heading}>
        <Box className={classes.titleSection}>
          <Typography className={classes.name} variant="subtitle1">
            # {capitalize(acter.name)}
          </Typography>

          {isAdmin && <ActionButtons acter={acter} />}
        </Box>

        <Box>
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
