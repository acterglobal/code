import { Story, Meta } from '@storybook/react'

import { ActerForm, ActerFormProps } from '@acter/components/acter/form'
import { ExampleActer, Interests } from '@acter/schema/fixtures'
import {
  GroupActerType,
  NetworkActerType,
  UserActerType,
} from '@acter/schema/fixtures'

export default {
  title: 'Organisms/Acter/Form',
  component: ActerForm,
  argTypes: {
    onSubmit: { action: 'form submit' },
  },
  args: {
    acter: ExampleActer,
    interestTypes: Interests.data.interestTypes,
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
