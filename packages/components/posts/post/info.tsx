import React, { FC } from 'react'

import { Box, Typography } from '@material-ui/core'
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles'

import { formatRelative, format, differenceInDays } from 'date-fns'

import { DD_MMM_YYYY_FORMAT } from '@acter/lib/constants'
import { parseDateOrString } from '@acter/lib/datetime/parse-date-or-string'
import { capitalize } from '@acter/lib/string/capitalize'
import { Post } from '@acter/schema'

export interface PostInfoProps {
  post: Post
}

export const PostInfo: FC<PostInfoProps> = ({ post }) => {
  const classes = useStyles()

  //@ts-ignore
  const timeStamp =
    differenceInDays(parseDateOrString(post.updatedAt), new Date()) <= -7
      ? format(parseDateOrString(post.updatedAt), DD_MMM_YYYY_FORMAT)
      : formatRelative(parseDateOrString(post.updatedAt), new Date())

  return (
    <Box>
      <Box className={classes.topSection}>
        <Typography variant="h6" className={classes.title}>
          {capitalize(post.Author.name)}
        </Typography>
        <Typography variant="body2" className={classes.timeStamp}>
          {timeStamp}
        </Typography>
      </Box>
    </Box>
  )
}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    acterTypeName: {
      color: theme.palette.secondary.main,
      fontSize: 11,
    },
    title: {
      color: theme.palette.secondary.main,
      fontWeight: theme.typography.fontWeightBold,
      fontSize: 11,
      marginBottom: 0,
      lineHeight: 1,
    },
    topSection: {
      display: 'flex',
      alignItems: 'center',
      marginBottom: theme.spacing(1),
    },
    timeStamp: {
      fontSize: 9,
      marginLeft: theme.spacing(1),
      fontWeight: theme.typography.fontWeightLight,
      color: theme.palette.secondary.main,
    },
  })
)
