import React, { FC, useState } from 'react'

import dynamic from 'next/dynamic'

import { Box, IconButton } from '@material-ui/core'
import { Delete as DeleteIcon, Edit as EditIcon } from '@material-ui/icons'

import { ActerDeleteConfirmDialog as DeleteActer } from '@acter/components/acter/delete-confirm-dialog'
import { Drawer } from '@acter/components/util/drawer'
import { useActer } from '@acter/lib/acter/use-acter'
import { useDeleteActer } from '@acter/lib/acter/use-delete-acter'
import { useUpdateActer } from '@acter/lib/acter/use-update-acter'
import { ActionButton } from '@acter/lib/constants'
import { useUser } from '@acter/lib/user/use-user'
import { userHasRoleOnActer } from '@acter/lib/user/user-has-role-on-acter'
import { ActerConnectionRole } from '@acter/schema'

const EditActer = dynamic(() =>
  import('@acter/components/acter/form').then((mod) => mod.ActerForm)
)

const { EDIT, DELETE } = ActionButton

export const ActionButtons: FC = () => {
  const [openDrawer, setOpenDrawer] = useState<boolean>(false)
  const [heading, setHeading] = useState('')
  const [action, setAction] = useState<ActionButton>(null)

  const { user } = useUser()
  const { acter } = useActer()

  const handleEdit = () => {
    setAction(EDIT)
    setHeading(`Edit ${acter.name}`)
    setOpenDrawer(true)
  }
  const handleDelete = () => {
    setAction(DELETE)
    setHeading(`Delete ${acter.name}`)
    setOpenDrawer(true)
  }

  const handleDrawerClose = () => {
    setOpenDrawer(false)
    setHeading('')
    setAction(null)
  }

  const [_updateResult, updateActer] = useUpdateActer(acter, {
    onCompleted: handleDrawerClose,
  })
  const [_deleteResult, deleteActer] = useDeleteActer({
    onCompleted: handleDrawerClose,
  })

  if (!acter || !user) return null

  const isAdmin = userHasRoleOnActer(user, ActerConnectionRole.ADMIN, acter)
  if (!isAdmin) return null

  return (
    <>
      <Box>
        <IconButton onClick={handleEdit}>
          <EditIcon />
        </IconButton>

        <IconButton onClick={handleDelete}>
          <DeleteIcon />
        </IconButton>
      </Box>

      <Drawer
        heading={heading}
        open={openDrawer}
        handleClose={handleDrawerClose}
      >
        {action === EDIT && <EditActer acter={acter} onSubmit={updateActer} />}

        {action === DELETE && (
          <DeleteActer
            acter={acter}
            onCancel={handleDrawerClose}
            onSubmit={() => deleteActer(acter.id)}
          />
        )}
      </Drawer>
    </>
  )
}
