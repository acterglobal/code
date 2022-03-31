import { Meta, Story } from '@storybook/react'

import {
  ActerTile,
  ActerTileProps,
} from '@acter/components/acter/organisms/tile'
import {
  withExampleActerParams,
  withExampleInterestParams,
} from '@acter/lib/storybook-helpers'
import { ExampleActerWithInterests } from '@acter/schema/fixtures'

export default {
  title: 'Acter/Organisms/Tile',
  component: ActerTile,
  args: {
    acter: ExampleActerWithInterests,
  },
  parameters: {
    ...withExampleActerParams(),
    urql: () => ({
      data: {
        ...withExampleActerParams().urql().data,
        ...withExampleInterestParams.urql().data,
      },
    }),
  },
} as Meta

export const Tile: Story<ActerTileProps> = (args) => <ActerTile {...args} />
