import React, { FC } from 'react'
import { useRouter } from 'next/router'
import { getLandingPageTab } from 'src/lib/acter/get-landing-page-tab'
import { Box, Button, createStyles, withStyles, Theme } from '@material-ui/core'
import { ACTIVITIES } from 'src/constants'
import { Acter, User } from '@generated/type-graphql'

export interface AddActivityButtonProps {
  acter: Acter
  user: User
}

export const AddActivityButton: FC<AddActivityButtonProps> = ({
  acter,
  user,
}) => {
  const router = useRouter()
  const tab = getLandingPageTab(router)

  if (tab !== ACTIVITIES) return null

  const canCreateActivity = acter.Followers?.map(
    ({ Follower: { id } }) => id
  ).includes(user?.Acter?.id)

  if (!canCreateActivity) {
    return null
  }

  return (
    <StyledContainer>
      <StyledButton
        onClick={() =>
          router.push(`/activities/new?organiserActerId=${acter.id}`)
        }
      >
        + Add Activity
      </StyledButton>
    </StyledContainer>
  )
}

const StyledContainer = withStyles((theme: Theme) =>
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
      backgroundColor: theme.palette.secondary.light,
      color: theme.palette.secondary.contrastText,
      textTransform: 'capitalize',
    },
    '&:hover': {
      backgroundColor: theme.palette.secondary.main,
    },
  })
)(Button)
