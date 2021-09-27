import React, { FC, useState, useEffect } from 'react'

import { useFormikContext } from 'formik'

import { InterestsPicker } from '@acter/components/interests/interests-picker'
import { useInterestTypes } from '@acter/lib/interests/use-interest-types'

export interface InterestAddSectionValues {
  interestIds: string[]
}

export const InterestsAddSection: FC = () => {
  const { values, setFieldValue } = useFormikContext<InterestAddSectionValues>()
  const [selectedInterests, setSelectedInterests] = useState<string[]>(
    values.interestIds
  )

  useEffect(() => {
    setFieldValue('interestIds', selectedInterests)
  }, [selectedInterests])
  const { interestTypes } = useInterestTypes()
  if (!interestTypes) return null

  return (
    <InterestsPicker
      interestTypes={interestTypes}
      selectedInterests={selectedInterests}
      setSelectedInterests={setSelectedInterests}
    />
  )
}
