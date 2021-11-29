import React, { FC, useState, Dispatch, SetStateAction } from 'react'

import dynamic from 'next/dynamic'

import { Drawer } from '@acter/components/util/drawer'
import { useActer } from '@acter/lib/acter/use-acter'
import { useCreateActivity } from '@acter/lib/activity/use-create-activity'
import { useUser } from '@acter/lib/user/use-user'
import { userHasRoleOnActer } from '@acter/lib/user/user-has-role-on-acter'
import { ActerConnectionRole } from '@acter/schema'

const ActivityForm = dynamic(() =>
  import('@acter/components/activity/form').then((mod) => mod.ActivityForm)
)

interface AddActivityProps {
  openDrawer: boolean
  setDrawer: Dispatch<SetStateAction<boolean>>
}

export const AddActivity: FC<AddActivityProps> = ({
  openDrawer,
  setDrawer,
}) => {
  const [drawerHeading, setDrawerHeading] = useState('')

  const handleClose = () => setDrawer(false)

  const { acter } = useActer()
  const { user } = useUser()
  const [_, createActivity] = useCreateActivity({
    onCompleted: handleClose,
  })

  const canCreateActivity = userHasRoleOnActer(
    user,
    ActerConnectionRole.MEMBER,
    acter
  )

  if (!acter) return null

  if (!canCreateActivity) return null

  return (
    <Drawer heading={drawerHeading} open={openDrawer} handleClose={handleClose}>
      <ActivityForm
        organiserActerId={acter.id}
        setDrawerHeading={setDrawerHeading}
        onSubmit={createActivity}
      />
    </Drawer>
  )
}
