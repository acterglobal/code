import React, { FC } from 'react'
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles'
import { grey } from '@material-ui/core/colors'
import { Box, Typography } from '@material-ui/core'
import Paper from '@material-ui/core/Paper'
import Divider from '@material-ui/core/Divider'
import Image from 'next/image'
import { getImageUrl } from 'src/lib/images/get-image-url'
import { Acter, Message } from '@schema'

export interface MessageBoxProps {
  message: Message
  comments: Message[]
  acter: Acter
}

export const MessageBox: FC<MessageBoxProps> = ({
  acter,
  message,
  comments,
}) => {
  const classes = useStyles()

  console.log('This is something', comments)

  return (
    <Box className={classes.root}>
      <Paper>
        <Box className={classes.mainContainer}>
          <Box className={classes.contentContainer}>
            <Box className={classes.image}>
              <Image
                src={getImageUrl(message.Author.avatarUrl, 'avatar')}
                alt={message.Author.name}
                layout="responsive"
                width="50"
                height="50"
              />
            </Box>
            <Box className={classes.postContainer}>
              <Typography variant="subtitle1" className={classes.title}>
                {message.Author.name}
              </Typography>
              <Typography
                className={classes.acterTypeName}
                variant="body2"
                gutterBottom
              >
                {acter.name}
              </Typography>
              <Typography variant="caption" className={classes.description}>
                {message.content}
              </Typography>
            </Box>
          </Box>

          <Divider className={classes.divider} />

          {/* Comments Section */}
          {/* Need to map through several comments */}
          {comments.map((comment, index) => (
            <Box key={index} className={classes.contentContainer}>
              <Box className={classes.image}>
                <Image
                  src={getImageUrl(message.Author.avatarUrl, 'avatar')}
                  alt={acter.name}
                  layout="responsive"
                  width="50"
                  height="50"
                />
              </Box>
              <Box className={classes.commentContainer}>
                <Box>
                  <Typography variant="subtitle1" className={classes.title}>
                    {message.Author.name}
                  </Typography>
                  <Typography
                    className={classes.acterTypeName}
                    variant="body2"
                    gutterBottom
                  >
                    {comment.Acter.name}
                  </Typography>
                </Box>
                <Box>
                  <Typography variant="caption" className={classes.description}>
                    {comment.content}
                  </Typography>
                </Box>
              </Box>
            </Box>
          ))}

          {/* To do Capture comments/posts */}
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
    image: {
      // marginLeft: theme.spacing(2),
      marginRight: theme.spacing(3),
      objectFit: 'cover',
      border: '1px solid black',
      width: 30,
      height: 30,
      padding: theme.spacing(0.8),
      borderRadius: '50%',
      [theme.breakpoints.down('xs')]: {
        display: 'none',
      },
    },
    postContainer: {
      backgroundColor: 'white',
      borderRadius: 7,
      width: '90%',
      padding: theme.spacing(1),
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'flex-start',
    },
    contentContainer: {
      display: 'flex',
      flexDirection: 'row',
      padding: theme.spacing(3),
      [theme.breakpoints.down('xs')]: {
        width: 300,
      },
    },
    postSection: {
      display: 'flex',
      flexDirection: 'column',
      marginLeft: theme.spacing(9),
    },
    postContentContainer: {
      margin: theme.spacing(1),
      width: 700,
      padding: theme.spacing(0.8),
      display: 'flex',
      flexDirection: 'row',
      alignItems: 'center',
    },
    commentContainer: {
      backgroundColor: grey[200],
      borderRadius: 7,
      width: 400,
      padding: theme.spacing(1),
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'flex-start',
    },
    divider: {
      color: grey[700],
      marginLeft: '30px',
      width: '90%',
      height: '2px',
    },
    textInput: {
      width: '90%',
      fontSize: '0.5rem',
      marginBottom: 20,
      color: theme.palette.secondary.light,
    },
    acterType: {
      display: 'flex',
      alignItems: 'center',
      marginBottom: theme.spacing(1),
    },
    acterTypeName: {
      color: grey[700],
      fontWeight: theme.typography.fontWeightLight,
      fontSize: 13,
      textTransform: 'capitalize',
    },
    title: {
      color: grey[700],
      fontWeight: theme.typography.fontWeightMedium,
      marginBottom: 0,
      lineHeight: 1,
    },
    // descriptionSection: {
    //   width: 400,
    //   height: 20,
    //   display: 'flex',
    //   alignItems: 'flex-end',
    // },
    description: {
      color: grey[800],
      display: '-webkit-box',
      boxOrient: 'vertical',
      wordBreak: 'break-all',
      overflow: 'hidden',
      width: '90%',
    },
  })
)
