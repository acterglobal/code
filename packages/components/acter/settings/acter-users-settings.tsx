import React, { FC } from 'react'
import { di } from 'react-magnetic-di/macro'

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
import { LoadingSpinner } from '@acter/components/util/loading-spinner'
import { useActer } from '@acter/lib/acter/use-acter'
import { Acter, ActerJoinSettings } from '@acter/schema'

interface ActerUserSettingsInitialValues {
  acterJoinSetting: ActerJoinSettings
}

export interface ActerUsersSettingsProps {
  /**
   * Callback for updating Acter users settings
   */
  onSettingsChange: (acter: Acter) => void
  /**
   * Whether we're in the middle of updating
   */
  fetching: boolean
}

export const ActerUsersSettings: FC<ActerUsersSettingsProps> = ({
  onSettingsChange,
}) => {
  di(useActer)
  const { acter, fetching } = useActer()
  const classes = useStyles()
  if (fetching) return <LoadingSpinner />
  if (!acter) return null

  const initialValues: ActerUserSettingsInitialValues = {
    acterJoinSetting: ActerJoinSettings[acter?.acterJoinSetting],
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
      color: theme.palette.secondary.main,
    },
  })
)
