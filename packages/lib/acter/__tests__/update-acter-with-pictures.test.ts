import {
  _updatePicture,
  _updatePictures,
  ActerPictureData,
} from '@acter/lib/acter/update-acter-with-pictures'
import { ActerVariables } from '@acter/lib/acter/use-create-acter'
import * as UploadFile from '@acter/lib/files/upload-file'

jest.mock('@acter/lib/files/upload-file')
const uploadImage = UploadFile.uploadFile as jest.Mock

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
      } as ActerPictureData
      const data = await _updatePictures(variables)
      expect(data.avatarUrl).toEqual('ok')
      expect(data.bannerUrl).toEqual('ok')
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
      } as ActerPictureData
      const data = await _updatePictures(variables)
      expect(data.avatarUrl).toEqual('ok')
      expect(data.bannerUrl).toEqual('')
      expect(uploadFn).toBeCalledTimes(1)
    })
  })

  describe('_updatePicture', () => {
    it('should should return the same ActerData if no file is present', async () => {
      const variables = ({} as unknown) as ActerVariables
      const acter = await _updatePicture('foo')(
        Promise.resolve(variables),
        'avatar'
      )
      expect(acter.avatarUrl).toBeUndefined()
    })

    it('should use the existing image URL and not upload it if the name matches', async () => {
      const uploadFn = jest.fn()
      uploadImage.mockImplementation(uploadFn)
      const variables = ({
        avatar: {
          name: 'bar',
        },
        avatarUrl: 'foo/bar',
      } as unknown) as ActerPictureData
      const acter = await _updatePicture('foo')(
        Promise.resolve(variables),
        'avatar'
      )
      expect(acter.avatarUrl).toBe('foo/bar')
      expect(uploadFn).toBeCalledTimes(0)
    })

    it('should throw an error if there was a problem upfetchingthe image', async () => {
      const err = new Error('There was an error')
      uploadImage.mockImplementation(() => {
        throw err
      })
      const variables = ({
        avatar: {
          name: 'bar',
        },
        avatarUrl: '',
      } as unknown) as ActerPictureData
      await expect(
        _updatePicture('foo')(Promise.resolve(variables), 'avatar')
      ).rejects.toEqual(err)
    })

    it('should throw an error if no image path was returned', async () => {
      uploadImage.mockImplementation(() => false)
      const variables = ({
        avatar: {
          name: 'bar',
        },
        avatarUrl: '',
      } as unknown) as ActerPictureData
      await expect(
        _updatePicture('foo')(Promise.resolve(variables), 'avatar')
      ).rejects.toEqual(new Error('Could not update avatar image'))
    })

    it('should return the path of the new image on success', async () => {
      const uploadFn = jest.fn().mockReturnValue('foo/bar')
      uploadImage.mockImplementation(uploadFn)
      const variables = ({
        avatar: {
          name: 'bar',
        },
        avatarUrl: undefined,
      } as unknown) as ActerPictureData
      await expect(
        _updatePicture('foo')(Promise.resolve(variables), 'avatar')
      ).resolves.toHaveProperty('avatarUrl', 'foo/bar')
      expect(uploadFn).toBeCalledTimes(1)
    })
  })
})
