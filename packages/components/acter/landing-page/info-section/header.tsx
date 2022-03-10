import React, { FC } from 'react'

import { Typography } from '@mui/material'
import { Theme } from '@mui/material/styles';

import makeStyles from '@mui/styles/makeStyles';
import createStyles from '@mui/styles/createStyles';

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
        {description && <MarkDown>{description}</MarkDown>}
      </Typography>
    </>
  )
}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    title: {
      fontWeight: 600,
      marginBottom: theme.spacing(2),
      color: theme.colors.content.title,
    },
    description: {
      fontSize: '0.813rem',
      lineHeight: 1.8,
      marginBottom: theme.spacing(2),
    },
  })
)
