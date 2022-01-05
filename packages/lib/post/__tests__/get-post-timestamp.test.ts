import { getPostTimeStamp } from '@acter/lib/post/get-post-timestamp'

describe('getPostTimeStamp', () => {
  const postDate = new Date('2021-12-16T09:44:46.815Z') // thursday

  it('Should return DD_MMM_YYYY format date string if given date is older than a week', () => {
    expect(getPostTimeStamp(postDate)).toEqual('16 Dec 2021')
  })

  it('Should return date in words relative to the given base date if given date is with in a week', () => {
    jest.useFakeTimers('modern')
    jest.setSystemTime(new Date('2021-12-19')) // sunday

    expect(getPostTimeStamp(postDate)).toEqual('last Thursday at 10:44 AM')
  })
})
