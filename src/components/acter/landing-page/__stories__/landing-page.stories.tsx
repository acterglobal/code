import React from 'react'
import { Meta } from '@storybook/react'
import { ActerLanding } from 'src/components/acter/landing-page/index'
import { ExampleActer } from 'src/__fixtures__'
import { Acter } from '@generated/type-graphql'

export default {
  title: 'landingpage/LandingPage',
} as Meta

export const LandingPage = () => <ActerLanding acter={ExampleActer} />
