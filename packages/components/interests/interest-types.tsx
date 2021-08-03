import React, { FC } from 'react'
import {
  Box,
  Divider,
  Typography,
  makeStyles,
  createStyles,
  Theme,
} from '@material-ui/core'
import { InterestType } from '@acter/schema/types'
import { Interest } from '@acter/components/interests/interest'
import { Size, InterestTypes as InterestTypeName } from '@acter/lib/constants'

const { FOCUS, ECONOMY, ENVIRONMENT, SOCIAL } = InterestTypeName
export interface InterestTypesProps {
  type: InterestType
  allTypes: InterestType[]
  selectedInterests?: string[]
  selectedTypes?: InterestTypeName[]
  disabled?: boolean
  showTitle?: boolean
  showSubTypeTitles?: boolean
  columns?: boolean
  divider?: boolean
  chipSize?: Size
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
  divider: divider = false,
  chipSize,
}) => {
  const typeName: string = type.name
  const classes = useStyles({ typeName })

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
              selectedTypes.filter((selectedType) =>
                [FOCUS, ENVIRONMENT, SOCIAL, ECONOMY].includes(selectedType)
              ).length >= 5
            }
            chipSize={chipSize}
            columns={columns}
          />
        ))}
        {type.name === FOCUS && (
          <>
            {divider && (
              <Divider variant="middle" className={classes.divider} />
            )}
            <Box ml={3}>
              <Interest
                interest={type.Interests[0]}
                type={type.name}
                chipSize={chipSize}
                onSelectedInterestsChange={onSelectedInterestsChange}
                selected={
                  selectedInterests &&
                  selectedInterests.includes(type.Interests[0].id)
                }
                disabled={
                  disabled ||
                  (selectedTypes &&
                    selectedTypes.filter((selectedType) =>
                      [FOCUS, ENVIRONMENT, SOCIAL, ECONOMY].includes(
                        selectedType
                      )
                    ).length >= 5)
                }
              />
            </Box>
          </>
        )}
      </>
    )
  } else {
    return (
      <Box ml={columns ? 0 : 3} role="list">
        {showTitle && (
          <Typography className={classes.title}>{type.name}</Typography>
        )}
        <Box
          style={
            columns
              ? { display: 'flex', flexDirection: 'column' }
              : { display: 'flex', flexWrap: 'wrap' }
          }
        >
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
                  type={type.name as InterestTypeName}
                  chipSize={chipSize}
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

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    divider: {
      marginLeft: theme.spacing(3),
      marginRight: theme.spacing(0.8),
      marginTop: theme.spacing(1),
      marginBottom: theme.spacing(1),
      backgroundColor: theme.colors.grey.main,
    },
    title: {
      color: ({ typeName }: { typeName: string }) =>
        theme.colors.interestTypes[typeName],
    },
  })
)
