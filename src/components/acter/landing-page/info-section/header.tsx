import React, { FC } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { Typography } from '@material-ui/core'

const useStyles = makeStyles(() => ({
  title: {
    fontSize: '1.6rem',
    marginBottom: '20px',
  },
  description: {
    fontSize: 12,
    lineHeight: 1.8,
    marginBottom: '20px',
  },
}))

export interface headerProps {
  title: string
  description: string
}

export const Header: FC<headerProps> = ({ title, description }) => {
  const classes = useStyles()
  return (
    <>
      <Typography variant="h3" className={classes.title}>
        {title}
      </Typography>
      <Typography variant="body2" component="p" className={classes.description}>
        {description}
      </Typography>
    </>
  )
}
