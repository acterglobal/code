import React, { FC } from 'react'
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles'
import { grey } from '@material-ui/core/colors'
import { Box } from '@material-ui/core'
import Paper from '@material-ui/core/Paper'
import Divider from '@material-ui/core/Divider'
import { MessageBox } from 'src/components/messages'
import { Message } from '@schema'

export interface MessagesProps {
  message: Message
}

export const Messages: FC<MessagesProps> = ({ message }) => {
  const classes = useStyles()

  return (
    <Box className={classes.root}>
      <Paper>
        <Box className={classes.mainContainer}>
          <Box className={classes.contentContainer}>
            <MessageBox message={message} />
          </Box>

          <Divider className={classes.divider} />

          {message.Comments.map((comment, index) => (
            <Box key={index} className={classes.contentContainer}>
              <MessageBox message={comment} comment />
            </Box>
          ))}
        </Box>
      </Paper>
    </Box>
  )
}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      background: 'white',
      width: 800,
    },
    mainContainer: {
      width: 700,
      display: 'flex',
      flexWrap: 'wrap',
      padding: theme.spacing(0.8),
      [theme.breakpoints.down('xs')]: {
        width: 300,
      },
    },
    contentContainer: {
      display: 'flex',
      flexDirection: 'row',
      padding: theme.spacing(3),
      [theme.breakpoints.down('xs')]: {
        width: 300,
      },
    },
    divider: {
      color: grey[700],
      marginLeft: '30px',
      width: '95%',
      height: '2px',
    },
  })
)
