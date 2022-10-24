import React, { FC } from 'react'

import { ProfileIcon, EditIcon, SettingsIcon } from '@acter/components/icons'
import { ProfileMenuItem } from '@acter/components/user/profile/layout/menu/items/item'
import { ProfileSettingsPages } from '@acter/lib/constants'
import { useTranslation } from '@acter/lib/i18n/use-translation'
import { capitalize } from '@acter/lib/string/capitalize'

export const ProfileMenuItems: FC = () => {

  const { t } = useTranslation();

  return (
    <>
      <ProfileMenuItem
        path={ProfileSettingsPages.INFO}
        label={t('profileView')}
        Icon={ProfileIcon}
      />
      <ProfileMenuItem
        path={ProfileSettingsPages.EDIT}
        label={t('profileEdit')}
        Icon={EditIcon}
      />
      <ProfileMenuItem
        path={ProfileSettingsPages.SETTINGS}
        label={capitalize(t('settings'))}
        Icon={SettingsIcon}
      />
    </>
  )
}
