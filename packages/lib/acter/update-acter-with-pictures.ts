import md5 from 'md5'
import { pipe, andThen } from 'ramda'

import { uploadFile } from '@acter/lib/files/upload-file'
import { Acter } from '@acter/schema'

export type ActerPictureType = 'avatar' | 'banner'

export interface ActerPictureData {
  id: string
  avatarUrl?: string
  bannerUrl?: string
}

//TODO: make this a type
export const initialValues = {
  name: '',
  description: '',
  location: '',
  url: '',
  avatarUrl: '',
  bannerUrl: '',
  acterNotifySetting: '',
  interestIds: [],
  followerIds: [],
}

interface UpdateActerWithPicturesProps {
  acter: Acter
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  formData?: any
  //eslint-disable-next-line @typescript-eslint/no-explicit-any
  updateActer: (data: ActerPictureData) => Promise<any>
}

/**
 * Update Acter record including possible updlaod of new avatar & banner images
 * @param acter Acter to be updated
 * @param formData Form data with which to update Acter
 * @param updateActerFn Update function to save Acter info
 * @returns
 */
export const updateActerWithPictures = async ({
  acter,
  formData = {},
  updateActer,
}: //eslint-disable-next-line @typescript-eslint/no-explicit-any
UpdateActerWithPicturesProps): Promise<any> => {
  const variables = {
    // Start with blanks fromt he update set
    ...initialValues,
    // Load existing Acter data
    ...acter,
    // Overwrite with form values
    ...formData,
    // Explicitly set acterId
    acterId: acter.id,
  }

  return await pipe(
    _updatePictures,
    andThen(_updateActer(updateActer))
  )(variables)
}

//eslint-disable-next-line @typescript-eslint/no-explicit-any
const _updateActer =
  (updateActer: (any) => any) =>
  (
    variables: ActerPictureData
    //eslint-disable-next-line @typescript-eslint/no-explicit-any
  ): Promise<any> =>
    updateActer({ variables })

/**
 * Sets avatar and banner images on ActerData
 * @param data The Acter data on which we're operating
 * @returns ActerData with avatar and banner images set, if available
 */
export const _updatePictures = async (
  data: ActerPictureData
): Promise<ActerPictureData> => {
  const folder = `acter/${md5(data.id)}`

  const dataWithPics = await ['avatar', 'banner'].reduce<
    Promise<ActerPictureData>
  >(_updatePicture(folder), Promise.resolve(data))
  return await {
    ...data,
    ...dataWithPics,
  }
}

/**
 * Creates a reducer function to be used for setting Acter picture data
 * @param folder name of the folder to which we'll save pictures
 * @returns a reducer function that takes an ActerData Promise and the picture type
 */
export const _updatePicture =
  (folder: string) =>
  async (
    dataPromise: Promise<ActerPictureData>,
    type: ActerPictureType
  ): Promise<ActerPictureData> => {
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

    const img = await uploadFile(folder, file)
    if (!img) {
      throw new Error(`Could not update ${type} image`)
    }
    return {
      ...variables,
      [fileName]: img,
    }
  }
