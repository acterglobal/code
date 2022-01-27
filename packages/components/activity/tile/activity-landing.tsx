import React, { useState, FC } from 'react'

import dynamic from 'next/dynamic'

import { ActerDeleteConfirmDialog as DeleteActivity } from '@acter/components/acter/delete-confirm-dialog'
import { ActivityDetails } from '@acter/components/activity'
import { Drawer } from '@acter/components/util/drawer'
import { useActer } from '@acter/lib/acter/use-acter'
import { useDeleteActer } from '@acter/lib/acter/use-delete-acter'
import { useUpdateActivity } from '@acter/lib/activity/use-update-activity'
import { ActionButton } from '@acter/lib/constants'

const { DELETE, EDIT } = ActionButton

const EditActivity = dynamic(() =>
  import('@acter/components/activity/form').then((mod) => mod.ActivityForm)
)

interface ActivityLandingProps {
  activitySlug: string
  // openDrawer: boolean
  handleCloseDrawer: () => void
}
export const ActivityLanding: FC<ActivityLandingProps> = ({
  activitySlug,
  // openDrawer,
  handleCloseDrawer,
}) => {
  if (!activitySlug) return null

  const [drawerHeading, setDrawerHeading] = useState<string>('')
  const [action, setAction] = useState<ActionButton>(null)

  const handleClose = () => {
    setDrawerHeading('')
    handleCloseDrawer()
  }

  const { acter } = useActer({
    acterTypeName: 'activities',
    slug: activitySlug,
  })
  const [_updateResult, updateActivity] = useUpdateActivity({
    onCompleted: handleClose,
  })
  const [_deleteResult, deleteActivity] = useDeleteActer({
    onCompleted: handleClose,
  })
  if (!acter) return null

  return (
    <Drawer
      acter={acter}
      heading={drawerHeading}
      open={false}
      handleClose={handleClose}
      actionButtons={[EDIT, DELETE]}
      setAction={setAction}
    >
      {action === EDIT ? (
        <EditActivity
          acter={acter}
          onSubmit={updateActivity}
          setDrawerHeading={setDrawerHeading}
        />
      ) : action === DELETE ? (
        <DeleteActivity
          acter={acter}
          onCancel={handleClose}
          onSubmit={() => deleteActivity(acter.id)}
        />
      ) : (
        <ActivityDetails acter={acter} />
      )}
    </Drawer>
  )
}
