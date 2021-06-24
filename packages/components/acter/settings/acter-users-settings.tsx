import React, { FC } from 'react'
import {
  FormControl,
  FormLabel,
  RadioGroup,
  createStyles,
  makeStyles,
  Theme,
} from '@material-ui/core'
import { Formik, Form } from 'formik'
import { FormButtons, SettingsRadio } from '@acter/components/util/forms'
import { Acter, ActerJoinSettings } from '@schema'

interface ActerUserSettingsInitialValues {
  acterJoinSetting: ActerJoinSettings
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
}) => {
  const classes = useStyles()
  const initialValues: ActerUserSettingsInitialValues = {
    acterJoinSetting: ActerJoinSettings[acter.acterJoinSetting],
  }
  return (
    <Formik
      initialValues={initialValues}
      enableReinitialize
      onSubmit={(values) => onSettingsChange({ ...acter, ...values })}
    >
      {({ handleChange, values }) => (
        <Form>
          <FormControl component="fieldset" fullWidth>
            <FormLabel className={classes.fieldLabel} component="legend">
              Who can join your organisation
            </FormLabel>
            <RadioGroup
              aria-label="member-join-setting"
              name="acterJoinSetting"
              value={values.acterJoinSetting}
              onChange={handleChange}
            >
              <SettingsRadio
                label="Everyone"
                value={ActerJoinSettings.EVERYONE}
              />
              <SettingsRadio
                label="Restricted (needs approval)"
                value={ActerJoinSettings.RESTRICTED}
              />
            </RadioGroup>
          </FormControl>
          <FormButtons align="right" hideUnlessDirty={true} />
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
  })
)
