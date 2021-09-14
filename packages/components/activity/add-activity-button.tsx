import React, { FC } from 'react'

import { Box, Button, createStyles, withStyles, Theme } from '@material-ui/core'
import { AddSharp as AddIcon } from '@material-ui/icons'

import { LoadingSpinner } from '../util/loading-spinner'

import { Link } from '@acter/components/util/anchor-link'
import { getLandingPageTab } from '@acter/lib/acter/get-landing-page-tab'
import { useActer } from '@acter/lib/acter/use-acter'
import { ActerMenu } from '@acter/lib/constants'
import { useUser } from '@acter/lib/user/use-user'
import { userHasRoleOnActer } from '@acter/lib/user/user-has-role-on-acter'
import { ActerConnectionRole } from '@acter/schema'

export const AddActivityButton: FC = () => {
  const { acter, loading: acterLoading } = useActer()
  const { user, loading: userLoading } = useUser()

  if (acterLoading || userLoading) return <LoadingSpinner />
  if (!acter) return null

  const tab = getLandingPageTab()

  if (tab !== ActerMenu.ACTIVITIES) return null

  const canCreateActivity = userHasRoleOnActer(
    user,
    ActerConnectionRole.MEMBER,
    acter
  )

  if (!canCreateActivity) return null

  return (
    <StyledContainer>
      <Link href={`/activities/new?organiserActerId=${acter.id}`}>
        <StyledButton>
          <AddIcon fontSize="inherit" style={{ fontSize: 17 }} /> New Activity
        </StyledButton>
      </Link>
    </StyledContainer>
  )
}

const StyledContainer = withStyles(
  createStyles({
    root: {
      display: 'flex',
      justifyContent: 'flex-end',
    },
  })
)(Box)

const StyledButton = withStyles((theme: Theme) =>
  createStyles({
    root: {
      borderRadius: theme.spacing(3),
      paddingLeft: theme.spacing(3),
      paddingRight: theme.spacing(3),
      marginRight: theme.spacing(3),
      minWidth: '100px',
      height: theme.spacing(3.5),
      backgroundColor: theme.palette.secondary.main,
      color: theme.colors.white,
      fontWeight: theme.typography.fontWeightRegular,
      textTransform: 'capitalize',
      '&:hover': {
        backgroundColor: theme.colors.grey.dark,
      },
    },
  })
)(Button)
