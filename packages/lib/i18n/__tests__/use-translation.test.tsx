import useI18nTranslation from 'next-translate/useTranslation'

import { renderHook, act } from '@testing-library/react-hooks'

import { useTranslation } from '@acter/lib/i18n/use-translation'

jest.mock('next-translate/useTranslation')

describe('useTranslation()', () => {
  const mockUseI18nTranslation = useI18nTranslation as jest.Mock

  it('show return translated text', () => {
    // mockUseI18nTranslation.mockImplementation(() => ({}))

    const { result } = renderHook(() => useTranslation('dashboard'))

    // act(() => {
    //   result.current.t('myGroups')
    // })

    expect(result.current.t('myGroups')).toEqual('mine grupper')
  })
})
