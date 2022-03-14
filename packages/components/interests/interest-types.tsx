import React, { FC } from 'react'

import { Box, Divider, Typography, Theme } from '@mui/material'
import createStyles from '@mui/styles/createStyles'
import makeStyles from '@mui/styles/makeStyles'

import { Interest } from '@acter/components/interests/interest'
import { blueGrey } from '@acter/components/themes/colors'
import { Size, InterestTypes as InterestTypeName } from '@acter/lib/constants'
import { InterestType } from '@acter/schema'

const { FOCUS, ECONOMY, ENVIRONMENT, SOCIAL } = InterestTypeName
export interface InterestTypesProps {
  type: InterestType
  allTypes: InterestType[]
  selectedInterests?: string[]
  selectedTypes?: InterestTypeName[]
  disabled?: boolean
  showDivider?: boolean
  showTitle?: boolean
  showSubTypeTitles?: boolean
  columns?: boolean
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
  showDivider = false,
  showTitle = false,
  showSubTypeTitles = true,
  columns = false,
  chipSize,
}) => {
  const typeName: string = type.name
  const classes = useStyles({ typeName })

  const subTypes = allTypes.filter(
    (subtype) => type.id === subtype.parentInterestTypeId
  )

  return (
    <>
      {subTypes.length > 0 && (
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
          {showDivider && <Divider className={classes.divider} />}
        </>
      )}
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
    </>
  )
}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    divider: {
      marginLeft: theme.spacing(3),
      marginRight: theme.spacing(0.8),
      marginTop: theme.spacing(1),
      marginBottom: theme.spacing(1),
      backgroundColor: blueGrey.A200,
    },
    title: {
      color: ({ typeName }: { typeName: string }) =>
        theme.palette.interestTypes[typeName],
    },
  })
)
