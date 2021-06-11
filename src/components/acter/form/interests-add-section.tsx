import React, { FC, useState, useEffect } from 'react'
import { useFormikContext } from 'formik'
import { InterestsPicker } from 'src/components/interests/interests-picker'
import { InterestType } from '@schema'
export interface InterestsAddSectionProps {
  interestTypes: InterestType[]
}

export interface InterestAddSectionValues {
  interestIds: string[]
}

export const InterestsAddSection: FC<InterestsAddSectionProps> = ({
  interestTypes,
}) => {
  const { values, setFieldValue } = useFormikContext<InterestAddSectionValues>()
  const [selectedInterests, setSelectedInterests] = useState<string[]>(
    values.interestIds
  )

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
