/**
 * @jest-environment jsdom
 */
import { renderHook } from '@testing-library/react-hooks'

import { useSnackbar } from 'notistack'
import { useMutation } from 'urql'

import { useNotificationMutation } from '@acter/lib/urql/use-notification-mutation'

jest.mock('notistack')
jest.mock('urql')

describe('useNotificationMutation', () => {
  let useMutationMock
  let useSnackbarMock
  let enqueueSnackbarMock

  const mutation = `
mutation Fake() {
  fake() {
    id
  }
}`

  beforeEach(() => {
    useMutationMock = useMutation as jest.Mock
    useSnackbarMock = useSnackbar as jest.Mock

    enqueueSnackbarMock = jest.fn()
    useSnackbarMock.mockReturnValue({
      enqueueSnackbar: enqueueSnackbarMock,
    })
  })

  describe('onError', () => {
    it('should display a default error message when getErrorMessage is not provided', async () => {
      const message = 'there was an error'
      // Short-circuit to just call onError
      useMutationMock.mockReturnValue([
        { error: new Error(message) },
        jest.fn(),
      ])
      const {
        result: {
          current: [_, mutate],
        },
      } = renderHook(() => useNotificationMutation(mutation))
      await mutate()
      expect(enqueueSnackbarMock).toHaveBeenCalledWith(message, { variant: 'error' })
    })

    it('should use the error message function when passed', async () => {
      const message = 'there was an error'
      // Short-circuit to just call onError
      useMutationMock.mockReturnValue([
        { error: new Error(message) },
        jest.fn(),
      ])
      const {
        result: {
          current: [_, mutate],
        },
      } = renderHook(() =>
        useNotificationMutation(mutation, {
          getErrorMessage: ({ message }) => `${message}!`,
        })
      )
      await mutate()
      expect(enqueueSnackbarMock).toHaveBeenCalledWith(`${message}!`, {
        variant: 'error',
      })
    })

    it('should call any additional onError functionality if present', async () => {
      const message = 'there was an error'
      const error = new Error(message)
      const onError = jest.fn()
      useMutationMock.mockReturnValue([{ error }, jest.fn()])
      const {
        result: {
          current: [_, mutate],
        },
      } = renderHook(() =>
        useNotificationMutation(mutation, {
          onError,
        })
      )
      await mutate()
      expect(enqueueSnackbarMock).toHaveBeenCalledTimes(1)
      expect(onError).toHaveBeenCalledWith(error)
    })
  })

  describe('onSuccess', () => {
    it('should display a default success message when getSuccessMessage is not provided', async () => {
      // Short-circuit to just call onError
      useMutationMock.mockReturnValue([{ data: {} }, jest.fn()])
      const {
        result: {
          current: [_, mutate],
        },
      } = renderHook(() => useNotificationMutation(mutation))
      await mutate()
      expect(enqueueSnackbarMock).toHaveBeenCalledWith('Success', {
        variant: 'success',
      })
    })

    it('should use the success message function when passed', async () => {
      const message = 'Woohoo'
      // Short-circuit to just call onError
      useMutationMock.mockReturnValue([{ data: {} }, jest.fn()])
      const {
        result: {
          current: [_, mutate],
        },
      } = renderHook(() =>
        useNotificationMutation(mutation, {
          getSuccessMessage: () => `${message}!`,
        })
      )
      await mutate()
      expect(enqueueSnackbarMock).toHaveBeenCalledWith(`${message}!`, {
        variant: 'success',
      })
    })

    it('should call any additional onCompleted functionality if present', async () => {
      const onCompleted = jest.fn()
      const data = { foo: 'bar' }
      useMutationMock.mockReturnValue([{ data }, jest.fn()])
      const {
        result: {
          current: [_, mutate],
        },
      } = renderHook(() =>
        useNotificationMutation(mutation, {
          onCompleted,
        })
      )
      await mutate()
      expect(enqueueSnackbarMock).toHaveBeenCalledTimes(1)
      expect(onCompleted).toHaveBeenCalledWith(data)
    })
  })
})
