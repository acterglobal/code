import { Story, Meta } from '@storybook/react'

import { Tag, TagProps } from 'src/components/interests/tag'

import { ExampleTag } from 'src/__fixtures__'

export default {
  title: 'interests/Tag',
  component: Tag,
  args: {
    interest: ExampleTag,
  },
} as Meta

const Template: Story<TagProps> = (args: TagProps) => (
  <Tag {...args} />
)

export const Default = Template.bind({})
Default.args = {
  selected: false
} as TagProps