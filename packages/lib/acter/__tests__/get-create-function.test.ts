import { getCreateFunction } from '@acter/lib/acter/get-create-function'
import {
  ActivityActerType,
  OrganisationActerType,
  ExampleActivity,
  ExampleActer,
} from '@acter/schema/fixtures'

describe('getCreateFunction', () => {
  let createActivity
  let createActer
  let updateActer

  beforeEach(() => {
    createActivity = jest.fn()
    createActer = jest.fn()
    updateActer = jest.fn()
  })

  it('should use the createActivity function when ActerType is "activity"', async () => {
    createActivity.mockReturnValue({
      data: {
        createActivityCustom: ExampleActivity,
      },
    })
    updateActer.mockReturnValue({
      data: {
        updateActerCustom: ExampleActivity.Acter,
      },
    })

    await getCreateFunction({
      acterType: ActivityActerType,
      createActivity,
      createActer,
      updateActer,
    })({})

    expect(createActivity).toBeCalledTimes(1)
    expect(createActer).toBeCalledTimes(0)
    expect(updateActer).toBeCalledTimes(1)
  })

  it('should use createActer for all other ActerTypes', async () => {
    createActer.mockReturnValue({
      data: {
        createActer: ExampleActer,
      },
    })

    updateActer.mockReturnValue({
      data: {
        updateActer: ExampleActer,
      },
    })

    await getCreateFunction({
      acterType: OrganisationActerType,
      createActivity,
      createActer,
      updateActer,
    })({})

    expect(createActivity).toBeCalledTimes(0)
    expect(createActer).toBeCalledTimes(1)
    expect(updateActer).toBeCalledTimes(1)
  })
})
