import React, { FC, useState } from 'react'

import {
  Box,
  createStyles,
  makeStyles,
  Theme,
  Typography,
} from '@material-ui/core'
import { ArrowBackSharp as BackIcon } from '@material-ui/icons'

import { SinglePost } from '@acter/components/posts/single-post'
import { SidebarProfile } from '@acter/components/user/profile/info/side-bar'
import { Link } from '@acter/components/util/anchor-link'
import { Drawer } from '@acter/components/util/drawer'
import { Post } from '@acter/schema'

interface SinglePostSectionProps {
  post: Post
  redirectUrl: string
}

export const SinglePostSection: FC<SinglePostSectionProps> = ({
  post,
  redirectUrl,
}) => {
  const classes = useStyles()

  const [openDrawer, setDrawerOpen] = useState(false)
  const heading = 'User Profile' as string
  const [mentionActerId, setMentionedActerId] = useState(null)

  const handleDrawerOpen = (mentionActerId: string) => {
    setMentionedActerId(mentionActerId)
    setDrawerOpen(true)
  }

  const handleDrawerClose = () => {
    setDrawerOpen(false)
    setMentionedActerId(null)
  }

  return (
    <>
      <Link href={redirectUrl}>
        <Box className={classes.back}>
          <BackIcon
            fontSize="inherit"
            color="inherit"
            className={classes.icon}
          />{' '}
          <Typography className={classes.backLink}>Back to posts</Typography>
        </Box>
      </Link>
      <Box className={classes.postContainer}>
        {<SinglePost post={post} handleOpenSidePanel={handleDrawerOpen} />}
      </Box>
      {mentionActerId && (
        <Drawer
          heading={heading}
          open={openDrawer}
          handleClose={handleDrawerClose}
        >
          <SidebarProfile acterId={mentionActerId} />
        </Drawer>
      )}
    </>
  )
}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    back: {
      marginTop: theme.spacing(3),
      display: 'flex',
      width: theme.spacing(17),
      marginLeft: theme.spacing(5),
    },
    icon: {
      color: theme.palette.secondary.main,
      fontSize: '1.2rem',
    },
    backLink: {
      fontWeight: theme.typography.fontWeightMedium,
      fontSize: '0.9rem',
      color: theme.palette.secondary.main,
      marginLeft: theme.spacing(0.5),
    },
    postContainer: {
      marginTop: theme.spacing(1.5),
      marginLeft: theme.spacing(5),
    },
  })
)
