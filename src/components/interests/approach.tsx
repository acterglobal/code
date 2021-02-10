import React, { FC } from 'react'
import { Chip } from '@material-ui/core'
import { makeStyles, Theme } from '@material-ui/core/styles'

import { Interest } from '@generated/type-graphql'

export interface ApproachProps {
  interest: Interest
}

const useStyles = makeStyles((theme: Theme) => ({
  chipStyles: {
    backgroundColor: theme.palette.secondary.main,
    color: 'white',
    width: 130,
    margin: '5px 10px 5px 0px',
    fontSize: '0.6rem',
  },
}))

export const Approach: FC<ApproachProps> = ({ interest }) => {
  const classes = useStyles()
  return (
    <Chip size="small" label={interest.name} className={classes.chipStyles} />
  )
}
