import React from 'react'
import { Meta } from '@storybook/react'
import HeaderSection from '../header-section'
import { ExampleActer } from 'src/__fixtures__'
import { Acter } from '@generated/type-graphql'

export default {
  title: 'landingpage/Header',
  component: HeaderSection,
} as Meta

export const Header: React.FC<Acter> = () => (
  <HeaderSection acter={ExampleActer} />
)
