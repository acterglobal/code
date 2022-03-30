import React, { FC } from 'react'

import { Typography } from '@material-ui/core'

import { useTranslation } from '@acter/lib/i18n/use-translation'

export const SearchZeroResultsMessage: FC = () => {
  const { t } = useTranslation('search')
  return (
    <Typography variant="body2" aria-label="zero-results">
      {t('zeroResults')}
    </Typography>
  )
}
