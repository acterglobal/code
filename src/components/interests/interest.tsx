import React, { FC } from 'react'
import { InterestType } from '@generated/type-graphql'
import { Box, Chip } from '@material-ui/core'
import { makeStyles, Theme } from '@material-ui/core/styles'

//  TODO: put these colors in theme or somewhere
export const interestColors = {
  Economy: 'rgb(248, 186, 0)',
  Environment: 'rgb(29, 177, 0)',
  Social: 'rgb(255, 100, 78)',
  Approach: 'rgb(84, 85, 89)',
  Tags: 'black',
}
const disabledColor = '#b5b5b5'

const useStyles = makeStyles((theme: Theme) => ({
  container: {
    margin: 3,
  },
  chip: {
    cursor: 'pointer',
    width: 150,
    height: 22,
    fontSize: '0.7rem',
    letterSpacing: '0.02rem',
  },
}))

export interface InterestProps {
  interest: InterestType
  type: string
  selected?: boolean
  disabled?: boolean
  onSelectedInterestsChange?: (interest: string, type: string) => void
}

export const Interest: FC<InterestProps> = ({
  interest,
  type,
  selected = true,
  disabled = false,
  onSelectedInterestsChange,
}) => {
  const classes = useStyles()
  let colorStyle = {}
  let variant = false
  const disabledStyles = {
    color: disabledColor,
    borderColor: disabledColor,
    cursor: 'default',
  }

  switch (type) {
    case 'Economy':
    case 'Environment':
    case 'Social':
    case 'Approach':
      if (selected) {
        colorStyle = { backgroundColor: interestColors[type], color: 'white' }
        variant = true
      } else if (disabled) {
        colorStyle = { ...disabledStyles }
      } else {
        colorStyle = {
          color: interestColors[type],
          borderColor: interestColors[type],
        }
      }
      break

    case 'Tags':
      if (selected) {
        colorStyle = {
          color: interestColors[type],
          borderColor: interestColors[type],
        }
      } else if (disabled) {
        colorStyle = { ...disabledStyles }
      } else {
        variant = true
        colorStyle = { backgroundColor: 'white', color: 'black' }
      }
      break
  }

  const handleClick = () => {
    if (disabled && !selected) return null
    else onSelectedInterestsChange(interest.id, type)
  }

  return (
    <Box className={classes.container}>
      <Chip
        className={classes.chip}
        aria-label={interest.name}
        role="listitem"
        key={interest.id}
        label={type === 'Tags' ? `# ${interest.name}` : interest.name}
        style={{ ...colorStyle }}
        size="small"
        variant={variant ? 'default' : 'outlined'}
        onClick={handleClick}
      />
    </Box>
  )
}
