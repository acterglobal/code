import React, { FC } from 'react'
import { Typography } from '@material-ui/core'
import { makeStyles, Theme } from '@material-ui/core/styles'

const useStyles = makeStyles((theme: Theme) => ({
  container: {
    border: '1px solid gray',
    borderRadius: 5,
    height: 65,
    margin: 15,
  },
  title: {
    fontSize: '0.9rem',
    fontWeight: 'bold',
  },
}))

export interface ActerTypeProps {
  acterType: string
}

export const ActerType: FC<ActerTypeProps> = ({ acterType }) => {
  const classes = useStyles()
  return (
    <div className={classes.container}>
      <Typography className={classes.title} variant="h6">
        Create {acterType}
      </Typography>
    </div>
  )
}
