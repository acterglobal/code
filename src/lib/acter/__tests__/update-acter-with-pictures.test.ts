import {
  _updatePicture,
  _updatePictures,
  ActerDataVariables,
} from 'src/lib/acter/update-acter-with-pictures'
import * as UploadImage from 'src/lib/images/upload-image'

jest.mock('src/lib/images/upload-image')
const uploadImage = UploadImage.uploadImage as jest.Mock

describe('upsertActerWithPictures', () => {
  describe('_updatePictures', () => {
    it('should set avatar and banner urls', async () => {
      const uploadFn = jest.fn().mockReturnValue('ok')
      uploadImage.mockImplementation(uploadFn)
      const variables = {
        id: 'foo',
        avatar: {
          name: 'bar',
        },
        avatarUrl: '',
        banner: {
          name: 'baz',
        },
        bannerUrl: '',
      } as ActerDataVariables
      const data = await _updatePictures({ variables })
      expect(data.variables.avatarUrl).toEqual('ok')
      expect(data.variables.bannerUrl).toEqual('ok')
      expect(uploadFn).toBeCalledTimes(2)
    })

    it('should set just one pic url if the other is missing', async () => {
      const uploadFn = jest.fn().mockReturnValue('ok')
      uploadImage.mockImplementation(uploadFn)
      const variables = {
        id: 'foo',
        avatar: {
          name: 'bar',
        },
        avatarUrl: '',
        bannerUrl: '',
      } as ActerDataVariables
      const data = await _updatePictures({ variables })
      expect(data.variables.avatarUrl).toEqual('ok')
      expect(data.variables.bannerUrl).toEqual('')
      expect(uploadFn).toBeCalledTimes(1)
    })
  })

  describe('_updatePicture', () => {
    it('should should return the same ActerData if no file is present', async () => {
      const variables = {} as ActerDataVariables
      const acter = await _updatePicture('foo')(
        Promise.resolve({ variables }),
        'avatar'
      )
      expect(acter.variables.avatarUrl).toBeUndefined()
    })

    it('should use the existing image URL and not upload it if the name matches', async () => {
      const uploadFn = jest.fn()
      uploadImage.mockImplementation(uploadFn)
      const variables = {
        avatar: {
          name: 'bar',
        },
        avatarUrl: 'foo/bar',
      } as ActerDataVariables
      const acter = await _updatePicture('foo')(
        Promise.resolve({ variables }),
        'avatar'
      )
      expect(acter.variables.avatarUrl).toBe('foo/bar')
      expect(uploadFn).toBeCalledTimes(0)
    })

    it('should throw an error if there was a problem uploading the imave', async () => {
      const err = new Error('There was an error')
      uploadImage.mockImplementation(() => {
        throw err
      })
      const variables = {
        avatar: {
          name: 'bar',
        },
        avatarUrl: '',
      } as ActerDataVariables
      await expect(
        _updatePicture('foo')(Promise.resolve({ variables }), 'avatar')
      ).rejects.toEqual(err)
    })

    it('should throw an error if no image path was returned', async () => {
      uploadImage.mockImplementation(() => false)
      const variables = {
        avatar: {
          name: 'bar',
        },
        avatarUrl: '',
      } as ActerDataVariables
      await expect(
        _updatePicture('foo')(Promise.resolve({ variables }), 'avatar')
      ).rejects.toEqual(new Error('Could not update avatar image'))
    })

    it('should return the path of the new image on success', async () => {
      const uploadFn = jest.fn().mockReturnValue('foo/bar')
      uploadImage.mockImplementation(uploadFn)
      const variables = {
        avatar: {
          name: 'bar',
        },
        avatarUrl: '',
      } as ActerDataVariables
      await expect(
        _updatePicture('foo')(Promise.resolve({ variables }), 'avatar')
      ).resolves.toHaveProperty('variables.avatarUrl', 'foo/bar')
      expect(uploadFn).toBeCalledTimes(1)
    })
  })
})
