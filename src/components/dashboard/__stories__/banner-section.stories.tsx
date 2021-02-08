import React from 'react'
import { Story, Meta } from '@storybook/react'
import BannerSection, { BannerSectionProps } from '../banner-section'
import { TopBar } from '../../layout/top-bar'

export default {
  title: 'dashboard/Banner',
  component: BannerSection,
} as Meta

// export const Banner: React.VFC = () => <BannerSection />
export const Dashboard: React.FC = () => (
  <>
    <TopBar />
    <BannerSection />
  </>
)
