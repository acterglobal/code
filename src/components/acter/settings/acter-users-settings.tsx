import React, { FC } from 'react'
import {
  FormControl,
  FormControlLabel,
  FormLabel,
  Radio,
  RadioGroup,
  createStyles,
  makeStyles,
  Theme,
} from '@material-ui/core'
import { Formik, Form } from 'formik'
import { Button, ButtonsContainerRight } from 'src/components/styled'

import { Acter, ActerJoinSettings } from '@schema'

interface ActerUserSettingsInitialValues {
  userJoinSetting: ActerJoinSettings
}

export interface ActerUsersSettingsProps {
  /**
   * The Acter on which we are adjusting users settings
   */
  acter: Acter
  /**
   * Callback for updating Acter users settings
   */
  onSettingsChange: (acter: Acter) => void
  /**
   * Whether we're in the middle of updating
   */
  loading: boolean
}

export const ActerUsersSettings: FC<ActerUsersSettingsProps> = ({
  acter,
  onSettingsChange,
  loading,
}) => {
  const classes = useStyles()
  const initialValues: ActerUserSettingsInitialValues = {
    userJoinSetting: ActerJoinSettings[acter.userJoinSetting],
  }
  return (
    <Formik
      initialValues={initialValues}
      enableReinitialize
      onSubmit={(values) => onSettingsChange({ ...acter, ...values })}
    >
      {({ handleChange, isSubmitting, dirty, resetForm, values }) => (
        <Form>
          <FormControl component="fieldset" fullWidth>
            <FormLabel className={classes.fieldLabel} component="legend">
              Who can join your organisation
            </FormLabel>
            <RadioGroup
              aria-label="member-join-setting"
              name="userJoinSetting"
              value={values.userJoinSetting}
              onChange={handleChange}
            >
              <FormControlLabel
                className={classes.radioLabel}
                value={ActerJoinSettings.EVERYONE}
                control={<Radio />}
                label="Everyone"
                labelPlacement="start"
              />
              <FormControlLabel
                className={classes.radioLabel}
                value={ActerJoinSettings.RESTRICTED}
                control={<Radio />}
                label="Restricted (needs approval)"
                labelPlacement="start"
              />
            </RadioGroup>
          </FormControl>
          {dirty && (
            <ButtonsContainerRight>
              <Button
                variant="outlined"
                color="primary"
                disabled={loading || isSubmitting}
                onClick={() => resetForm()}
              >
                Cancel
              </Button>
              <Button
                variant="contained"
                color="primary"
                style={{ color: 'white' }}
                disabled={loading || isSubmitting}
                type="submit"
              >
                Save
              </Button>
            </ButtonsContainerRight>
          )}
        </Form>
      )}
    </Formik>
  )
}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    fieldLabel: {
      color: theme.palette.grey[600],
    },
    radioLabel: {
      justifyContent: 'space-between',
      color: theme.palette.grey[600],
    },
  })
)
