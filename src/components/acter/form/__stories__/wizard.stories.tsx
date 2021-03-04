import { Meta, Story } from '@storybook/react'
import { ActerForm, ActerFormProps } from 'src/components/acter/form'

import { OrganisationActerType, Interests } from 'src/__fixtures__'

export default {
  title: 'acter/AddActer',
  component: ActerForm,
  args: {
    acterType: OrganisationActerType,
    interestTypes: Interests.data.interestTypes,
    onSubmit: () => null,
  },
} as Meta

export const AddActer: Story<ActerFormProps> = (args) => <ActerForm {...args} />
