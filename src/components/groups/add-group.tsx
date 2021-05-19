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
  Switch,
  withStyles,
} from '@material-ui/core'

export interface AddGroupProps {
  openModal: boolean
  setModal: (open: boolean) => void
}

export const AddGroup: FC<AddGroupProps> = ({ openModal, setModal }) => {
  const classes = useStyles()

  const [switchOn, setSwitchOn] = useState(false)

  const handleSubmit = (data) => {
    const values = { ...data, makePrivate: switchOn }
    console.log('VALUES :', values)
  }

  const initialValues = {
    name: '',
    description: '',
  }

  return (
    <Modal
      openModal={openModal}
      heading="Create work group"
      handleModalClose={() => setModal(!openModal)}
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
                <AntSwitch
                  checked={switchOn}
                  onChange={() => setSwitchOn(!switchOn)}
                  name="makePrivate"
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

const AntSwitch = withStyles((theme: Theme) =>
  createStyles({
    root: {
      width: 48,
      height: 22,
      padding: 0,
      display: 'flex',
    },
    switchBase: {
      padding: 2.5,
      color: theme.palette.grey[500],
      '&$checked': {
        transform: 'translateX(24px)',
        color: theme.palette.common.white,
        '& + $track': {
          opacity: 1,
          backgroundColor: theme.palette.primary.main,
          borderColor: theme.palette.primary.main,
        },
      },
    },
    thumb: {
      width: 18,
      height: 18,
      boxShadow: 'none',
    },
    track: {
      border: `1px solid ${theme.palette.grey[500]}`,
      borderRadius: 26 / 2,
      opacity: 1,
      backgroundColor: theme.palette.common.white,
    },
    checked: {},
  })
)(Switch)
