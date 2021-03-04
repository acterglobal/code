import { ActerType } from '@generated/type-graphql'

import { OrganisationActerType, NetworkActerType } from 'src/__fixtures__'

const userActerTypeId = 'f20c5f9f-7d99-4e6b-a032-39a276451af2'
export const UserActerType: ActerType = {
  id: userActerTypeId,
  name: 'User',
  ActerTypeRules: [
    {
      id: 'b93d740c-6cde-44c6-ad84-27b260dc5a1a',
      subjectActerTypeId: userActerTypeId,
      objectActerTypeId: userActerTypeId,
      canCreate: false,
      canBecome: false,
      canJoin: false,
    },
    {
      id: '7caf95ed-f814-4ff6-a3e5-6dc89da5fe48',
      subjectActerTypeId: userActerTypeId,
      objectActerTypeId: OrganisationActerType.id,
      canCreate: true,
      canBecome: false,
      canJoin: false,
    },
    {
      id: '6a790d32-ea6c-4acc-88d0-d57ed15bfff1',
      subjectActerTypeId: userActerTypeId,
      objectActerTypeId: NetworkActerType.id,
      canCreate: true,
      canBecome: false,
      canJoin: false,
    },
  ],
}
