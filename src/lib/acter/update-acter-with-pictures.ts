import md5 from 'md5'
import { pipeWith } from 'ramda'
import { pick } from 'lodash'
import { uploadImage, FileDescription } from 'src/lib/images/upload-image'
import { Acter } from '@schema'

export type ActerData = {
  variables: ActerDataVariables
}

export type ActerDataVariables = Partial<Acter> & {
  acterId: string
  avatar: FileDescription
  banner: FileDescription
}

export type ActerPictureType = 'avatar' | 'banner'

const updateSet = [
  'name',
  'description',
  'location',
  'url',
  'avatarUrl',
  'bannerUrl',
  'interestIds',
]
export const initialValues = updateSet.reduce(
  (prev, key) => ({ ...prev, [key]: '' }),
  {}
)

export const updateActerWithPictures = (
  acter: Acter,
  updateActerFn: (data: ActerData) => Promise<any>
) => async (formData: Partial<Acter>): Promise<any> => {
  const variables = {
    // Start with blanks fromt he update set
    ...initialValues,
    // Load existing Acter data
    ...acter,
    // Overwrite with form values
    ...pick(formData, ...updateSet),
    // Explicitly set acterId
    acterId: acter.id,
  }

  return await pipeWith(_updatePictures, updateActerFn)({ variables })
}

/**
 * Sets avatar and banner images on ActerData
 * @param data The Acter data on which we're operating
 * @returns ActerData with avatar and banner images set, if available
 */
export const _updatePictures = async (data: ActerData): Promise<ActerData> => {
  const folder = `acter/${md5(data.variables.id)}`
  const dataWithPics = (await ['avatar', 'banner'].reduce<Promise<ActerData>>(
    _updatePicture(folder),
    Promise.resolve(data)
  )) as ActerData
  return await {
    variables: {
      ...data.variables,
      ...dataWithPics.variables,
    },
  }
}

/**
 * Creates a reducer function to be used for setting Acter picture data
 * @param folder name of the folder to which we'll save pictures
 * @returns a reducer function that takes an ActerData Promise and the picture type
 */
export const _updatePicture = (folder: string) => async (
  dataPromise: Promise<ActerData>,
  type: ActerPictureType
): Promise<ActerData> => {
  //TODO: error handling for failed upload
  const { variables } = await dataPromise
  const file = variables[type]
  if (!file) {
    return { variables }
  }

  const fileName = `${type}Url`
  if (variables[fileName].match(file.name)) {
    return {
      variables: { ...variables, [fileName]: variables[fileName] },
    }
  }

  const img = await uploadImage(folder, file)
  if (!img) {
    throw new Error(`Could not update ${type} image`)
  }
  return {
    variables: {
      ...variables,
      [fileName]: img,
    },
  }
}
