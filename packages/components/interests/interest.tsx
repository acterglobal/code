import React, { FC } from 'react'
import { Interest as InterestType } from '@acter/schema/types'
import { Box, Typography } from '@material-ui/core'
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles'
import Image from 'next/image'
import clsx from 'clsx'
import { Size } from '@acter/lib/constants'

type CustomStyles = {
  type: string
  size: Size
}

export interface InterestProps {
  interest: InterestType
  type: string
  selected?: boolean
  disabled?: boolean
  chipSize?: Size
  onSelectedInterestsChange?: (interest: string, type: string) => void
}

export const Interest: FC<InterestProps> = ({
  interest,
  type,
  selected = true,
  disabled = false,
  chipSize,
  onSelectedInterestsChange,
}) => {
  console.log('SIZE ', chipSize)
  const classes = useStyles({ type, size: chipSize })

  if (!interest) {
    return null
  }

  const handleClick = () => {
    if (disabled && !selected) return null
    else onSelectedInterestsChange(interest.id, type)
  }

  return (
    <Box
      className={clsx(
        classes.chip,
        selected
          ? classes.selected
          : disabled
          ? classes.disable
          : classes.outline
      )}
      onClick={handleClick}
      role="listitem"
    >
      <Typography className={classes.name} variant="caption">
        {type === 'Tags' ? `# ${interest.name}` : interest.name}
      </Typography>

      {interest.sdgNumber && (
        <Box className={clsx(classes.rightSideBox)}>
          <Image src="assets/SDG-logo.png" alt="SDG" width={15} height={15} />
          <Typography className={classes.number} variant="caption">
            {interest.sdgNumber}
          </Typography>
        </Box>
      )}
    </Box>
  )
}

const useStyles = makeStyles((theme: Theme) => {
  return createStyles({
    chip: {
      margin: theme.spacing(0.2),
      width: ({ size }: CustomStyles) =>
        theme.spacing(size === Size.SMALL ? 18 : 23),
      height: ({ size }: CustomStyles) =>
        theme.spacing(size === Size.SMALL ? 2.6 : 3),
      border: ({ type }: CustomStyles) =>
        type === 'Tags' ? 'none' : '1px solid',
      borderRadius: theme.spacing(3),
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      cursor: 'pointer',
    },
    // TODO: refactor to use InterestType-specific classes
    outline: {
      borderColor: ({ type }: CustomStyles) => theme.colors.interestTypes[type],
      color: ({ type }: CustomStyles) => theme.colors.interestTypes[type],
    },
    selected: {
      border: ({ type }: CustomStyles) =>
        type === 'Tags' ? '1px solid' : 'none',

      borderColor: ({ type }: CustomStyles) =>
        type === 'Tags' && theme.colors.interestTypes[type],

      backgroundColor: ({ type }: CustomStyles) =>
        type !== 'Tags' ? theme.colors.interestTypes[type] : '',

      color: ({ type }: CustomStyles) =>
        type === 'Tags' ? theme.colors.interestTypes[type] : 'white',
    },
    disable: {
      color: theme.colors.grey.main,
      borderColor: theme.colors.grey.main,
      cursor: 'default',
    },
    name: {
      marginLeft: theme.spacing(1),
      fontSize: ({ size }: CustomStyles) =>
        size === Size.SMALL ? '0.6rem' : '0.7',
    },
    rightSideBox: {
      display: 'flex',
      alignItems: 'center',
    },
    number: {
      marginLeft: ({ size }: CustomStyles) =>
        theme.spacing(size === Size.SMALL ? 0.5 : 1),
      marginRight: ({ size }: CustomStyles) =>
        theme.spacing(size === Size.SMALL ? 0.5 : 1),
    },
  })
})
