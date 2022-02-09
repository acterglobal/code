import { Meta, Story } from '@storybook/react'

import {
  ActerTile,
  ActerTileProps,
} from '@acter/components/organisms/acter/tile'
import { ExampleActer, Interests } from '@acter/schema/fixtures'

export default {
  title: 'Organisms/Acter/Tile',
  component: ActerTile,
  args: {
    acter: ExampleActer,
  },
  parameters: {
    urql: () => ({ data: { interestTypes: Interests.data.interestTypes } }),
  },
} as Meta

export const Tile: Story<ActerTileProps> = (args) => <ActerTile {...args} />
