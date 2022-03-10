import React, { FC, useState } from 'react'

import { Box, Button, Theme } from '@mui/material';
import createStyles from '@mui/styles/createStyles';
import withStyles from '@mui/styles/withStyles';
import { AddSharp as AddIcon } from '@mui/icons-material'

import { AddActivity } from '@acter/components/activity/add-activity'
import { getLandingPageTab } from '@acter/lib/acter/get-landing-page-tab'
import { useActer } from '@acter/lib/acter/use-acter'
import { ActerMenu } from '@acter/lib/constants'
import { useUser } from '@acter/lib/user/use-user'
import { userHasRoleOnActer } from '@acter/lib/user/user-has-role-on-acter'
import { ActerConnectionRole } from '@acter/schema'

export const AddActivitySection: FC = () => {
  const [openDrawer, setOpenDrawer] = useState(false)

  const handleOnClick = () => setOpenDrawer(true)

  const { acter } = useActer()
  const { user } = useUser()

  const tab = getLandingPageTab()

  if (tab !== ActerMenu.ACTIVITIES) return null

  const canCreateActivity = userHasRoleOnActer(
    user,
    ActerConnectionRole.MEMBER,
    acter
  )

  if (!acter) return null

  if (!canCreateActivity) return null

  return (
    <>
      <StyledContainer>
        <StyledButton onClick={handleOnClick}>
          <AddIcon fontSize="inherit" style={{ fontSize: 17 }} /> New Activity
        </StyledButton>
      </StyledContainer>
      <AddActivity openDrawer={openDrawer} setDrawer={setOpenDrawer} />
    </>
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
      height: theme.spacing(4.5),
      backgroundColor: theme.palette.secondary.main,
      color: theme.colors.white,
      fontWeight: theme.typography.fontWeightRegular,
      fontSize: '1rem',
      textTransform: 'capitalize',
      '&:hover': {
        backgroundColor: theme.colors.grey.dark,
      },
    },
  })
)(Button)
