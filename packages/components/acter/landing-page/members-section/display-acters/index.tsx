import React, { FC } from 'react'

import { useRouter } from 'next/router'

import {
  List,
  Theme,
  ListItem,
  ListItemSecondaryAction,
  Button,
} from '@mui/material'
import createStyles from '@mui/styles/createStyles'
import makeStyles from '@mui/styles/makeStyles'

import { MemberDetails } from '@acter/components/acter/landing-page/members-section/display-members/member-details'
import { blueGrey } from '@acter/components/themes/colors'
import { acterAsUrl } from '@acter/lib/acter/acter-as-url'
import { ActerConnection } from '@acter/schema'

interface DisplayActersProps {
  followers: ActerConnection[]
}
export const DisplayActers: FC<DisplayActersProps> = ({ followers = [] }) => {
  const classes = useStyles()
  const router = useRouter()

  return (
    <List className={classes.list}>
      {followers.map(({ Follower }) => (
        <ListItem>
          <MemberDetails follower={Follower} />
          <ListItemSecondaryAction>
            <Button
              className={classes.button}
              onClick={() => router.push(acterAsUrl({ acter: Follower }))}
            >
              View
            </Button>
          </ListItemSecondaryAction>
        </ListItem>
      ))}
    </List>
  )
}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    list: {
      paddingLeft: theme.spacing(6.5),
      paddingRight: theme.spacing(6.5),
    },
    button: {
      backgroundColor: blueGrey.A100,
      textTransform: 'capitalize',
      color: theme.palette.secondary.main,
      fontSize: 12,
      width: theme.spacing(8.5),
    },
  })
)
