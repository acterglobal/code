import React, { FC, useState, useEffect } from 'react'
import { InterestsPicker } from 'src/components/interests/interests-picker'
import { FormSetFieldValue } from 'src/components/acter/form'
import { InterestType } from '@schema'

export interface InterestsAddSectionProps {
  interestTypes: InterestType[]
  initialValues: string[]
  setFieldValue: FormSetFieldValue
}

export const InterestsAddSection: FC<InterestsAddSectionProps> = ({
  interestTypes,
  setFieldValue,
  initialValues,
}) => {
  const [selectedInterests, setSelectedInterests] = useState(initialValues)

  useEffect(() => {
    setFieldValue('interestIds', selectedInterests)
  }, [selectedInterests])

  return (
    <InterestsPicker
      interestTypes={interestTypes}
      selectedInterests={selectedInterests}
      setSelectedInterests={setSelectedInterests}
    />
  )
}
