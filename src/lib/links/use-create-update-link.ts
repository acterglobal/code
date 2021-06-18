import { useState } from 'react'
import { MutationResult } from '@apollo/client'
import { useNotificationMutation } from 'src/lib/apollo/use-notification-mutation'
import CREATE_LINK from 'api/mutations/link-create.graphql'
import UPDATE_LINK from 'api/mutations/link-update.graphql'
import GET_LINKS from 'api/queries/links-by-acter.graphql'
import { Acter, User, Link as LinkType } from '@schema'

export type HandleMethod = (values: unknown) => Promise<void>

/**
 * Custom hook that creates and updates new link
 * @param link
 * @returns handle method to create and update link
 * @returns mutation results from apollo
 */
export const useCreateUpdateLink = (
  acter: Acter,
  user: User,
  displayLinks: LinkType[],
  onComplete: (links: LinkType[]) => void
): [HandleMethod, MutationResult] => {
  const [isUpdate, setIsUpdate] = useState(false)

  const createNewDisplayLinks = (
    newLink: LinkType,
    displayLinks: LinkType[]
  ) => {
    if (isUpdate) {
      // console.log('Newlink updating', newLink)
      const newDisplayLinks = displayLinks.map((link) => {
        if (link.id === newLink.id) {
          return newLink
        }
        return link
      })
      return newDisplayLinks
    } else {
      const newDisplayLinks = [...displayLinks, newLink]
      return newDisplayLinks
    }
  }

  if (isUpdate) {
    const [saveLink, mutationResult] = useNotificationMutation(UPDATE_LINK, {
      update: (cache, { data }) => {
        const { updateLink: newLink } = data

        const newDisplayLinks = createNewDisplayLinks(newLink, displayLinks)

        onComplete(newDisplayLinks)

        cache.writeQuery({
          query: GET_LINKS,
          data: {
            links: newDisplayLinks,
          },
        })
      },
      getSuccessMessage: () => 'Link updated',
    })
  } else {
    const [saveLink, mutationResult] = useNotificationMutation(CREATE_LINK, {
      update: (cache, { data }) => {
        const { createLink: newLink } = data

        const newDisplayLinks = createNewDisplayLinks(newLink, displayLinks)

        onComplete(newDisplayLinks)

        cache.writeQuery({
          query: GET_LINKS,
          data: {
            links: newDisplayLinks,
          },
        })
      },
      getSuccessMessage: () => 'Link created',
    })
  }

  const handleLink = async (values) => {
    // const { id: linkId, ...restValues } = values
    // console.log('Valiues are ', values)
    setIsUpdate(values.id ? true : false)
    saveLink({
      variables: {
        ...values,
        acterId: acter.id,
        userId: user.id,
      },
    })

    // {
    //   values.id
    //     ? updateLink({
    //         variables: {
    //           ...values,
    //           linkId: values.id,
    //           acterId: acter.id,
    //           userId: user.id,
    //         },
    //       })
    //     : createLink({
    //         variables: {
    //           ...values,
    //           acterId: acter.id,
    //           userId: user.id,
    //         },
    //       })
    // }
  }
  return [handleLink, mutationResult]
}
