import React, { FC } from 'react'
import { Trans } from 'react-i18next'

import { Typography } from '@material-ui/core'

import { Link } from '@acter/components/util/anchor-link'
import { useTranslation } from '@acter/lib/i18n/use-translation'

export const NotAuthorizedMessage: FC = () => {
  const { t } = useTranslation('error-messages')

  return (
    <Typography variant="body2" style={{ textAlign: 'center', paddingTop: 40 }}>
      <Trans i18nKey="error-messages:403.notAuthorized">
        Oops, looks like you are not authorized to view this page. Please{' '}
        <Link href={'/dashboard'}>{{ clickHere: t('clickHere') }}</Link> and you
        will arrive at your dashboard.
      </Trans>
    </Typography>
  )
}
