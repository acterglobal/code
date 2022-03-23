import React, { FC } from 'react'

import { Box } from '@material-ui/core'

import {
  SelectFollowers,
  SelectFollowersProps,
  SelectFollowersValues,
} from '@acter/components/activity/form/fields/select-followers'
import {
  SelectOrganiser,
  SelectOrganiserProps,
  SelectOrganiserValues,
} from '@acter/components/activity/form/fields/select-organiser'
import { FormLabel } from '@acter/components/styled/form-label'
import { FormSection } from '@acter/components/styled/form-section'
import { useTranslation } from '@acter/lib/i18n/use-translation'
import { capitalize } from '@acter/lib/string/capitalize'

export type SettingsStepProps = SelectOrganiserProps & SelectFollowersProps

export type SettingsStepValues = SelectFollowersValues & SelectOrganiserValues

export const SettingsStep: FC<SettingsStepProps> = ({ acters }) => {
  const { t } = useTranslation('common', { keyPrefix: 'form' })
  return (
    <Box>
      <FormSection>
        <FormLabel>{capitalize(t('host'))}</FormLabel>
        <SelectOrganiser acters={acters} />
      </FormSection>

      <FormSection>
        <FormLabel>{t('postTo')}</FormLabel>
        <SelectFollowers acters={acters} />
      </FormSection>
    </Box>
  )
}
