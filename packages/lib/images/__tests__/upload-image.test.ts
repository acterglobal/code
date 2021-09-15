import axios from 'axios'

import { uploadImage, FileDescription } from '@acter/lib/images/upload-image'

jest.mock('axios')

describe('uploadImage', () => {
  it('should use the fetched signed URL to send the file', async () => {
    const data = 'http://example.com'
    const axiosGetMock = axios.get as jest.Mock
    axiosGetMock.mockImplementationOnce(() => Promise.resolve({ data }))
    axiosGetMock.mockImplementationOnce((url, file, options) => {
      expect(url).toBe(data)
      expect(options.headers['Content-type']).toBe('image/jpeg')
      expect(options.headers['x-amz-acl']).toBe('public-read')
    })
    expect(async () =>
      uploadImage('fobar', {
        name: 'Foo',
        type: 'image/jpeg',
      } as FileDescription)
    ).not.toThrow()
  })
})
