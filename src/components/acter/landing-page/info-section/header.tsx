import React, { FC } from 'react'
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles'
import { Typography } from '@material-ui/core'

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    title: {
      fontSize: '1.6rem',
      marginBottom: theme.spacing(2),
    },
    description: {
      fontSize: 12,
      lineHeight: 1.8,
      marginBottom: theme.spacing(2),
    },
  })
)

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
