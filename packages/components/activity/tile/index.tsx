import React, { FC, useState } from 'react'

import dynamic from 'next/dynamic'

import { Box, makeStyles, createStyles, Theme } from '@material-ui/core'

import { ActerDeleteConfirmDialog } from '@acter/components/acter/delete-confirm-dialog'
import { ActivityDetails } from '@acter/components/activity'
import { ActivityType } from '@acter/components/activity/tile/activity-type'
import { ImageSection } from '@acter/components/activity/tile/image-section'
import { InfoSection } from '@acter/components/activity/tile/info-section'
import { Drawer } from '@acter/components/util/drawer'
import { LoadingSpinner } from '@acter/components/util/loading-spinner'
import { useActer } from '@acter/lib/acter/use-acter'
import { useDeleteActer } from '@acter/lib/acter/use-delete-acter'
import { useUpdateActivity } from '@acter/lib/activity/use-update-activity'
import { ActionButton } from '@acter/lib/constants'
import { Activity } from '@acter/schema'

const { DELETE, EDIT } = ActionButton

const EditActivity = dynamic(() =>
  import('@acter/components/activity/form').then((mod) => mod.ActivityForm)
)
export interface ActivityTileProps {
  activity: Activity
}

export const ActivityTile: FC<ActivityTileProps> = ({ activity }) => {
  if (!activity.id) return null
  const classes = useStyles()
  const [activityActerId, setActivityActerId] = useState(null)
  const [drawerHeading, setDrawerHeading] = useState('')
  const [openDrawer, setOpenDrawer] = useState(false)
  const [action, setAction] = useState<ActionButton>()

  const handleClose = () => {
    setOpenDrawer(false)
    setDrawerHeading('')
  }
  const handleClick = (acterId) => {
    setActivityActerId(acterId)
    setOpenDrawer(true)
    setAction(null)
  }

  const { acter, loading: acterLoading } = useActer({
    acterId: activityActerId,
  })
  const [updateActivity] = useUpdateActivity({ onCompleted: handleClose })
  const [deleteActivity] = useDeleteActer({
    onCompleted: () => handleClose(),
  })

  return (
    <>
      <Box
        className={classes.root}
        onClick={() => handleClick(activity?.Acter.id)}
      >
        <ImageSection activity={activity} />

        <InfoSection activity={activity} />

        <ActivityType activity={activity} />
      </Box>

      <Drawer
        acter={acter}
        heading={drawerHeading}
        open={openDrawer}
        handleClose={handleClose}
        actionButtons={[EDIT, DELETE]}
        setAction={setAction}
      >
        {acterLoading ? (
          <LoadingSpinner />
        ) : action === EDIT ? (
          <EditActivity
            acter={acter}
            onSubmit={updateActivity}
            setDrawerHeading={setDrawerHeading}
          />
        ) : action === DELETE ? (
          <ActerDeleteConfirmDialog
            acter={acter}
            onCancel={handleClose}
            onSubmit={() => deleteActivity(acter.id)}
          />
        ) : (
          <ActivityDetails acter={acter} />
        )}
      </Drawer>
    </>
  )
}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      backgroundColor: 'white',
      borderRadius: theme.spacing(2),
      overflow: 'hidden',
      width: 210,
      height: 218,
      position: 'relative',
      cursor: 'pointer',
    },
  })
)
