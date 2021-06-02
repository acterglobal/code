import { MutationFunction } from '@apollo/client'
import { useNotificationMutation } from 'src/lib/apollo/use-notification-mutation'
import MUTATE_ACTER_CREATE from 'api/mutations/mutate-create-acter.graphql'
import GET_ACTER from 'api/queries/acter-by-slug.graphql'
import { GROUP } from 'src/constants/acter-types'
import { Acter } from '@schema'

export const useCreateActer = (acter: Acter) => {
  const [createActer] = useNotificationMutation(MUTATE_ACTER_CREATE, {
    update: (cache, { data }) => {
      acter.ActerType.name === GROUP
        ? acter.Parent.Children.push(data.createActer)
        : acter.Children.push(data.createActer)

      cache.writeQuery({
        query: GET_ACTER,
        data: {
          getActer: acter,
        },
      })
    },
    getSuccessMessage: (data) => `${data.createActer.name} group created`,
  })

  const _handleCreateActer = (acter: Acter) =>
    createActer({
      variables: {
        ...acter,
      },
    })

  return [_handleCreateActer]
}
