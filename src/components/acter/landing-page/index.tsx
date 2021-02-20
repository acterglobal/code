import React, { FC } from 'react'

import { Acter } from '@generated/type-graphql'

import { HeaderSection } from 'src/components/acter/landing-page/header-section'
import { MenuSection } from 'src/components/acter/landing-page/menu-section'
import { InfoSection } from 'src/components/acter/landing-page/info-section'

interface ActerViewProps {
  acter: Acter
}

export const ActerLandingPage: FC<ActerViewProps> = ({ acter }) => (
  <>
    <HeaderSection acter={acter} />
    <MenuSection />
    <InfoSection acter={acter} />
  </>
)
