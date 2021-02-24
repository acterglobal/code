import React, { FC } from 'react'
import { Typography } from '@material-ui/core'
import { Form, FormRenderProps } from 'react-final-form'
import { TextField } from 'mui-rff'
import { Button, Box } from '@material-ui/core'
import { makeStyles, Theme } from '@material-ui/core/styles'
import { Acter, ActerType } from '@generated/type-graphql'

const useStyles = makeStyles((theme: Theme) => ({
  container: {
    width: 500,
    // backgroundColor: 'wheat',
    border: '1px solid gray',
    padding: 20,
  },
  heading: {
    padding: 15,
    // color: '#4caf50',
    textAlign: 'center',
    color: theme.palette.primary.main,
  },
  textinput: {
    fontSize: '0.5rem',
    marginBottom: 20,
    color: theme.palette.secondary.light,
  },
  button: {
    borderRadius: 50,
    // color: 'white',
    // marginLeft: 50,
    textTransform: 'none',
    width: 200,
  },
  btnsContainer: {
    // backgroundColor: 'red',
    display: 'flex',
    justifyContent: 'space-evenly',
  },
  inputColor: {
    // color: 'green',
    fontSize: '0.9rem',
    color: theme.palette.primary.main,
  },
}))

export interface ActerFormProps {
  acter?: Acter
  acterType: ActerType
  loading?: boolean
  error?: string
  onSubmit: (any) => void
}

export const ActerForm: FC<ActerFormProps> = ({
  acter,
  acterType,
  onSubmit,
}) => {
  const classes = useStyles()
  return (
    <Box className={classes.container}>
      <Box className={classes.heading}>
        <Typography variant="h5">Create {acterType.name}</Typography>
      </Box>
      <Form onSubmit={onSubmit} initialValues={acter}>
        {({ handleSubmit, values, submitting, pristine }: FormRenderProps) => (
          <>
            <form onSubmit={handleSubmit} noValidate>
              <TextField
                className={classes.textinput}
                InputProps={{ classes: { input: classes.inputColor } }}
                label="Name"
                name="name"
                required={true}
                value={values.name}
                // size="small"
              />
              <TextField
                className={classes.textinput}
                InputProps={{ classes: { input: classes.inputColor } }}
                label="About"
                name="description"
                multiline
                rows={4}
                required={false}
                value={values.description}
              />
              <TextField
                className={classes.textinput}
                InputProps={{ classes: { input: classes.inputColor } }}
                label="Location"
                name="location"
                required={true}
                value={values.location}
              />
              <TextField
                className={classes.textinput}
                InputProps={{ classes: { input: classes.inputColor } }}
                label="Website link"
                name="url"
                value={values.url}
              />
              <Box className={classes.btnsContainer}>
                <Button
                  style={{ textTransform: 'none' }}
                  variant="outlined"
                  color="primary"
                  type="submit"
                  // disabled={submitting || pristine}
                  className={classes.button}
                >
                  Back
                </Button>
                <Button
                  className={classes.button}
                  style={{ color: 'white' }}
                  variant="contained"
                  color="primary"
                  type="submit"
                  disabled={submitting || pristine}
                >
                  Continue
                </Button>
              </Box>
            </form>
          </>
        )}
      </Form>
    </Box>
  )
}
