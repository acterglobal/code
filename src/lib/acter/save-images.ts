import md5 from 'md5'
import { uploadImage } from 'src/lib/images/upload-image'
import { Acter } from '@generated/type-graphql'

interface FileDescription {
  name: string
  size: number
  type: string
}

interface FileUpload {
  avatar: FileDescription
  banner: FileDescription
}

export const saveActerImages = async (
  acter: Acter,
  data: FileUpload
): Promise<void[]> => {
  // Upload images
  const folder = `acter/${md5(acter.id)}`
  return await Promise.all(
    ['avatar', 'banner'].map(async (fileName) => {
      //TODO: error handling for failed upload
      const file = data[fileName]
      if (file) {
        const img = await uploadImage(folder, file)
        if (img) {
          acter[`${fileName}Url`] = img
        }
      }
    })
  )
}
