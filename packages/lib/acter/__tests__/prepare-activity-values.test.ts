import { prepareDataForValidation } from 'formik'

import {
  _setIsOnline,
  ActivityFormData,
} from '@acter/lib/acter/prepare-activity-values'
import { ActerTypes } from '@acter/lib/constants'
import { ExampleActivity } from '@acter/lib/fixtures'

describe('prepareActivityValues', () => {
  let formData: ActivityFormData

  beforeEach(() => {
    formData = {
      ...ExampleActivity,
      isOnline: 'true',
    }
  })

  it('should do nothing when the Acter is NOT an Activity', () => {
    formData.Acter.ActerType.name = ActerTypes.ORGANISATION
    expect(() => prepareDataForValidation({ formData })).not.toThrow()
  })

  describe('_setIsOnline', () => {
    it('should set isOnline to boolean true when string is "true"', () => {
      expect(_setIsOnline(formData).isOnline).toBe(true)
    })
    it('should set isOnline to boolean false when string is not "true"', () => {
      expect(_setIsOnline({ ...formData, isOnline: 'false' }).isOnline).toBe(
        false
      )
    })
  })
})
