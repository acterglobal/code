import React, { FC } from 'react'
import { Box } from '@material-ui/core'
import {
  SelectOrganiser,
  SelectOrganiserProps,
  SelectOrganiserValues,
} from 'src/components/activity/form/fields/select-organiser'
import {
  SelectFollowers,
  SelectFollowersProps,
  SelectFollowersValues,
} from 'src/components/activity/form/fields/select-followers'
import { FormLabel } from 'src/components/styled/form-label'
import { FormSection } from 'src/components/styled/form-section'

export type SettingsStepProps = SelectOrganiserProps & SelectFollowersProps

export type SettingsStepValues = SelectFollowersValues & SelectOrganiserValues

export const SettingsStep: FC<SettingsStepProps> = ({ acters }) => {
  return (
    <Box>
      <FormSection>
        <FormLabel>Host</FormLabel>
        <SelectOrganiser acters={acters} />
      </FormSection>

      <FormSection>
        <FormLabel>Where should this be posted?</FormLabel>
        <SelectFollowers acters={acters} />
      </FormSection>
    </Box>
  )
}
