import React, { FC } from 'react'
import {
  Box,
  Divider,
  Typography,
  makeStyles,
  createStyles,
  Theme,
} from '@material-ui/core'
import { InterestType } from '@generated/type-graphql'
import { Interest, interestColors } from 'src/components/interests/interest'
import { grey } from '@material-ui/core/colors'

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    interests: {},
    devider: {
      marginLeft: theme.spacing(3),
      marginRight: theme.spacing(0.8),
      marginTop: theme.spacing(1),
      marginBottom: theme.spacing(1),
      backgroundColor: grey[500],
    },
  })
)
export interface InterestTypesProps {
  type: InterestType
  allTypes: InterestType[]
  selectedInterests?: string[]
  selectedTypes?: string[]
  disabled?: boolean
  showTitle?: boolean
  showSubTypeTitles?: boolean
  columns?: boolean
  devider?: boolean
  onSelectedInterestsChange?: (interest: string, type: string) => void
}

export const InterestTypes: FC<InterestTypesProps> = ({
  type,
  allTypes,
  onSelectedInterestsChange,
  selectedInterests,
  selectedTypes,
  disabled,
  showTitle = false,
  showSubTypeTitles = true,
  columns = false,
  devider = false,
}) => {
  const classes = useStyles()

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
            onSelectedInterestsChange={onSelectedInterestsChange}
            selectedInterests={selectedInterests}
            selectedTypes={selectedTypes}
            showTitle={true && showSubTypeTitles}
            disabled={
              selectedTypes &&
              selectedTypes.filter(() => type.name === 'Focus').length >= 5
            }
          />
        ))}
        {type.name === 'Focus' && (
          <>
            {devider && (
              <Divider variant="middle" className={classes.devider} />
            )}
            <Box style={{ marginLeft: 25 }}>
              <Interest
                interest={type.Interests[0]}
                type={type.name}
                onSelectedInterestsChange={onSelectedInterestsChange}
                selected={
                  selectedInterests &&
                  selectedInterests.includes(type.Interests[0].id)
                }
                disabled={
                  disabled ||
                  (selectedTypes &&
                    selectedTypes.filter(() => type.name === 'Focus').length >=
                      5)
                }
              />
            </Box>
          </>
        )}
      </>
    )
  } else {
    return (
      <Box style={{ marginLeft: 25 }}>
        {showTitle && (
          <Typography style={{ color: interestColors[type.name] }}>
            {type.name}
          </Typography>
        )}
        <Box style={{ display: 'flex', flexWrap: 'wrap' }}>
          {type.Interests.map((interest) => {
            return (
              <Box
                key={interest.id}
                style={{
                  position: 'relative',
                  display: columns ? 'block' : 'inline-block',
                }}
              >
                <Interest
                  interest={interest}
                  type={type.name}
                  onSelectedInterestsChange={onSelectedInterestsChange}
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
