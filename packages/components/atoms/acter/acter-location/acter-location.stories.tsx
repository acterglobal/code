import { Meta, Story } from '@storybook/react'

import {
  ActerLocation,
  ActerLocationProps,
} from '@acter/components/atoms/acter/acter-location'
import { ExampleActer } from '@acter/lib/fixtures'

export default {
  title: 'Atoms/Acter/ActerLocation',
  component: ActerLocation,
  args: {},
} as Meta

const Template: Story<ActerLocationProps> = (args) => (
  <ActerLocation {...args} />
)

export const Plain = Template.bind({})
Plain.args = {
  acter: ExampleActer,
}

export const Link = Template.bind({})
Link.args = {
  acter: {
    ...ExampleActer,
    placeId: 'ChIJi3iXU7FMTEYRr6IukdnXTYw',
  },
}
