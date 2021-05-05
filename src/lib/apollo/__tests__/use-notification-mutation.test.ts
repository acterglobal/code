import { useMutation } from '@apollo/client'
import { useSnackbar } from 'notistack'

import { useNotificationMutation } from 'src/lib/apollo/use-notification-mutation'

jest.mock('@apollo/client')
jest.mock('notistack')

describe('useNotificationMutation', () => {
  let useMutationMock
  let useSnackbarMock
  let enqueueSnackbarMock

  beforeEach(() => {
    useMutationMock = useMutation as jest.Mock
    useSnackbarMock = useSnackbar as jest.Mock

    enqueueSnackbarMock = jest.fn()
    useSnackbarMock.mockReturnValue({
      enqueueSnackbar: enqueueSnackbarMock,
    })
  })

  describe('onError', () => {
    it('should display a default error message when getErrorMessage is not provided', () => {
      const message = 'there was an error'
      // Short-circuit to just call onError
      useMutationMock.mockImplementation((mutation, { onError }) =>
        onError({ message })
      )
      useNotificationMutation('')
      expect(enqueueSnackbarMock).toBeCalledWith(message, { variant: 'error' })
    })

    it('should use the error message function when passed', () => {
      const message = 'there was an error'
      // Short-circuit to just call onError
      useMutationMock.mockImplementation((mutation, { onError }) =>
        onError({ message })
      )
      useNotificationMutation('', {
        getErrorMessage: ({ message }) => `${message}!`,
      })
      expect(enqueueSnackbarMock).toBeCalledWith(`${message}!`, {
        variant: 'error',
      })
    })

    it('should call any additional onError functionality if present', () => {
      const message = 'there was an error'
      const onError = jest.fn()
      useMutationMock.mockImplementation((mutation, { onError }) =>
        onError({ message })
      )
      useNotificationMutation('', {
        onError,
      })
      expect(enqueueSnackbarMock).toBeCalledTimes(1)
      expect(onError).toBeCalledWith({ message })
    })
  })

  describe('onSuccess', () => {
    it('should display a default success message when getSuccessMessage is not provided', () => {
      // Short-circuit to just call onError
      useMutationMock.mockImplementation((mutation, { onCompleted }) =>
        onCompleted()
      )
      useNotificationMutation('')
      expect(enqueueSnackbarMock).toBeCalledWith('Success', {
        variant: 'success',
      })
    })

    it('should use the success message function when passed', () => {
      const message = 'Woohoo!'
      // Short-circuit to just call onError
      useMutationMock.mockImplementation((mutation, { onCompleted }) =>
        onCompleted({ message })
      )
      useNotificationMutation('', {
        getSuccessMessage: ({ message }) => `${message}!`,
      })
      expect(enqueueSnackbarMock).toBeCalledWith(`${message}!`, {
        variant: 'success',
      })
    })

    it('should call any additional onCompleted functionality if present', () => {
      const message = 'Woohoo'
      const onCompleted = jest.fn()
      useMutationMock.mockImplementation((mutation, { onCompleted }) =>
        onCompleted({ message })
      )
      useNotificationMutation('', {
        onCompleted,
      })
      expect(enqueueSnackbarMock).toBeCalledTimes(1)
      expect(onCompleted).toBeCalledWith({ message })
    })
  })
})
