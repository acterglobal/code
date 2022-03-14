import React, { FC } from 'react'

import { Theme, Divider, Typography, List } from '@mui/material'
import makeStyles from '@mui/styles/makeStyles'

import { DisplayMemberItem } from '@acter/components/acter/landing-page/members-section/display-members/display-member-item'
import { blueGrey } from '@acter/components/themes/colors'
import { ActerConnection, ActerConnectionRole } from '@acter/schema'

const { ADMIN, MEMBER } = ActerConnectionRole
export interface DisplayMembersProps {
  /**
   * The list of acters we are displaying
   */
  followers: ActerConnection[]
}

export const DisplayMembers: FC<DisplayMembersProps> = ({ followers = [] }) => {
  const classes = useStyles()

  const admins = followers.filter(({ role }) => role === ADMIN)
  const members = followers.filter(({ role }) => role === MEMBER)

  return (
    <List className={classes.list}>
      <Typography className={classes.heading}>Admins</Typography>
      {admins.map((connection) => (
        <DisplayMemberItem
          key={`follower-${connection.Follower.id}`}
          Follower={connection.Follower}
          connection={connection}
        />
      ))}

      <Divider classes={{ root: classes.divider }} />

      {members && (
        <>
          <Typography className={classes.heading}>Members</Typography>
          {members.map((connection) => (
            <DisplayMemberItem
              key={`follower-${connection.Follower.id}`}
              Follower={connection.Follower}
              connection={connection}
            />
          ))}
        </>
      )}
    </List>
  )
}

const useStyles = makeStyles((theme: Theme) => ({
  list: {
    paddingLeft: '3%',
  },
  heading: {
    fontSize: '0.88rem',
    fontWeight: theme.typography.fontWeightMedium,
    color: blueGrey.A700,
    marginTop: theme.spacing(2),
    marginBottom: theme.spacing(1),
  },
  divider: {
    marginTop: theme.spacing(2),
    marginBottom: theme.spacing(1),
    backgroundColor: theme.palette.secondary.light,
    height: '0.12rem',
  },
}))
