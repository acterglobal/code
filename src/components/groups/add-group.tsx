import React, { FC, useState } from 'react'
import { Modal } from 'src/components/util/modal'
import { Form, Formik, Field } from 'formik'
import { TextField } from 'formik-material-ui'
import {
  Box,
  Button,
  createStyles,
  makeStyles,
  Theme,
  Typography,
  FormGroup,
  FormLabel,
  FormHelperText,
} from '@material-ui/core'
import { Switch } from 'src/components/styled/switch'
import { Acter } from '@schema'
export interface AddGroupProps {
  acter: Acter
  openModal: boolean
  setModal: (open: boolean) => void
}

export const AddGroup: FC<AddGroupProps> = ({ acter, openModal, setModal }) => {
  const classes = useStyles()

  const [switchOn, setSwitchOn] = useState(false)

  const handleSubmit = (data) => {
    const values = { ...data, makePrivate: switchOn }
    console.log('VALUES :', values)
  }
  const handleModalClose = () => setModal(!openModal)

  const initialValues = {
    ...acter,
    name: '',
    description: '',
    parentActerId: acter.id,
    acterTypeId: 'c6742950-60cb-41c5-afe7-d045cb8857f9',
  }

  return (
    <Modal
      open={openModal}
      heading="Create work group"
      handleModalClose={handleModalClose}
    >
      <Box className={classes.content}>
        <Typography className={classes.headerMessage} variant="body2">
          Working groups are where your community can plan, communicate, share
          and organise around a specific topic.
        </Typography>

        <Formik initialValues={initialValues} onSubmit={handleSubmit}>
          <Form>
            <Field
              className={classes.field}
              component={TextField}
              label="Name"
              name="name"
              required={true}
              variant="outlined"
            />
            <Field
              className={classes.field}
              component={TextField}
              label="Description"
              name="description"
              variant="outlined"
              multiline={true}
              rows={5}
            />

            <FormGroup>
              <FormLabel className={classes.label}>Make private</FormLabel>
              <Box className={classes.makePrivate}>
                <FormHelperText className={classes.helperText}>
                  When a group is set to private, new members need to be
                  approved.
                </FormHelperText>
                <Switch
                  name="makePrivate"
                  checked={switchOn}
                  handleSwitchChange={() => setSwitchOn(!switchOn)}
                />
              </Box>
            </FormGroup>

            <Box className={classes.buttonContainer}>
              <Button
                className={classes.button}
                color="primary"
                variant="contained"
                type="submit"
              >
                Create
              </Button>
            </Box>
          </Form>
        </Formik>
      </Box>
    </Modal>
  )
}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    content: {
      width: 500,
      padding: theme.spacing(7),
      display: 'flex',
      flexDirection: 'column',
      alignContent: 'center',
      justifyContent: 'center',
    },
    headerMessage: {
      marginTop: theme.spacing(7),
      marginBottom: theme.spacing(7),
      fontWeight: theme.typography.fontWeightLight,
      fontSize: '0.8rem',
    },
    field: {
      width: '100%',
      marginBottom: theme.spacing(4.5),
    },
    label: {
      fontWeight: theme.typography.fontWeightMedium,
    },
    helperText: {
      width: '70%',
    },
    buttonContainer: {
      width: '100%',
      display: 'flex',
      justifyContent: 'center',
    },
    button: {
      marginTop: theme.spacing(7),
      width: 200,
      color: 'white',
      textTransform: 'capitalize',
    },
    makePrivate: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
    },
  })
)
