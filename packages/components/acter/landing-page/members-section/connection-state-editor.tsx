import React, { FC } from 'react'

import {
  Box,
  IconButton,
  FormControl,
  MenuItem,
  Select,
  createStyles,
  withStyles,
} from '@material-ui/core'
import { Save, Cancel } from '@material-ui/icons'

import { Formik, Form } from 'formik'

import { LoadingSpinner } from '@acter/components/util/loading-spinner'
import { useUpdateActerConnection } from '@acter/lib/acter/use-update-connection'
import { ActerConnection, ActerConnectionRole } from '@acter/schema'

export interface ConnectionStateEditorProps {
  connection: ActerConnection
  onCancel: () => void
}

export const ConnectionStateEditor: FC<ConnectionStateEditorProps> = ({
  connection,
  onCancel,
}) => {
  const [
    updateActerConnection,
    { loading: updatingConnection },
  ] = useUpdateActerConnection()

  const { Follower, role } = connection
  const initialValues = {
    role,
  }
  const handleSubmit = ({ role }) => updateActerConnection(connection, role)

  if (updatingConnection) return <LoadingSpinner />

  return (
    <Formik initialValues={initialValues} onSubmit={handleSubmit}>
      {({ dirty, values, handleChange, handleReset, submitForm }) => {
        const handleCancel = () => {
          handleReset()
          onCancel()
        }
        return (
          <Form>
            <FormControl>
              <Container>
                <Select name="role" value={values.role} onChange={handleChange}>
                  {Object.keys(ActerConnectionRole).map((key) => (
                    <MenuItem
                      key={`acter-${Follower.id}-connection-picker-${key}`}
                      value={key}
                    >
                      {ActerConnectionRole[key]}
                    </MenuItem>
                  ))}
                </Select>
                <IconButton disabled={!dirty} onClick={submitForm}>
                  <Save />
                </IconButton>
                <IconButton onClick={handleCancel}>
                  <Cancel />
                </IconButton>
              </Container>
            </FormControl>
          </Form>
        )
      }}
    </Formik>
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
