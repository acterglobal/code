import React, { FC } from 'react'
import { useRouter } from 'next/router'
import { Link } from '@acter/components/util/anchor-link'
import { Box, Button, createStyles, withStyles, Theme } from '@material-ui/core'
import { getLandingPageTab } from '@acter/lib/acter/get-landing-page-tab'
import { userHasRoleOnActer } from '@acter/lib/user/user-has-role-on-acter'
import { Acter, ActerConnectionRole, User } from '@acter/schema/types'
import { ActerMenu } from '@acter/lib/constants'

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
        <StyledButton>+ Add Activity</StyledButton>
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
      textTransform: 'capitalize',
      '&:hover': {
        backgroundColor: theme.colors.grey.dark,
      },
    },
  })
)(Button)
