import { Meta } from '@storybook/react'
import { ActerForm } from 'src/components/acter/form'

import { OrganizationActerType, Interests } from 'src/__fixtures__'

export default {
  title: 'acter/Wizard',
  component: ActerForm,
} as Meta

export const wizard = () => (
  <ActerForm
    acterType={OrganizationActerType}
    interestTypes={Interests.data.interestTypes}
    onSubmit={() => null}
  />
)
