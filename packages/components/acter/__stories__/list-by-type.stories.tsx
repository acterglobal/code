import { Story, Meta } from '@storybook/react'

import {
  ActerListByType,
  ActerListByTypeProps,
} from '@acter/components/acter/list-by-type'
import { ExampleActerList } from '@acter/schema/fixtures'

export default {
  title: 'Organisms/Acter/ListByType',
  component: ActerListByType,
  args: {
    acters: ExampleActerList,
  },
} as Meta

const Template: Story<ActerListByTypeProps> = (args) => (
  <ActerListByType {...args} />
)

export const List = Template.bind({})
