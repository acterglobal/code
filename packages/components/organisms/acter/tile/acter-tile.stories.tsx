import { Meta, Story } from '@storybook/react'

import {
  ActerTile,
  ActerTileProps,
} from '@acter/components/organisms/acter/tile'
import { withExampleActerParams } from '@acter/lib/storybook-helpers'
import { withExampleInterestParams } from '@acter/lib/storybook-helpers/with-example-interest-params'
import { ExampleActer } from '@acter/schema/fixtures'

export default {
  title: 'Organisms/Acter/Tile',
  component: ActerTile,
  args: {
    acter: ExampleActer,
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
