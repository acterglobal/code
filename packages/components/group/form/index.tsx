import React, { FC, useState } from 'react'
import { Modal } from '@acter/components/util/modal'
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
import { Switch } from '@acter/components/styled/switch'
import { Acter, ActerType, ActerJoinSettings } from '@acter/schema'
import { getActerTypeByName } from '@acter/lib/acter-types/get-acter-type-by-name'
import { ActerTypes } from '@acter/lib/constants/acter-types'

export interface GroupFormProps {
  acter?: Acter
  parentActer: Acter
  acterTypes: ActerType[]
  modalHeading: string
  submitButtonLabel: string
  openModal: boolean
  setModal: (open: boolean) => void
  onGroupSubmit: (groupData: Acter) => void
}

export const GroupForm: FC<GroupFormProps> = ({
  acter,
  parentActer,
  acterTypes,
  modalHeading,
  submitButtonLabel,
  openModal,
  onGroupSubmit,
  setModal,
}) => {
  const classes = useStyles()

  const joinSetting = acter
    ? acter.acterJoinSetting
    : parentActer.acterJoinSetting
  const setting = joinSetting === ActerJoinSettings.RESTRICTED

  const [isActerJoinRestricted, setIsActerJoinRestricted] = useState(setting)

  const acterType = getActerTypeByName(acterTypes, ActerTypes.GROUP)

  const initialValues = {
    name: '',
    description: '',
    parentActerId: parentActer.id,
    acterTypeId: acterType.id,
    ...acter,
  }

  const handleSubmit = (data) => {
    data.acterJoinSetting = isActerJoinRestricted
      ? ActerJoinSettings.RESTRICTED
      : ActerJoinSettings.EVERYONE
    onGroupSubmit({ ...data })
    handleModalClose()
  }
  const handleModalClose = () => setModal(!openModal)
  const handleSwitch = () => setIsActerJoinRestricted(!isActerJoinRestricted)

  return (
    <Modal
      open={openModal}
      heading={modalHeading}
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
                  checked={isActerJoinRestricted}
                  onChange={handleSwitch}
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
                {submitButtonLabel}
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
