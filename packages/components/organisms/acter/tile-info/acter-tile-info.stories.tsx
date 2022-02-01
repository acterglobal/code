import { Meta, Story } from '@storybook/react'

import { ActerTileInfo, ActerTileInfoProps } from './index'

import { ExampleActer } from '@acter/schema/fixtures'

export default {
  title: 'Organisms/Acter/Tile/Info',
  component: ActerTileInfo,
  args: {
    acter: ExampleActer,
  },
} as Meta<ActerTileInfoProps>

const Template: Story<ActerTileInfoProps> = (args) => (
  <ActerTileInfo {...args} />
)

export const Default = Template.bind({})
