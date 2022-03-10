import React, { FC, useState } from 'react'

import { useRouter } from 'next/router'

import { Box, Theme } from '@mui/material';

import createStyles from '@mui/styles/createStyles';
import makeStyles from '@mui/styles/makeStyles';

import { ActerDeleteConfirmDialog as DeleteActer } from '@acter/components/acter/delete-confirm-dialog'
import { AccessSettings } from '@acter/components/acter/settings/access-settings'
import { VisibilitySettings } from '@acter/components/acter/settings/visibility-settings'
import { GroupDelete } from '@acter/components/group/delete'
import { acterAsUrl } from '@acter/lib/acter/acter-as-url'
import { useActer } from '@acter/lib/acter/use-acter'
import { useDeleteActer } from '@acter/lib/acter/use-delete-acter'

export const Settings: FC = () => {
  const classes = useStyles()
  const router = useRouter()
  const [redirectUrl, setRedirectUrl] = useState(null)
  const [showDeleteConfirmDialogue, setShowDeleteConfirmDialogue] = useState(
    false
  )
  const { acter } = useActer()
  const [_deleteResult, deleteActer] = useDeleteActer({
    onCompleted: () => router.push(redirectUrl),
  })

  if (!acter) return null

  const handleClick = () => setShowDeleteConfirmDialogue(true)
  const handleCancel = () => setShowDeleteConfirmDialogue(false)
  const handleDelete = () => {
    setRedirectUrl(acterAsUrl({ acter: acter?.Parent }))
    deleteActer(acter?.id)
  }

  return (
    <Box className={classes.container}>
      {showDeleteConfirmDialogue ? (
        <DeleteActer
          acter={acter}
          onCancel={handleCancel}
          onSubmit={handleDelete}
        />
      ) : (
        <>
          <AccessSettings acter={acter} />
          <VisibilitySettings acter={acter} />
          <GroupDelete handleClick={handleClick} />
        </>
      )}
    </Box>
  )
}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    container: {
      marginTop: theme.spacing(2),
      padding: theme.spacing(2),
      width: '100%',
    },
  })
)
