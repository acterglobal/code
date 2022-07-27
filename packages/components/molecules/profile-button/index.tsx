import React, { FC } from 'react'

import { createStyles, makeStyles, Theme, Box } from '@material-ui/core'

import { ActerAvatar } from '@acter/components/acter/avatar'
import { LoadingSpinner } from '@acter/components/atoms/loading/spinner'
import { LoginIcon } from '@acter/components/icons'
import { commonStyles } from '@acter/components/organisms/side-bar/common'
import { Link } from '@acter/components/util/anchor-link'
import { useAuthRedirect } from '@acter/lib/url/use-auth-redirect'
import { useUser } from '@acter/lib/user/use-user'

export const ProfileButton: FC = () => {
  const classes = useStyles()
  const { user, fetching: userLoading } = useUser()
  const { loginUrl } = useAuthRedirect()

  return (
    <>
      {user ? (
        <Link href="/profile">
          <ActerAvatar acter={user.Acter} size={4} />
        </Link>
      ) : userLoading ? (
        <LoadingSpinner size={20} thickness={3} />
      ) : (
        <Link href={loginUrl} isExternal={true}>
          <Box className={classes.icon}>
            <LoginIcon />
          </Box>
        </Link>
      )}
    </>
  )
}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    ...commonStyles(theme),

    icon: {
      width: '100%',
      margin: 'auto',
    },
  })
)
