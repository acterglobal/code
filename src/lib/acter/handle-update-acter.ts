import md5 from 'md5'
import { pick } from 'lodash'
import { uploadImage } from 'src/lib/images/upload-image'

import { Acter } from '@generated/type-graphql'

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

export const handleUpdateActer = (
  acter: Acter,
  updateActerFn: (any) => Promise<any>
) => async (data) => {
  /// Upload images
  const folder = `acter/${md5(acter.id)}`
  await Promise.all(
    ['avatar', 'banner'].map(async (fileName) => {
      //TODO: error handling for failed upload
      const file = data[fileName]
      if (file) {
        if (!acter.avatarUrl?.match(file.name)) {
          const img = await uploadImage(folder, file)
          if (img) {
            data[`${fileName}Url`] = img
          }
        }
      }
    })
  )

  const acterData = {
    ...initialValues,
    ...acter,
    ...pick(data, ...updateSet),
  }

  return await updateActerFn({
    variables: {
      acterId: acter.id,
      ...acterData,
    },
  })
}
