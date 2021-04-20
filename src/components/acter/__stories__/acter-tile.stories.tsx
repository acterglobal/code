import React from 'react'
import { Meta, Story } from '@storybook/react'
import {
  ActerTile as ActerTileComponent,
  ActerTileProps,
} from 'src/components/acter/tile'
import { ExampleActer } from 'src/__fixtures__'

export default {
  title: 'search/ActerTile',
  component: ActerTileComponent,
  args: {
    acter: ExampleActer,
  },
} as Meta

export const ActerTile: Story<ActerTileProps> = (args) => (
  <ActerTileComponent {...args} />
)
