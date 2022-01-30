import React, { FC, useState } from 'react'

import dynamic from 'next/dynamic'

import { IconButton } from '@material-ui/core'
import { Edit as EditIcon } from '@material-ui/icons'

import { Drawer } from '@acter/components/util/drawer'
import { useActer } from '@acter/lib/acter/use-acter'
import { useUpdateActer } from '@acter/lib/acter/use-update-acter'
import { useUpdateActivity } from '@acter/lib/activity/use-update-activity'
import { useUser } from '@acter/lib/user/use-user'
import { userHasRoleOnActer } from '@acter/lib/user/user-has-role-on-acter'
import { ActerConnectionRole } from '@acter/schema'

const EditActer = dynamic(() =>
  import('@acter/components/acter/form').then((mod) => mod.ActerForm)
)
const EditActivity = dynamic(() =>
  import('@acter/components/activity/form').then((mod) => mod.ActivityForm)
)

export interface EditButtonProps {
  activitySlug?: string | string[]
}

export const EditButton: FC<EditButtonProps> = ({ activitySlug }) => {
  const [openDrawer, setOpenDrawer] = useState<boolean>(false)
  const [heading, setHeading] = useState('')

  const { user } = useUser()
  const { acter } = useActer(
    activitySlug && {
      acterTypeName: 'activities',
      slug: activitySlug,
    }
  )

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

  const [_updateActivityResult, updateActivity] = useUpdateActivity({
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
        {activitySlug ? (
          <EditActivity
            acter={acter}
            onSubmit={updateActivity}
            setDrawerHeading={setHeading}
          />
        ) : (
          <EditActer acter={acter} onSubmit={updateActer} />
        )}
      </Drawer>
    </>
  )
}
