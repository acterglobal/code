import React from 'react'
import { Meta } from '@storybook/react'
import HeaderSection from '../header-section'
import { ExampleActer } from '../../../__fixtures__/acter/example-acter'

export default {
  title: 'landingpage/Header',
  component: HeaderSection,
} as Meta

export const Header: React.FC = () => <HeaderSection acter={ExampleActer} />
