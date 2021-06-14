import { MutationResult } from '@apollo/client'
import { useNotificationMutation } from 'src/lib/apollo/use-notification-mutation'

import CREATE_LINK from 'api/mutations/link-create.graphql'
import GET_LINKS from 'api/queries/links-by-acter.graphql'
import { Acter, User, Link as LinkType } from '@schema'

export type HandleMethod = (values: unknown) => Promise<void>

/**
 * Custom hook that creates new acter
 * @param acter
 * @returns handle method to create acter
 * @returns mutation results from apollo
 */
export const useCreateLink = (
  acter: Acter,
  user: User,
  displayLinks: LinkType[],
  setDisplayLinks: React.Dispatch<React.SetStateAction<LinkType[]>>
): [HandleMethod, MutationResult] => {
  const [createLink, mutationResult] = useNotificationMutation(CREATE_LINK, {
    update: (cache, { data }) => {
      const { createLink: newLink } = data
      const newDisplayLinks = [...displayLinks, newLink]
      setDisplayLinks(newDisplayLinks)
      cache.writeQuery({
        query: GET_LINKS,
        data: {
          links: newDisplayLinks,
        },
      })
    },
    getSuccessMessage: () => 'Link created',
  })

  const handleLinks = async (values) => {
    {
      values.id
        ? {
            // variables: {
            //   ...values,
            //   linkId: values.id,
            //   acterId: acter.id,
            //   userId: user.id,
            // },
          }
        : createLink({
            variables: {
              ...values,
              acterId: acter.id,
              userId: user.id,
            },
          })
    }
  }

  // const [createActer, mutationResult] = useNotificationMutation(ACTER_CREATE, {
  //   update: (cache, { data }) => {
  //     acter.ActerType.name === GROUP
  //       ? acter.Parent.Children.push(data.createActer)
  //       : acter.Children.push(data.createActer)

  //     cache.writeQuery({
  //       query: GET_ACTER,
  //       data: {
  //         getActer: acter,
  //       },
  //     })
  //   },
  //   getSuccessMessage: (data) => `${data.createActer.name} group created`,
  // })

  // const handleCreateActer = (acter: Acter) =>
  //   createActer({
  //     variables: {
  //       followerIds: [],
  //       ...acter,
  //       interestIds:
  //         acter.ActerInterests?.map(({ Interest: { id } }) => id) || [],
  //     },
  //   })

  return [handleLinks, mutationResult]
}
