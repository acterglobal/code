import React, { FC } from 'react'
import {
  Box,
  Typography,
  makeStyles,
  createStyles,
  Theme,
} from '@material-ui/core'
import { InterestType } from '@generated/type-graphql'
import { Interest, interestColors } from 'src/components/interests/interest'

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    interests: {},
  })
)
export interface InterestTypesProps {
  type: InterestType
  allTypes: InterestType[]
  selectedInterests?: string[]
  selectedTypes?: string[]
  disabled?: boolean
  SDGLogo?: boolean
  showTitle?: boolean
  showSubTypeTitles?: boolean
  columns?: boolean
  onSelectedInterestsChange?: (interest: string, type: string) => void
}

export const InterestTypes: FC<InterestTypesProps> = ({
  type,
  allTypes,
  SDGLogo,
  onSelectedInterestsChange,
  selectedInterests,
  selectedTypes,
  disabled,
  showTitle = false,
  showSubTypeTitles = true,
  columns = false,
}) => {
  const subTypes = allTypes.filter(
    (subtype) => type.id === subtype.parentInterestTypeId
  )

  if (subTypes.length > 0) {
    return (
      <>
        {subTypes.map((subType) => (
          <InterestTypes
            key={subType.id}
            type={subType}
            allTypes={subTypes}
            SDGLogo={true}
            onSelectedInterestsChange={onSelectedInterestsChange}
            selectedInterests={selectedInterests}
            selectedTypes={selectedTypes}
            showTitle={true && showSubTypeTitles}
            disabled={
              selectedTypes &&
              selectedTypes.filter(
                (selectedType) =>
                  selectedType === 'Economy' ||
                  selectedType === 'Environment' ||
                  selectedType === 'Social'
              ).length >= 5
            }
          />
        ))}
      </>
    )
  } else {
    return (
      <Box>
        {showTitle && (
          <Typography style={{ color: interestColors[type.name] }}>
            {type.name}
          </Typography>
        )}
        <Box>
          {type.Interests.map((interest) => {
            return (
              <Box
                key={interest.id}
                style={{ display: columns ? 'block' : 'inline' }}
              >
                <Interest
                  interest={interest}
                  type={type.name}
                  onSelectedInterestsChange={onSelectedInterestsChange}
                  SDGLogo={SDGLogo}
                  selected={
                    selectedInterests && selectedInterests.includes(interest.id)
                  }
                  disabled={
                    disabled ||
                    (selectedTypes &&
                      selectedTypes.filter(
                        (selectedType) => selectedType === type.name
                      ).length >= 5)
                  }
                />
              </Box>
            )
          })}
        </Box>
      </Box>
    )
  }
}
