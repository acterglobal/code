import React, { FC, useState } from 'react'
import { Box, Typography } from '@material-ui/core'
import { makeStyles, Theme } from '@material-ui/core/styles'
import Markdown from 'markdown-to-jsx'
import { Message } from '@schema'

export interface MessageBoxProps {
  message: Message
}

export const MessageBox: FC<MessageBoxProps> = ({ message }) => {
  const classes = useStyles()

  console.log('This is something', message)

  return (
    <>
      <Typography className={classes.heading} variant="h6">
        <Markdown>{message.subject}</Markdown>
        hello message
      </Typography>
      <Box className={classes.description}>
        <Typography variant="caption">
          <Markdown>{message.content}</Markdown>
          test here
        </Typography>
      </Box>
    </>
  )
}

const useStyles = makeStyles((theme: Theme) => ({
  heading: {
    fontWeight: 'bolder',
    fontSize: '0.9rem',
  },
  description: {
    fontSize: '0.7rem',
    lineHeight: '0.05rem',
    color: theme.palette.secondary.main,
    marginBottom: 5,
  },
}))
