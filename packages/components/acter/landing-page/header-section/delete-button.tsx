import React, { FC, useState } from 'react'

import { IconButton } from '@material-ui/core'
import { Delete as DeleteIcon } from '@material-ui/icons'

import { ActerDeleteConfirmDialog as DeleteActer } from '@acter/components/acter/delete-confirm-dialog'
import { Drawer } from '@acter/components/util/drawer'
import { useActer } from '@acter/lib/acter/use-acter'
import { useDeleteActer } from '@acter/lib/acter/use-delete-acter'
import { useUser } from '@acter/lib/user/use-user'
import { userHasRoleOnActer } from '@acter/lib/user/user-has-role-on-acter'
import { ActerConnectionRole } from '@acter/schema'

export const DeleteButton: FC = () => {
  const [openDrawer, setOpenDrawer] = useState<boolean>(false)
  const [heading, setHeading] = useState('')

  const { user } = useUser()
  const { acter } = useActer()

  const handleDelete = () => {
    setHeading(`Delete ${acter.name}`)
    setOpenDrawer(true)
  }

  const handleDrawerClose = () => {
    setOpenDrawer(false)
    setHeading('')
  }

  const [_deleteResult, deleteActer] = useDeleteActer({
    onCompleted: handleDrawerClose,
  })

  if (!acter || !user) return null

  const isAdmin = userHasRoleOnActer(user, ActerConnectionRole.ADMIN, acter)
  if (!isAdmin) return null

  return (
    <>
      <IconButton onClick={handleDelete}>
        <DeleteIcon />
      </IconButton>

      <Drawer
        heading={heading}
        open={openDrawer}
        handleClose={handleDrawerClose}
      >
        <DeleteActer
          acter={acter}
          onCancel={handleDrawerClose}
          onSubmit={() => deleteActer(acter.id)}
        />
      </Drawer>
    </>
  )
}
