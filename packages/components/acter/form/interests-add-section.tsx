import React, { FC, useState, useEffect } from 'react'

import { useFormikContext } from 'formik'

import { InterestsPicker } from '@acter/components/interests/interests-picker'
import { LoadingSpinner } from '@acter/components/util/loading-spinner'
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
  const { interestTypes, fetching } = useInterestTypes()

  if (fetching) return <LoadingSpinner />
  if (!interestTypes) return null

  return (
    <InterestsPicker
      interestTypes={interestTypes}
      selectedInterests={selectedInterests}
      setSelectedInterests={setSelectedInterests}
    />
  )
}
