import { Meta, Story } from '@storybook/react'

import { withExampleActerParams } from '@acter/lib/storybook-helpers'
import { ExampleActer } from '@acter/schema/fixtures'

import { ActerTileInfo, ActerTileInfoProps } from './index'

export default {
  title: 'Organisms/Acter/Tile/Info',
  component: ActerTileInfo,
  args: {
    acter: ExampleActer,
  },
  parameters: withExampleActerParams(),
} as Meta<ActerTileInfoProps>

const Template: Story<ActerTileInfoProps> = (args) => (
  <ActerTileInfo {...args} />
)

export const Default = Template.bind({})
