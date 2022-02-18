import React, { FC, useState } from 'react'

import dynamic from 'next/dynamic'
import { useRouter } from 'next/router'

import { Box, IconButton } from '@material-ui/core'
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles'
import { Close as CloseIcon } from '@material-ui/icons'

import { ActerDeleteConfirmDialog as DeleteActivity } from '@acter/components/acter/delete-confirm-dialog'
import { ActivityBreadcrumbs } from '@acter/components/activity/landing-page/header-section/breadcrumbs'
import { MenuOptions } from '@acter/components/activity/landing-page/header-section/menu-options'
import { Drawer } from '@acter/components/util/drawer'
import { acterAsUrl } from '@acter/lib/acter/acter-as-url'
import { useDeleteActer } from '@acter/lib/acter/use-delete-acter'
import { useUpdateActivity } from '@acter/lib/activity/use-update-activity'
import { ActerMenu, ActionButton } from '@acter/lib/constants'
import { useUser } from '@acter/lib/user/use-user'
import { Acter } from '@acter/schema'

const { ACTIVITIES } = ActerMenu
const { EDIT, DELETE } = ActionButton

const EditActivity = dynamic(() =>
  import('@acter/components/activity/form').then((mod) => mod.ActivityForm)
)

export interface TopBarProps {
  acter?: Acter
  handleCloseActivity?: () => void
}

export const TopBar: FC<TopBarProps> = ({ acter, handleCloseActivity }) => {
  const classes = useStyles()
  const router = useRouter()
  const { user } = useUser()
  const [toggleForm, setToggleForm] = useState(false)
  const [action, setAction] = useState<ActionButton>(null)
  const [openDrawer, setOpenDrawer] = useState<boolean>(false)
  const [heading, setHeading] = useState('')

  const handleEdit = () => {
    setOpenDrawer(true)
    setAction(EDIT)
    setToggleForm(!toggleForm)
    setHeading(`Edit ${acter.name}`)
    setOpenDrawer(true)
  }

  const handleDelete = () => {
    setOpenDrawer(true)
    setAction(DELETE)
    setToggleForm(!toggleForm)
    setHeading(`Delete ${acter.name}`)
  }

  const handleDrawerClose = () => {
    setToggleForm(!toggleForm)
    setOpenDrawer(false)
    setHeading('')
  }

  const [_updateActivityResult, updateActivity] = useUpdateActivity({
    onCompleted: handleDrawerClose,
  })

  const [_deleteActivityResult, deleteActivity] = useDeleteActer({
    onCompleted: () =>
      router.push(
        acterAsUrl({ acter: acter?.Parent, extraPath: [ACTIVITIES] })
      ),
  })

  if (toggleForm) {
    return (
      <Drawer
        heading={heading}
        open={openDrawer}
        handleClose={handleDrawerClose}
      >
        {action === EDIT ? (
          <EditActivity
            acter={acter}
            onSubmit={updateActivity}
            setDrawerHeading={setHeading}
          />
        ) : (
          <DeleteActivity
            acter={acter}
            onCancel={handleCloseActivity}
            onSubmit={() => deleteActivity(acter.id)}
          />
        )}
      </Drawer>
    )
  }
  return (
    <Box className={classes.topBar}>
      <Box className={classes.breadCrumbsContainer}>
        <ActivityBreadcrumbs acter={acter} />
      </Box>
      <Box className={classes.actionsContainer}>
        <Box className={classes.actionsSection}>
          {acter?.createdByUserId === user?.id && (
            <MenuOptions onEdit={handleEdit} onDelete={handleDelete} />
          )}

          <IconButton className={classes.icon} onClick={handleCloseActivity}>
            <CloseIcon />
          </IconButton>
        </Box>
      </Box>
    </Box>
  )
}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    topBar: {
      backgroundColor: theme.palette.secondary.main,
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      width: '100%',
    },
    breadCrumbsContainer: {
      marginLeft: theme.spacing(7),
      height: theme.spacing(7),
      padding: 5,
      paddingBottom: 0,
      display: 'flex',
      justifyContent: 'flex-start',
      alignItems: 'center',
      color: theme.palette.secondary.contrastText,
    },
    actionsContainer: {
      height: theme.spacing(7),
      padding: 5,
      paddingBottom: 0,
      display: 'flex',
      justifyContent: 'flex-start',
      alignItems: 'center',
      color: theme.palette.secondary.contrastText,
    },
    actionsSection: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    },
    icon: {
      textTransform: 'none',
      height: 30,
      fontSize: '0.8rem',
      color: theme.palette.secondary.contrastText,
    },
  })
)
