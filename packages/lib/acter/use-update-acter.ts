import { MutationResult } from '@apollo/client'
import {
  useNotificationMutation,
  UseMutationOptions,
} from '@acter/lib/apollo/use-notification-mutation'
import UPDATE_ACTER from '@acter/schema/mutations/acter-update.graphql'
import GET_ACTER from '@acter/schema/queries/acter-by-slug.graphql'
import { Acter } from '@acter/schema/types'
import { ActerVariables, HandleMethod } from '@acter/lib/acter/use-create-acter'
import { uploadImage, FileDescription } from '@acter/lib/images/upload-image'
import md5 from 'md5'
import { pipe, andThen } from 'ramda'

export type UpdateActerData = {
  updateActer: Acter
}

// export type ActerFormData = Partial<Acter> & {
//   acterId: string

//   avatar: FileDescription
//   banner: FileDescription
// }

export type ActerPictureType = 'avatar' | 'banner'

type UpdateActerOptions = UseMutationOptions<UpdateActerData, ActerVariables>

/**
 * Custom hook that updates acter
 * @param acter
 * @returns handle method to update acter
 * @returns mutation results from apollo
 */
export const useUpdateActer = (
  acter: Acter,
  options?: UpdateActerOptions
): [HandleMethod<UpdateActerData>, MutationResult] => {
  const [updateActer, mutationResult] = useNotificationMutation<
    UpdateActerData,
    ActerVariables
  >(UPDATE_ACTER, {
    ...options,
    update: (cache, result) => {
      if (typeof options?.update === 'function') {
        const { update, ...restOptions } = options
        update(cache, result, restOptions)
      }
      const {
        data: { updateActer },
      } = result

      console.log('This is mutation function ', updateActer)
      cache.writeQuery({
        query: GET_ACTER,
        data: {
          getActer: updateActer,
        },
      })
    },
    getSuccessMessage: (data: UpdateActerData) =>
      `${data.updateActer.name} updated`,
  })

  const updateActerWithPictures = async (
    { acter, formData = {}, updateActer } //eslint-disable-next-line @typescript-eslint/no-explicit-any
  ): Promise<any> => {
    const variables = {
      // Start with blanks fromt he update set
      // ...initialValues,
      // Load existing Acter data
      ...acter,
      // Overwrite with form values
      ...formData,
      // Explicitly set acterId
      acterId: acter.id,
    }

    // return await pipe(
    //   _updatePictures,
    //   andThen(_updateActer(variables))
    // )(variables)

    const resPics = await _updatePictures(variables)
    console.log('This is acter', acter)
    return updateActer({
      variables: {
        ...resPics,
        followerIds: [],
        interestIds: acter.interestIds
          ? acter.interestIds
          : acter.ActerInterests.map(({ Interest: { id } }) => id),
        acterId: acter.id,
      },
    })
  }

  // const _updateActer = (
  //   formData: ActerVariables
  // ) => (): // variables: ActerFormData
  // //eslint-disable-next-line @typescript-eslint/no-explicit-any
  // Promise<any> => {
  //   console.log('This is formdata ', formData)
  //   return updateActer({
  //     variables: {
  //       // followerIds: [],
  //       // ...acter,
  //       ...formData,
  //       // interestIds: formData.interestIds
  //       //   ? formData.interestIds
  //       //   : acter.ActerInterests.map(({ Interest: { id } }) => id),
  //       // acterId: acter.id,
  //     },
  //   })
  // }

  const handleUpdateActer = async (formData: ActerVariables) => {
    await updateActerWithPictures({
      acter,
      formData,
      updateActer, //  This needs to be a promise?
    })
  }

  return [handleUpdateActer, mutationResult]
}

/**
 * Sets avatar and banner images on ActerData
 * @param data The Acter data on which we're operating
 * @returns ActerData with avatar and banner images set, if available
 */
export const _updatePictures = async (
  data: ActerVariables
): Promise<ActerVariables> => {
  // console.log('This is update pictures data', data)
  const folder = `acter/${md5(data.id)}`
  const dataWithPics = (await ['avatar', 'banner'].reduce<
    Promise<ActerVariables>
  >(_updatePicture(folder), Promise.resolve(data))) as ActerVariables
  // console.log('This is data with pictures', dataWithPics)
  return await {
    // ...data,
    ...dataWithPics,
  }
}

/**
 * Creates a reducer function to be used for setting Acter picture data
 * @param folder name of the folder to which we'll save pictures
 * @returns a reducer function that takes an ActerData Promise and the picture type
 */
export const _updatePicture = (folder: string) => async (
  dataPromise: Promise<ActerVariables>,
  type: ActerPictureType
): Promise<ActerVariables> => {
  //TODO: error handling for failed upload
  const variables = await dataPromise
  const file = variables[type]
  if (!file) {
    return variables
  }

  const fileName = `${type}Url`
  if (
    typeof variables[fileName] === 'string' &&
    variables[fileName].match(file.name)
  ) {
    return {
      ...variables,
      [fileName]: variables[fileName],
    }
  }

  const img = await uploadImage(folder, file)
  if (!img) {
    throw new Error(`Could not update ${type} image`)
  }
  return {
    ...variables,
    [fileName]: img,
  }
}
