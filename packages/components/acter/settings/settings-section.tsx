import React, { FC, useState } from 'react'

import { useRouter } from 'next/router'

import { Box, createStyles, makeStyles, Theme } from '@material-ui/core'

import { ActerDeleteConfirmDialog as DeleteActer } from '@acter/components/acter/delete-confirm-dialog'
import { AccessSettings } from '@acter/components/acter/settings/access-settings'
import { ActerDelete } from '@acter/components/acter/settings/delete'
import { VisibilitySettings } from '@acter/components/acter/settings/visibility-settings'
import { Drawer } from '@acter/components/util/drawer'
import { useActer } from '@acter/lib/acter/use-acter'
import { useDeleteActer } from '@acter/lib/acter/use-delete-acter'

export const SettingsSection: FC = () => {
  const classes = useStyles()
  const router = useRouter()
  const [openDrawer, setOpenDrawer] = useState<boolean>(false)
  const [heading, setHeading] = useState('')

  const { acter } = useActer()

  const handleDelete = () => {
    setHeading(`Delete ${acter.name}`)
    setOpenDrawer(true)
  }

  const handleDrawerClose = () => {
    router.push('/dashboard')
    setOpenDrawer(false)
    setHeading('')
  }

  const [_deleteResult, deleteActer] = useDeleteActer({
    onCompleted: handleDrawerClose,
  })

  if (!acter) return null

  return (
    <Box className={classes.settingsSection}>
      <AccessSettings acter={acter} />
      <VisibilitySettings acter={acter} />
      <ActerDelete acter={acter} handleClick={handleDelete} />

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
    </Box>
  )
}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    settingsSection: {
      marginTop: theme.spacing(2),
      padding: theme.spacing(2),
      width: '100%',
    },
  })
)
