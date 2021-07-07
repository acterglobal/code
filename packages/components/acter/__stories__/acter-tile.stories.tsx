import React from 'react'
import { Meta, Story } from '@storybook/react'
import { ActerTile, ActerTileProps } from '@acter/components/acter/tile'
import { ExampleActer } from '@acter/schema/fixtures'

export default {
  title: 'Acter/ActerTile',
  component: ActerTile,
  args: {
    acter: ExampleActer,
  },
} as Meta

export const Tile: Story<ActerTileProps> = (args) => <ActerTile {...args} />
