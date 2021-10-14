import React, { FC, useState } from 'react'

import dynamic from 'next/dynamic'

import { Box, IconButton } from '@material-ui/core'
import { Delete as DeleteIcon, Edit as EditIcon } from '@material-ui/icons'

import { ActerDeleteConfirmDialog as DeleteActer } from '@acter/components/acter/delete-confirm-dialog'
import { Drawer } from '@acter/components/util/drawer'
import { useDeleteActer } from '@acter/lib/acter/use-delete-acter'
import { useUpdateActer } from '@acter/lib/acter/use-update-acter'
import { ActerTypes, ActionButton } from '@acter/lib/constants'
import { Acter } from '@acter/schema'

const EditActer = dynamic(() =>
  import('@acter/components/acter/form').then((mod) => mod.ActerForm)
)
const EditGroup = dynamic(() =>
  import('@acter/components/group/form').then((mod) => mod.GroupForm)
)

const { EDIT, DELETE } = ActionButton

interface ActionButtonsProps {
  acter: Acter
}

export const ActionButtons: FC<ActionButtonsProps> = ({ acter }) => {
  const [openDrawer, setOpenDrawer] = useState<boolean>(false)
  const [heading, setHeading] = useState('')
  const [action, setAction] = useState<ActionButton>(null)

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

  const [updateActer] = useUpdateActer(acter, {
    onCompleted: handleDrawerClose,
  })
  const [deleteActer] = useDeleteActer({ onCompleted: handleDrawerClose })

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
        {action === EDIT &&
          (acter.ActerType.name === ActerTypes.GROUP ? (
            <EditGroup
              acter={acter}
              parentActer={acter.Parent}
              onSubmit={updateActer}
            />
          ) : (
            <EditActer acter={acter} onSubmit={updateActer} />
          ))}

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
