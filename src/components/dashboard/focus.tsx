import React, { FC } from 'react'
import { createStyles, Theme, makeStyles } from '@material-ui/core/styles'
import Chip from '@material-ui/core/Chip'

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    chipStyles: {
      width: 130,
      color: 'white',
      margin: '5px 0px 5px 0px',
      fontSize: '0.6rem',
    },
    Environment: {
      backgroundColor: 'rgb(29, 177, 0)',
    },
    Social: {
      backgroundColor: 'rgb(255, 100, 78)',
    },
    Economy: {
      backgroundColor: 'rgb(248, 186, 0)',
    },
  })
)

export interface ChipProps {
  chipContent: {
    name?: string
    title: string
    type: string
    icon?: string
    numOfPeople?: number
  }
}

const ChipComponent: FC<ChipProps> = ({ chipContent }) => {
  const classes = useStyles()
  const { name, title, type, icon, numOfPeople } = chipContent
  const label = `${title} 🌀 ${numOfPeople}`

  return (
    <Chip
      size="small"
      // label={name}
      label={label}
      className={`${classes.chipStyles} ${classes[type]}`}
    />
  )
}

export default ChipComponent
