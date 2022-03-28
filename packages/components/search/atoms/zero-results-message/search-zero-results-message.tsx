import React, { FC } from 'react'

import { Typography } from '@material-ui/core'

<<<<<<< HEAD
import { useTranslation } from '@acter/lib/i18n/use-translation'

export const SearchZeroResultsMessage: FC = () => {
  const { t } = useTranslation('search')
  return (
    <Typography variant="body2" aria-label="zero-acters">
      {t('zeroResults')}
    </Typography>
  )
}
=======
export const SearchZeroResultsMessage: FC = () => (
  <Typography variant="body2" aria-label="zero-results">
    Your search did not return any results. Try removing search terms and/or
    filters to see more.
  </Typography>
)
>>>>>>> 722ed1e8 (Search atomic file refactoring)
