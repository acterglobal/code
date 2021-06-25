import { Story, Meta } from '@storybook/react'

import { ExampleActerList } from '@acter/schema/fixtures'

import {
  ActerListByType,
  ActerListByTypeProps,
} from '@acter/components/acter/list-by-type'

export default {
  title: 'acter/ListByType',
  component: ActerListByType,
  args: {
    acters: ExampleActerList,
  },
} as Meta

const Template: Story<ActerListByTypeProps> = (args) => (
  <ActerListByType {...args} />
)

export const List = Template.bind({})
