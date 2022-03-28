import { Meta, Story } from '@storybook/react'

import { ResultDisplayType } from '@acter/lib/constants'

import { ShowMapSwitch, ShowMapSwitchProps } from './show-map-switch'

export default {
  title: 'Molecules/Search/Results Display Type Picker',
  component: ShowMapSwitch,
  args: {},
} as Meta<ShowMapSwitchProps>

const Template: Story<ShowMapSwitchProps> = (args) => (
  <ShowMapSwitch {...args} />
)

export const List = Template.bind({})
List.args = {
  resultDisplayType: ResultDisplayType.LIST,
}

export const Map = Template.bind({})
Map.args = {
  resultDisplayType: ResultDisplayType.MAP,
}
