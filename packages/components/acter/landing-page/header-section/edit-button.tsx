import React, { FC, useState } from 'react'

import dynamic from 'next/dynamic'

import { IconButton } from '@material-ui/core'
import { Edit as EditIcon } from '@material-ui/icons'

import { Drawer } from '@acter/components/util/drawer'
import { useActer } from '@acter/lib/acter/use-acter'
import { useUpdateActer } from '@acter/lib/acter/use-update-acter'
import { useUser } from '@acter/lib/user/use-user'
import { userHasRoleOnActer } from '@acter/lib/user/user-has-role-on-acter'
import { ActerConnectionRole } from '@acter/schema'

const EditActer = dynamic(() =>
  import('@acter/components/acter/form').then((mod) => mod.ActerForm)
)
export const EditButton: FC = () => {
  const [openDrawer, setOpenDrawer] = useState<boolean>(false)
  const [heading, setHeading] = useState('')
  const { user } = useUser()
  const { acter } = useActer()
  const handleEdit = () => {
    setHeading(`Edit ${acter.name}`)
    setOpenDrawer(true)
  }

  const handleDrawerClose = () => {
    setOpenDrawer(false)
    setHeading('')
  }

  const [_updateResult, updateActer] = useUpdateActer(acter, {
    onCompleted: handleDrawerClose,
  })

  if (!acter || !user) return null

  const isAdmin = userHasRoleOnActer(user, ActerConnectionRole.ADMIN, acter)

  if (!isAdmin) return null

  return (
    <>
      <IconButton onClick={handleEdit}>
        <EditIcon />
      </IconButton>
      <Drawer
        heading={heading}
        open={openDrawer}
        handleClose={handleDrawerClose}
      >
        <EditActer acter={acter} onSubmit={updateActer} />
      </Drawer>
    </>
  )
}
