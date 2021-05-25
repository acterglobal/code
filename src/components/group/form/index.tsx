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
import { Acter, ActerType, ActerJoinSettings } from '@schema'
import { getActerTypeByName } from 'src/lib/acter-types/get-acter-type-by-name'
import { GROUP } from 'src/constants/acter-types'

export interface AddGroupProps {
  parentActer: Acter
  acterTypes: ActerType[]
  openModal: boolean
  setModal: (open: boolean) => void
  onCreateGroup: (gropuData: Acter) => void
}

export const AddGroup: FC<AddGroupProps> = ({
  parentActer,
  acterTypes,
  openModal,
  onCreateGroup,
  setModal,
}) => {
  const classes = useStyles()
  const [switchOn, setSwitchOn] = useState(
    parentActer.userJoinSetting === ActerJoinSettings.RESTRICTED ? true : false
  )
  const acterType = getActerTypeByName(acterTypes, GROUP)

  const initialValues = {
    name: '',
    description: '',
    parentActerId: parentActer.id,
    acterTypeId: acterType.id,
  }

  const handleSubmit = (data) => {
    data.userJoinSetting = switchOn
      ? ActerJoinSettings.RESTRICTED
      : ActerJoinSettings.EVERYONE
    console.log('ACTER', data)
    onCreateGroup(data)
  }
  const handleModalClose = () => setModal(!openModal)

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
