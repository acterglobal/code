import React from 'react'
import { Meta } from '@storybook/react'
import MenuSection from '../menu-section'

export default {
  title: 'landingpage/Menu',
  component: MenuSection,
} as Meta

export const Menu: React.FC = () => <MenuSection />
