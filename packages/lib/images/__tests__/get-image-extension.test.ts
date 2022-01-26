import { getImageExtension } from '@acter/lib/images/get-image-extension'

describe('getImageExtension', () => {
  it('should return image extension from image source', () => {
    const imageSource = 'http://image.source.domain/imagefile.jpg'
    expect(getImageExtension(imageSource)).toBe('jpg')

    const imageSource1 = 'http://image.source.domain/imagefile1.png'
    expect(getImageExtension(imageSource1)).toBe('png')
  })
})
