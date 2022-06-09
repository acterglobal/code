import { getObjectArrayMemoString } from './get-object-array-memo-string'

describe('getObjectArrayMemoString', () => {
  it('should return an empty string if given an undefined value', () => {
    expect(getObjectArrayMemoString(undefined)).toBe('')
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

  it('should return a string of nested ids when fields have their own lists', () => {
    const results = [
      {
        id: 'one',
        list: [
          {
            id: 'a',
          },
          {
            id: 'b',
          },
        ],
      },
      {
        id: 'two',
      },
      {
        id: 'three',
      },
    ]
    expect(getObjectArrayMemoString(results)).toBe('one,one.a,one.b,two,three')
  })
})
