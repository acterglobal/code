import React, { FC } from 'react'
import { useRouter } from 'next/router'
import {
  SettingsContainer,
  SettingsContent,
  SettingsMenu,
  SettingsLinkMenuItem,
} from 'src/components/util/settings-layout'
import { ProfileSettingsPages } from 'src/constants'

export const ProfileFormLayout: FC = ({ children }) => {
  const router = useRouter()
  const { INFO, INTERESTS } = ProfileSettingsPages
  // Get the value after the last /
  const page = router.pathname.match(/\/([^/]*)$/)
  const selectedPage = page?.length ? page[1] : page
  return (
    <SettingsContainer>
      <SettingsMenu>
        <SettingsLinkMenuItem
          href={`/profile/${INFO}`}
          isActive={selectedPage === INFO}
        >
          {ProfileSettingsPages.INFO}
        </SettingsLinkMenuItem>
        <SettingsLinkMenuItem
          href={`/profile/${INTERESTS}`}
          isActive={selectedPage === INTERESTS}
        >
          {ProfileSettingsPages.INTERESTS}
        </SettingsLinkMenuItem>
      </SettingsMenu>
      <SettingsContent>{children}</SettingsContent>
    </SettingsContainer>
  )
}
