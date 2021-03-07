import React, { FC } from 'react'
import { Interest as InterestType } from '@generated/type-graphql'
import { Avatar, Box, Chip, Typography } from '@material-ui/core'
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles'
import Image from 'next/image'
import clsx from 'clsx'

//  TODO: put these colors in theme or somewhere
export const interestColors = {
  Economy: 'rgb(248, 186, 0)',
  Environment: 'rgb(29, 177, 0)',
  Social: 'rgb(255, 100, 78)',
  Approach: 'rgb(84, 85, 89)',
  Tags: 'black',
}
const disabledColor = '#b5b5b5'

const useStyles = makeStyles((theme: Theme) => {
  return createStyles({
    chip: {
      //   margin: 3,
      margin: theme.spacing(0.2),
      width: theme.spacing(23),
      height: theme.spacing(3),
      border: ({ type }: { type: string }) =>
        type === 'Tags' ? 'none' : '1px solid',
      borderRadius: theme.spacing(3),
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      cursor: 'pointer',
    },
    outline: {
      borderColor: ({ type }: { type: string }) => interestColors[type],
      color: ({ type }: { type: string }) => interestColors[type],
    },
    selected: {
      border: ({ type }: { type: string }) =>
        type === 'Tags' ? '1px solid' : 'none',

      borderColor: ({ type }: { type: string }) =>
        type === 'Tags' && interestColors[type],

      backgroundColor: ({ type }: { type: string }) =>
        type !== 'Tags' ? interestColors[type] : '',

      color: ({ type }: { type: string }) =>
        type === 'Tags' ? interestColors[type] : 'white',
    },
    disable: {
      color: disabledColor,
      borderColor: disabledColor,
      cursor: 'default',
    },
    name: {
      marginLeft: theme.spacing(1),
      fontSize: '0.7rem',
    },
    rightSideBox: {
      display: 'flex',
      alignItems: 'center',
    },
    number: {
      marginLeft: theme.spacing(1),
      marginRight: theme.spacing(1),
    },
  })
})

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
  const classes = useStyles({ type })

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
    >
      <Typography className={classes.name} variant="caption">
        {type === 'Tags' ? `# ${interest.name}` : interest.name}
      </Typography>

      {interest.sdgNumber && (
        <Box className={clsx(classes.rightSideBox)}>
          <Image
            src="https://acter.ams3.cdn.digitaloceanspaces.com/assets/SDG-logo.png"
            alt="SDG"
            width={15}
            height={15}
          />
          <Typography className={classes.number} variant="caption">
            {interest.sdgNumber}
          </Typography>
        </Box>
      )}
    </Box>
  )
}
