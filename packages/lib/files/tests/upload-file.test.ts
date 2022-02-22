import axios from 'axios'

import { uploadFile, FileDescription } from '@acter/lib/files/upload-file'

jest.mock('axios')

describe('uploadFile', () => {
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
      uploadFile('fobar', {
        name: 'Foo',
        type: 'image/jpeg',
      } as FileDescription)
    ).not.toThrow()
  })
})
