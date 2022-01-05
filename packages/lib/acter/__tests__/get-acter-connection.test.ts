import { getActerConnection } from '@acter/lib/acter/get-acter-connection'
import { ExampleActer, ExampleActerConnection } from '@acter/lib/fixtures'

describe('getActerConnection', () => {
  it('should return an ActerConnection if the acter and follower are already connected', () => {
    const follower = {
      ...ExampleActer,
      id: '32077386-26c0-4712-af4a-1ac8d1078c7f',
    }
    const connection = {
      ...ExampleActerConnection,
      Follower: follower,
    }
    const acter = {
      ...ExampleActer,
      Followers: [connection],
    }

    expect(getActerConnection(acter, follower)).toStrictEqual(connection)
  })

  it('should return null when there is no connecction', () => {
    const follower = {
      ...ExampleActer,
      id: '32077386-26c0-4712-af4a-1ac8d1078c7f',
    }
    const connection = {
      ...ExampleActerConnection,
      Follower: follower,
    }
    const acter = {
      ...ExampleActer,
      Followers: [connection],
    }

    const anotherActer = {
      ...ExampleActer,
      id: 'f29aa31e-1f15-4f8b-812b-ae113365d2b7',
    }

    expect(getActerConnection(acter, anotherActer)).toBeUndefined()
  })
})
