import React from 'react'
import { Meta } from '@storybook/react'
import HeaderSection from '../hader-section'

export default {
  title: 'landingpage/Header',
  component: HeaderSection,
} as Meta

export const Header: React.FC = () => <HeaderSection />
