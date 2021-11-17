import React, { FC } from 'react'

import { useRouter } from 'next/router'

import {
  createStyles,
  makeStyles,
  List,
  Theme,
  ListItem,
  ListItemSecondaryAction,
  Button,
} from '@material-ui/core'

import { MemberDetails } from '@acter/components/acter/landing-page/members-section/display-members/member-details'
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
      backgroundColor: theme.colors.grey.extraLight,
      textTransform: 'capitalize',
      color: theme.palette.secondary.main,
      fontSize: 12,
    },
  })
)
