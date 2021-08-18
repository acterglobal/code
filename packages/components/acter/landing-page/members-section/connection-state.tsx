import React, { FC, useState, useEffect } from 'react'
import { Box, IconButton, createStyles, withStyles } from '@material-ui/core'
import { Create as EditIcon } from '@material-ui/icons'
import {
  ConnectionStateEditor,
  ConnectionStateEditorProps,
} from '@acter/components/acter/landing-page/members-section/connection-state-editor'
import { ActerConnection } from '@acter/schema'

export interface ConnectionStateProps
  extends Omit<ConnectionStateEditorProps, 'onCancel'> {
  connection: ActerConnection
  canEdit: boolean
}

export const ConnectionState: FC<ConnectionStateProps> = ({
  connection,
  canEdit,
  onSubmit,
}) => {
  const [isEditing, setIsEditing] = useState(false)

  useEffect(() => {
    setIsEditing(false)
  }, [connection])

  if (canEdit && isEditing) {
    return (
      <ConnectionStateEditor
        connection={connection}
        onCancel={() => setIsEditing(false)}
        onSubmit={onSubmit}
      />
    )
  }
  return (
    <Container>
      {connection.role}
      {canEdit && (
        <IconButton onClick={() => setIsEditing(true)}>
          <EditIcon />
        </IconButton>
      )}
    </Container>
  )
}

const Container = withStyles(() =>
  createStyles({
    root: {
      display: 'flex',
      flexDirection: 'row',
      alignItems: 'center',
    },
  })
)(Box)
