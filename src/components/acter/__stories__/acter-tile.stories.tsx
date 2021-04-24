import React from 'react'
import { Meta, Story } from '@storybook/react'
import { ActerTile, ActerTileProps } from 'src/components/acter/tile'
import { ExampleActer } from 'src/__fixtures__'
import { Acter } from '@schema'

export default {
  title: 'Acter/ActerTile',
  component: ActerTile,
  args: {
    acter: ExampleActer,
  },
} as Meta

const Template: Story<ActerTileProps> = (args) => <ActerTile {...args} />

export const Tile = Template.bind({})
Tile.args = {
  acter: {
    ...ExampleActer,
  } as Acter,
}
