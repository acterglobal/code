import React, { FC } from 'react'
import {
  ListItem,
  Divider,
  ListItemAvatar,
  createStyles,
  makeStyles,
  Theme,
} from '@material-ui/core'
import { SettingsOutlined as SettingsIcon } from '@material-ui/icons'
import { ForumIcon, MembersIcon, ActivitiesIcon } from 'src/components/icons'
import { userHasRoleOnActer } from 'src/lib/user/user-has-role-on-acter'
import { ActerAvatar } from 'src/components/acter/avatar'
import { ActerMenuItem } from 'src/components/layout/side-bar/acter-menu-item'
import { commonStyles } from 'src/components/layout/side-bar/common'
import { ActerConnectionRole, User } from '@schema'
import { ACTIVITIES, FORUM, MEMBERS, SETTINGS } from 'src/constants'
import {
  GroupsSection,
  GroupsSectionProps,
} from 'src/components/layout/side-bar/groups-section'

export type ActerMenuProps = GroupsSectionProps & { user: User }

export const ActerMenu: FC<ActerMenuProps> = ({
  acter,
  user,
  acterTypes,
  onGroupSubmit,
}) => {
  if (!acter) return null
  const classes = useStyles()

  return (
    <>
      <ListItem divider className={classes.acterHeaderItem}>
        <ListItemAvatar>
          <ActerAvatar acter={acter} size={4} />
        </ListItemAvatar>
      </ListItem>
      <ActerMenuItem acter={acter} Icon={ForumIcon} path={FORUM} />
      <ActerMenuItem acter={acter} Icon={ActivitiesIcon} path={ACTIVITIES} />
      <ActerMenuItem acter={acter} Icon={MembersIcon} path={MEMBERS} />
      {userHasRoleOnActer(user, ActerConnectionRole.ADMIN, acter) && (
        <ActerMenuItem acter={acter} Icon={SettingsIcon} path={SETTINGS} />
      )}
      <Divider />

      <GroupsSection
        acter={acter}
        user={user}
        acterTypes={acterTypes}
        onGroupSubmit={onGroupSubmit}
      />
    </>
  )
}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    ...commonStyles(theme),
    acterHeaderItem: {
      display: 'flex',
      justifyContent: 'center',
      borderColor: theme.palette.secondary.contrastText,
    },
  })
)
