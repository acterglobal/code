import React, { FC } from 'react'

import { Typography } from '@material-ui/core'
import { Form, FormRenderProps } from 'react-final-form'
import { TextField } from 'mui-rff'
import { Button } from '@material-ui/core'

import { Acter, ActerType } from '@generated/type-graphql'

export interface ActerFormProps {
  acter?: Acter
  acterType: ActerType
  loading?: boolean
  error?: string
  onSubmit: (any) => any
}

export const ActerForm: FC<ActerFormProps> = ({
  acter,
  acterType,
  loading,
  error,
  onSubmit,
}) => {
  return (
    <>
      <Typography variant="h1">New {acterType.name}</Typography>
      <Form onSubmit={onSubmit} initialValues={acter}>
        {({ handleSubmit, values, submitting, pristine }: FormRenderProps) => (
          <>
            <form onSubmit={handleSubmit} noValidate>
              <TextField
                label="Name"
                name="name"
                required={true}
                value={values.name}
              />
              <TextField
                label="About"
                name="description"
                multiline
                rows={4}
                required={false}
                value={values.description}
              />
              <Button
                color="primary"
                type="submit"
                disabled={submitting || pristine}
              >
                Create
              </Button>
            </form>
          </>
        )}
      </Form>
    </>
  )
}
