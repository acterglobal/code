import React, { FC } from 'react'

import { makeStyles, Theme, Divider, Typography, List } from '@material-ui/core'

import { DisplayMemberItem } from '@acter/components/acter/landing-page/members-section/display-members/display-member-item'
import { useTranslation } from '@acter/lib/i18n/use-translation'
import { capitalize } from '@acter/lib/string/capitalize'
import { ActerConnection, ActerConnectionRole } from '@acter/schema'

const { ADMIN, MEMBER } = ActerConnectionRole
export interface DisplayMembersProps {
  /**
   * The list of acters we are displaying
   */
  followers: ActerConnection[]
  /**
   * Method to open user side panel drawer
   */
  handleOpenSidePanel?: (data: string) => void
}

export const DisplayMembers: FC<DisplayMembersProps> = ({
  followers = [],
  handleOpenSidePanel,
}) => {
  const classes = useStyles()
  const { t } = useTranslation('common')

  const admins = followers.filter(({ role }) => role === ADMIN)
  const members = followers.filter(({ role }) => role === MEMBER)

  return (
    <List className={classes.list}>
      <Typography className={classes.heading}>
        {capitalize(t('admins'))}
      </Typography>
      {admins.map((connection) => (
        <DisplayMemberItem
          key={`follower-${connection.Follower.id}`}
          Follower={connection.Follower}
          connection={connection}
          handleOpenSidePanel={handleOpenSidePanel}
        />
      ))}

      <Divider classes={{ root: classes.divider }} />

      {members && (
        <>
          <Typography className={classes.heading}>
            {capitalize(t('members'))}
          </Typography>
          {members.map((connection) => (
            <DisplayMemberItem
              key={`follower-${connection.Follower.id}`}
              Follower={connection.Follower}
              connection={connection}
              handleOpenSidePanel={handleOpenSidePanel}
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
    color: theme.colors.grey.dark,
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
