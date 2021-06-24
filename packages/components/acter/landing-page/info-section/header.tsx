import React, { FC } from 'react'
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles'
import { Typography } from '@material-ui/core'
import MarkDown from 'markdown-to-jsx'

export interface headerProps {
  title: string
  description: string
}

export const Header: FC<headerProps> = ({ title, description }) => {
  const classes = useStyles()
  return (
    <>
      <Typography variant="h6" className={classes.title}>
        {title}
      </Typography>
      <Typography variant="body2" component="p" className={classes.description}>
        <MarkDown>{description}</MarkDown>
      </Typography>
    </>
  )
}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    title: {
      fontWeight: 600,
      marginBottom: theme.spacing(2),
      textTransform: 'capitalize',
    },
    description: {
      fontSize: 12,
      lineHeight: 1.8,
      marginBottom: theme.spacing(2),
    },
  })
)
