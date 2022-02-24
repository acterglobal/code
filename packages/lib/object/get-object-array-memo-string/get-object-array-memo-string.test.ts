import { getObjectArrayMemoString } from '.'

describe('getObjectArrayMemoString', () => {
  it('should return null passed value is not an array', () => {
    expect(getObjectArrayMemoString(undefined)).toBe(null)
  })

  it('should return an empty string if the array is empty', () => {
    expect(getObjectArrayMemoString([])).toBe('')
  })

  it('should return a string from the ids in the array', () => {
    const results = [
      {
        id: 'one',
      },
      {
        id: 'two',
      },
      {
        id: 'three',
      },
    ]
    expect(getObjectArrayMemoString(results)).toBe('one,two,three')
  })

  it('should use empty strings if it cannot find ids in the array', () => {
    const results = [
      {
        foo: 'bar',
      },
      {
        foo: 'bar',
      },
    ]
    expect(getObjectArrayMemoString(results)).toBe(',')
  })
})
