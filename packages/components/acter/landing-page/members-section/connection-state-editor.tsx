import React, { FC } from 'react'
import { Formik, Form } from 'formik'
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
import { ActerConnection, ActerConnectionRole } from '@schema'

export interface ConnectionStateEditorProps {
  connection: ActerConnection
  onSubmit: (
    connection: ActerConnection,
    role: ActerConnectionRole
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
  ) => Promise<any> // ApolloGraphQL mutation function
  onCancel: () => void
}

export const ConnectionStateEditor: FC<ConnectionStateEditorProps> = ({
  connection,
  onCancel,
  onSubmit,
}) => {
  const { Follower, role } = connection
  const initialValues = {
    role,
  }
  const handleSubmit = ({ role }) => onSubmit(connection, role)
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
