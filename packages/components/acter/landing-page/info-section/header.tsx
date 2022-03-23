import React, { FC } from 'react'

import { Typography } from '@mui/material'
import { Theme } from '@mui/material/styles'
import createStyles from '@mui/styles/createStyles'
import makeStyles from '@mui/styles/makeStyles'

import MarkDown from 'markdown-to-jsx'

export interface InfoSectionHeaderProps {
  title: string
  description: string
}

export const Header: FC<InfoSectionHeaderProps> = ({ title, description }) => {
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
      color: theme.palette.grey[900],
    },
    description: {
      fontSize: '0.813rem',
      lineHeight: 1.8,
      marginBottom: theme.spacing(2),
    },
  })
)
