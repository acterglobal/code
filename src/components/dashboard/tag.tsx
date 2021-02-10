import React, { FC } from 'react'
import { createStyles, Theme, makeStyles } from '@material-ui/core/styles'
import Chip from '@material-ui/core/Chip'

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    chipStyles: {
      width: 130,
      borderColor: 'black',
      //   color: 'white',
      margin: '5px 0px 5px 0px',
      fontSize: '0.6rem',
    },
    environment: {
      //   color: 'rgb(29, 177, 0)',
    },
    social: {
      //   color: 'rgb(255, 100, 78)',
    },
    economy: {
      //   color: 'rgb(248, 186, 0)',
    },
  })
)

export interface ChipProps {
  chipContent: {
    title: string
    type: string
    icon?: string
    numOfPeople?: number
  }
}

const ChipComponent: FC<ChipProps> = ({ chipContent }) => {
  const classes = useStyles()
  //   const { title, type, icon, numOfPeople } = chipContent
  //   const label = `${title} 🌀 ${numOfPeople}`

  return (
    <Chip
      size="small"
      variant="outlined"
      label="AntiRacism"
      className={classes.chipStyles}
    />
  )
}

export default ChipComponent
