import { useNotificationMutation } from 'src/lib/apollo/use-notification-mutation'
import UPDATE_ACTER from 'api/mutations/acter-update.graphql'
import GET_ACTER from 'api/queries/acter-by-slug.graphql'
import { Acter } from '@schema'

/**
 * Custom hook that updates acter
 * @param acter
 * @returns handle method to create acter
 */
export const useUpdateActer = (acter: Acter, setActer: any) => {
  const [
    updateActer,
    { loading: acterUpdateLoading },
  ] = useNotificationMutation(UPDATE_ACTER, {
    update: (cache, { data }) => {
      const { updateActer: updatedActer } = data
      setActer(updatedActer)
      cache.writeQuery({
        query: GET_ACTER,
        data: {
          getActer: acter,
        },
      })
    },
    getSuccessMessage: (data) => `${data.updateActer.name} updated`,
    // onCompleted: (data) => {
    //   setActer(data.updateActer)
    // },
  })

  const handleUpdateActer = (acter: Acter) => {
    updateActer({
      variables: {
        ...acter,
        interestIds: acter.ActerInterests.map(({ Interest: { id } }) => id),
        acterId: acter.id,
      },
    })
  }

  return { acterUpdateLoading, handleUpdateActer }
}
