import { Meta, Story } from '@storybook/react'

import { ActerProfileImage, ActerProfileImageProps } from './index'

import { ExampleActer } from '@acter/schema/fixtures'

export default {
  title: 'Atoms/Acter/Profile Image',
  component: ActerProfileImage,
  args: {
    acter: ExampleActer,
  },
} as Meta<ActerProfileImageProps>

const Template: Story<ActerProfileImageProps> = (args) => (
  <div style={{ width: 100 }}>
    <ActerProfileImage {...args} />
  </div>
)

export const WithPic = Template.bind({})

export const NoPic = Template.bind({})
NoPic.args = {
  acter: {
    ...ExampleActer,
    avatarUrl: null,
  },
}
