import React, { FC } from 'react'

import { Acter } from '@generated/type-graphql'

import { HeaderSection } from 'src/components/dashboard/header-section'
import { MenuSection } from 'src/components/dashboard/menu-section'
import { InfoSection } from 'src/components/dashboard/info-section'

interface ActerViewProps {
  acter: Acter
}

export const ActerView: FC<ActerViewProps> = ({ acter }) => (
  <>
    <HeaderSection acter={acter} />
    <MenuSection />
    <InfoSection acter={acter} />
  </>
)
