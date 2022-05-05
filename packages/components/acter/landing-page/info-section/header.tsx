import React, { FC } from 'react'

import { Typography } from '@material-ui/core'
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles'

import { SantizedContent } from '@acter/components/molecules/sanitized-content'

export interface headerProps {
  title: string
  description: string
  isMarkDown: boolean
}

export const Header: FC<headerProps> = ({ title, description, isMarkDown }) => {
  const classes = useStyles()

  const acterDescription = SantizedContent(description, isMarkDown)

  return (
    <>
      <Typography variant="h6" className={classes.title}>
        {title}
      </Typography>
      <Typography variant="body2" component="p" className={classes.description}>
        {description && acterDescription}
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
