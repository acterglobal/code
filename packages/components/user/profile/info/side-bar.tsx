import React, { FC } from 'react'

import { Box, createStyles, makeStyles, Theme } from '@material-ui/core'

import { LoadingSpinner } from '@acter/components/atoms/loading/spinner'
import { About } from '@acter/components/user/profile/info/about'
import { Content } from '@acter/components/user/profile/info/content'
import { PartOf } from '@acter/components/user/profile/info/part-of'
import { useUser } from '@acter/lib/user/use-user'

interface SidebarProfileProps {
  acterId: string
}

export const SidebarProfile: FC<SidebarProfileProps> = ({ acterId }) => {
  const classes = useStyles()
  const { user, fetching: userLoading } = useUser({ acterId })

  if (userLoading) return <LoadingSpinner />

  if (!user) return null

  return (
    <Box className={classes.content}>
      <Content acterId={acterId} />

      <About acterId={acterId} />
      <PartOf acterId={acterId} />
    </Box>
  )
}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    content: {
      display: 'flex',
      alignItems: 'center',
      flexDirection: 'column',
      width: 526,
      backgroundColor: theme.colors.toolbar.main,
    },
    avatarImage: {
      marginLeft: 40,
      borderRadius: '50%',
      backgroundColor: theme.colors.white,
      borderColor: theme.colors.blue.grey,
      border: '10px solid',
      width: 220,
      height: 220,
      objectFit: 'cover',
      overflow: 'hidden',
      zIndex: 99,
      [theme.breakpoints.down('xs')]: {
        marginLeft: theme.spacing(1),
        width: 60,
        height: 60,
      },
    },
    info: {
      alignItems: 'flex-start',
    },
    label: {
      fontWeight: theme.typography.fontWeightBold,
      fontSize: '0.75rem',
      color: theme.colors.blue.mediumGrey,
      textTransform: 'capitalize',
    },
    detail: {
      fontWeight: theme.typography.fontWeightBold,
      fontSize: '1.3rem',
      color: theme.palette.secondary.main,
      marginBottom: 18,
    },
  })
)
