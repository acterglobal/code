import React, { FC, useState } from 'react'

import { useRouter } from 'next/router'

import { IconButton } from '@material-ui/core'
import { Delete as DeleteIcon } from '@material-ui/icons'

import { ActerDeleteConfirmDialog as DeleteActer } from '@acter/components/acter/delete-confirm-dialog'
import { Drawer } from '@acter/components/util/drawer'
import { acterAsUrl } from '@acter/lib/acter/acter-as-url'
import { useActer } from '@acter/lib/acter/use-acter'
import { useDeleteActer } from '@acter/lib/acter/use-delete-acter'
import { ActerTypes } from '@acter/lib/constants'
import { ActerMenu } from '@acter/lib/constants'
import { useUser } from '@acter/lib/user/use-user'
import { userHasRoleOnActer } from '@acter/lib/user/user-has-role-on-acter'
import { ActerConnectionRole } from '@acter/schema'

const { ACTIVITY } = ActerTypes
const { ACTIVITIES } = ActerMenu

export const DeleteButton: FC = () => {
  const router = useRouter()
  const [openDrawer, setOpenDrawer] = useState<boolean>(false)
  const [redirectUrl, setRedirectUrl] = useState(null)
  const [heading, setHeading] = useState('')

  const { user } = useUser()
  const { acter } = useActer()

  const [_deleteActivityResult, deleteActivity] = useDeleteActer({
    onCompleted: () =>
      router.push(
        acterAsUrl({ acter: acter?.Parent, extraPath: [ACTIVITIES] })
      ),
  })

  const [_deleteActerResult, deleteActer] = useDeleteActer({
    onCompleted: () => router.push(redirectUrl),
  })

  const handleDelete = () => {
    if (acter.ActerType.name === ACTIVITY) {
      setRedirectUrl(
        acterAsUrl({ acter: acter?.Parent, extraPath: [ACTIVITIES] })
      )
      deleteActivity(acter.id)
    }

    setRedirectUrl('/dashboard')
    deleteActer(acter.id)
  }

  const handleDrawerOpen = () => {
    setHeading(`Delete ${acter.name}`)
    setOpenDrawer(true)
  }

  const handleDrawerClose = () => {
    setOpenDrawer(false)
    setHeading('')
  }

  if (!acter || !user) return null

  const isAdmin = userHasRoleOnActer(user, ActerConnectionRole.ADMIN, acter)
  if (!isAdmin) return null

  return (
    <>
      <IconButton onClick={handleDrawerOpen}>
        <DeleteIcon
          style={
            acter.ActerType.name === ACTIVITY ? { color: '#D5D5D5' } : null
          }
        />
      </IconButton>

      <Drawer
        heading={heading}
        open={openDrawer}
        handleClose={handleDrawerClose}
      >
        <DeleteActer
          acter={acter}
          onCancel={handleDrawerClose}
          onSubmit={handleDelete}
        />
      </Drawer>
    </>
  )
}
