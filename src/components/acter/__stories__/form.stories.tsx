import { Story, Meta } from '@storybook/react'

import { ActerForm, ActerFormProps } from 'src/components/acter/form'

import { ExampleActer } from 'src/__fixtures__'

import {
  GroupActerType,
  NetworkActerType,
  UserActerType,
} from 'src/__fixtures__'

export default {
  title: 'acter/Form',
  component: ActerForm,
  argTypes: {
    onSubmit: { action: 'form submit' },
  },
  args: {
    acter: ExampleActer,
  },
} as Meta

const Template: Story<ActerFormProps> = (args) => <ActerForm {...args} />

export const NewGroup = Template.bind({})
NewGroup.args = {
  acterType: GroupActerType,
}

export const NewNetwork = Template.bind({})
NewNetwork.args = {
  acterType: NetworkActerType,
}

export const NewOrganisation = Template.bind({})
NewOrganisation.args = {
  acterType: UserActerType,
}
