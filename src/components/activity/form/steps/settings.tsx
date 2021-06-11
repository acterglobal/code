import React, { FC } from 'react'
import { Box } from '@material-ui/core'
import {
  SelectOrganiser,
  SelectOrganiserProps,
  SelectOrganiserValues,
} from 'src/components/activity/form/fields/select-organiser'
import {
  SelectPostToActers,
  SelectPostToActersProps,
  SelectPostToActersValues,
} from 'src/components/activity/form/fields/select-post-to-acters'
import { FormLabel } from 'src/components/styled/form-label'
import { FormSection } from 'src/components/styled/form-section'
import { Acter } from '@schema'

export interface SettingsStepProps
  extends SelectOrganiserProps,
    SelectPostToActersProps {
  acters: Acter[]
}

export type SettingsStepValues = SelectPostToActersValues &
  SelectOrganiserValues

export const SettingsStep: FC<SettingsStepProps> = ({ acters }) => {
  return (
    <Box>
      <FormSection>
        <FormLabel>Host</FormLabel>
        <SelectOrganiser acters={acters} />
      </FormSection>

      <FormSection>
        <FormLabel>Where should this be posted?</FormLabel>
        <SelectPostToActers acters={acters} />
      </FormSection>
    </Box>
  )
}
