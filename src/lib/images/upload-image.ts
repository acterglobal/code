import axios from 'axios'
import md5 from 'md5'
import mime from 'mime'

export interface FileDescription {
  name: string
  size: number
  type: string
}

/**
 * Uploads a file to cloud storage using a signed URL
 *
 * @param folder Folder to save file
 * @param file File upload
 * @returns Path and file name of uploaded file
 */
export const uploadImage = async (
  folder: string,
  file: FileDescription
): Promise<string> => {
  const name = md5(file.name)
  const extension = mime.getExtension(file.type)
  const fileName = `${folder}/${name}.${extension}`

  const res = await axios.get(
    `/api/upload-url?contentType=${file.type}&fileName=${fileName}`
  )
  await axios.put(res.data, file, {
    headers: {
      'Content-type': file.type,
      'x-amz-acl': 'public-read',
    },
  })

  return fileName
}
