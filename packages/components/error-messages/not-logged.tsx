import React, { FC } from 'react'
import { Trans } from 'react-i18next'

import { Typography } from '@material-ui/core'

import { Link } from '@acter/components/util/anchor-link'
import { useTranslation } from '@acter/lib/i18n/use-translation'
import { useAuthRedirect } from '@acter/lib/url/use-auth-redirect'

type NotLoggedInMessageProps = {
  loginRedirectPath: string
}

export const NotLoggedInMessage: FC<NotLoggedInMessageProps> = ({
  loginRedirectPath,
}) => {
  const { t } = useTranslation()
  const { loginUrl, signupUrl } = useAuthRedirect(loginRedirectPath)

  return (
    <Typography variant="body2" style={{ textAlign: 'center', paddingTop: 40 }}>
      <Trans i18nKey="error-messages:401.notLogged">
        Oops, looks like you are not logged in. Please{' '}
        <Link href={loginUrl} isExternal>
          {{ login: t('login') }}
        </Link>
        /
        <Link href={signupUrl} isExternal>
          {{ signup: t('signup') }}
        </Link>
        and you will arrive at your dashboard.
      </Trans>
    </Typography>
  )
}
