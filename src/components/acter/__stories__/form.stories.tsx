import { Acter } from '@prisma/client'
import { Story, Meta } from '@storybook/react'

import { ActerForm, ActerFormProps } from 'src/components/acter/form'

import {
  ExampleGroupType,
  ExampleNetworkType,
  ExampleOrganizationType,
} from 'src/__fixtures__'

export default {
  title: 'acter/Form',
  component: ActerForm,
  argTypes: {
    onSubmit: { action: 'form submit' },
  },
} as Meta

const Template: Story<ActerFormProps> = (args) => <ActerForm {...args} />

export const NewGroup = Template.bind({})
NewGroup.args = {
  acterType: ExampleGroupType,
}

export const NewNetwork = Template.bind({})
NewNetwork.args = {
  acterType: ExampleNetworkType,
}

export const NewOrganization = Template.bind({})
NewOrganization.args = {
  acterType: ExampleOrganizationType,
}
