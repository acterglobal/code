import { getFileExtension } from '@acter/lib/files/get-file-extension'

describe('getFileExtension', () => {
  it('should return image extension from image source', () => {
    const imageSource = 'http://image.source.domain/imagefile.jpg'
    expect(getFileExtension(imageSource)).toBe('jpg')

    const fileSource1 = 'http://image.source.domain/imagefile1.doc'
    expect(getFileExtension(fileSource1)).toBe('doc')
  })
})
