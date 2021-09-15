import React, { FC, useState } from 'react'

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

import { Form, Formik, Field } from 'formik'
import { TextField } from 'formik-material-ui'

import { Switch } from '@acter/components/styled/switch'
import { LoadingSpinner } from '@acter/components/util/loading-spinner'
import { Modal } from '@acter/components/util/modal'
import { getActerTypeByName } from '@acter/lib/acter-types/get-acter-type-by-name'
import { useActerTypes } from '@acter/lib/acter-types/use-acter-types'
import { useCreateSubGroup } from '@acter/lib/acter/use-create-subgroup'
import { useUpdateActer } from '@acter/lib/acter/use-update-acter'
import { ActerTypes } from '@acter/lib/constants/acter-types'
import { Acter, ActerJoinSettings } from '@acter/schema'

export interface GroupFormProps {
  acter?: Acter
  parentActer: Acter
  modalHeading: string
  submitButtonLabel: string
  openModal: boolean
  setModal: (open: boolean) => void
}

export const GroupForm: FC<GroupFormProps> = ({
  acter,
  parentActer,
  modalHeading,
  submitButtonLabel,
  openModal,
  setModal,
}) => {
  const classes = useStyles()
  const { acterTypes, loading } = useActerTypes()

  const joinSetting = acter
    ? acter.acterJoinSetting
    : parentActer.acterJoinSetting
  const setting = joinSetting === ActerJoinSettings.RESTRICTED
  const [isActerJoinRestricted, setIsActerJoinRestricted] = useState(setting)

  const acterType = getActerTypeByName(acterTypes || [], ActerTypes.GROUP)

  const [createGroup] = useCreateSubGroup(parentActer)
  const [updateGroup] = useUpdateActer(acter)

  const initialValues = {
    name: '',
    description: '',
    parentActerId: parentActer.id,
    acterTypeId: acterType?.id,
    ...acter,
  }

  const handleSubmit = (data) => {
    data.acterJoinSetting = isActerJoinRestricted
      ? ActerJoinSettings.RESTRICTED
      : ActerJoinSettings.EVERYONE
    const save = acter?.id ? updateGroup : createGroup
    save({ ...data })
    handleModalClose()
  }
  const handleModalClose = () => setModal(!openModal)
  const handleSwitch = () => setIsActerJoinRestricted(!isActerJoinRestricted)

  if (loading) return <LoadingSpinner />
  if (!acterTypes) return

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
