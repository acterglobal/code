import { DATE_FORMAT_SHORT_TZ } from '@acter/lib/constants'
import { getZonedFormattedDate } from '@acter/lib/datetime/get-zoned-formatted-date'
import { parseAndFormat } from '@acter/lib/datetime/parse-and-format'
import { parseDateOrString } from '@acter/lib/datetime/parse-date-or-string'

jest.mock('@acter/lib/datetime/parse-date-or-string')
jest.mock('@acter/lib/datetime/get-zoned-formatted-date')

describe('parseAndFormat', () => {
  const parseDateOrStringMock = parseDateOrString as jest.Mock
  const getZonedFormattedDateMock = getZonedFormattedDate as jest.Mock

  beforeEach(() => {
    jest.resetAllMocks()
    parseDateOrStringMock.mockReturnValue(new Date())
    getZonedFormattedDateMock.mockReturnValue(() => '')
  })

  it('should call parseDateOrString', () => {
    const d = parseAndFormat('2021-11-02T14:00:00', DATE_FORMAT_SHORT_TZ)
    expect(parseDateOrStringMock).toBeCalledTimes(1)
  })

  it('should calll getZonedFormattedDate', () => {
    const d = parseAndFormat('2021-11-02T14:00:00', DATE_FORMAT_SHORT_TZ)
    expect(getZonedFormattedDateMock).toBeCalledTimes(1)
  })
})
