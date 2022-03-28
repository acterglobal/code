import { formatWithOptions } from 'date-fns/fp'

import { DATE_FORMAT_SHORT_TZ } from '@acter/lib/constants'
import { parseAndFormat } from '@acter/lib/datetime/parse-and-format'
import { parseDateOrString } from '@acter/lib/datetime/parse-date-or-string'

jest.mock('date-fns/fp')
jest.mock('@acter/lib/datetime/parse-date-or-string')

describe('parseAndFormat', () => {
  const parseDateOrStringMock = parseDateOrString as jest.Mock
  const formatWithOptionsMock = formatWithOptions as jest.Mock

  beforeEach(() => {
    jest.resetAllMocks()
    parseDateOrStringMock.mockReturnValue(new Date())
    formatWithOptionsMock.mockReturnValue(() => '')
  })

  it('should call parseDateOrString', () => {
    parseAndFormat({
      dateString: '2021-11-02T14:00:00',
      formatString: DATE_FORMAT_SHORT_TZ,
    })
    expect(parseDateOrStringMock).toBeCalledTimes(1)
  })

  it('should call format', () => {
    parseAndFormat({
      dateString: '2021-11-02T14:00:00',
      formatString: DATE_FORMAT_SHORT_TZ,
    })
    expect(formatWithOptions).toBeCalledTimes(1)
  })
})
