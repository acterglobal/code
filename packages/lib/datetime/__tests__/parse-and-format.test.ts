import { format } from 'date-fns/fp'

import { DATE_FORMAT_SHORT_TZ } from '@acter/lib/constants'
import { parseAndFormat } from '@acter/lib/datetime/parse-and-format'
import { parseDateOrString } from '@acter/lib/datetime/parse-date-or-string'

jest.mock('date-fns/fp')
jest.mock('@acter/lib/datetime/parse-date-or-string')

describe('parseAndFormat', () => {
  const parseDateOrStringMock = parseDateOrString as jest.Mock
  const formatMock = format as jest.Mock

  beforeEach(() => {
    jest.resetAllMocks()
    parseDateOrStringMock.mockReturnValue(new Date())
    formatMock.mockReturnValue(() => '')
  })

  it('should call parseDateOrString', () => {
    parseAndFormat('2021-11-02T14:00:00', DATE_FORMAT_SHORT_TZ)
    expect(parseDateOrStringMock).toBeCalledTimes(1)
  })

  it('should call format', () => {
    parseAndFormat('2021-11-02T14:00:00', DATE_FORMAT_SHORT_TZ)
    expect(format).toBeCalledTimes(1)
  })
})
