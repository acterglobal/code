import React, { FC, useState } from 'react'

import { Button, createStyles, makeStyles, Theme } from '@material-ui/core'

import { InvitesSection } from '@acter/components/invites'
import { Drawer } from '@acter/components/util/drawer'
import { checkMemberAccess } from '@acter/lib/acter/check-member-access'
import { useActer } from '@acter/lib/acter/use-acter'
import { useUser } from '@acter/lib/user/use-user'

export const AddInviteSection: FC = () => {
  const classes = useStyles()
  const [openDrawer, setOpenDrawer] = useState(false)
  const [drawerHeading, setDrawerHeading] = useState('Invite people')

  const handleOnClick = () => setOpenDrawer(true)
  const handleClose = () => setOpenDrawer(false)

  const { user } = useUser()
  const { acter } = useActer()

  const isMember = checkMemberAccess(user, acter)

  if (!isMember) return null

  return (
    <>
      <Button className={classes.button} onClick={handleOnClick}>
        Invite
      </Button>

      <Drawer
        heading={drawerHeading}
        open={openDrawer}
        handleClose={handleClose}
      >
        <InvitesSection setDrawerHeading={setDrawerHeading} />
      </Drawer>
    </>
  )
}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    button: {
      borderRadius: theme.spacing(3),
      marginRight: theme.spacing(1),
      minWidth: theme.spacing(13),
      height: theme.spacing(3.5),
      color: theme.palette.primary.main,
      border: '1px solid',
      borderColor: theme.palette.primary.main,
      textTransform: 'capitalize',
      fontWeight: theme.typography.fontWeightRegular,
    },
  })
)
