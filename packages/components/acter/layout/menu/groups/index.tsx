import React, { FC, useState } from 'react'

import dynamic from 'next/dynamic'

import { Box, Divider, Typography } from '@material-ui/core'
import { createStyles, makeStyles, Theme } from '@material-ui/core'
import { AddRounded as AddIcon } from '@material-ui/icons'

import { GroupsList } from '@acter/components/acter/layout/menu/groups/list'
import { LoadingSpinner } from '@acter/components/atoms/loading/spinner'
import { Drawer } from '@acter/components/util/drawer'
import { useActer } from '@acter/lib/acter/use-acter'
import { useCreateActer } from '@acter/lib/acter/use-create-acter'
import { ActerTypes } from '@acter/lib/constants'
import { useUser } from '@acter/lib/user/use-user'
import { userHasRoleOnActer } from '@acter/lib/user/user-has-role-on-acter'
import { ActerConnectionRole, ActerPrivacySettings } from '@acter/schema'

const AddGroup = dynamic(() =>
  import('@acter/components/group/form').then((mod) => mod.GroupForm)
)

export const GroupsSection: FC = () => {
  const classes = useStyles()
  const [openDrawer, setOpenDrawer] = useState(false)

  const handleAddGroup = () => setOpenDrawer(true)
  const handleCloseDrawer = () => setOpenDrawer(false)

  const { acter, fetching: acterLoading } = useActer({ fetchParent: true })
  const { user, fetching: userLoading } = useUser()

  const [{ fetching: creating }, createGroup] = useCreateActer({
    onCompleted: handleCloseDrawer,
  })

  if (acterLoading || userLoading) return <LoadingSpinner />
  if (!user || !acter) return null

  const userCanCreateGroup = userHasRoleOnActer(
    user,
    ActerConnectionRole.MEMBER,
    acter
  )

  const groups = acter?.Parent?.ActerType.name
    ? acter?.Parent?.Children?.filter(
        (child) => child.ActerType.name === ActerTypes.GROUP
      )
    : acter.Children?.filter(
        (child) => child.ActerType.name === ActerTypes.GROUP
      )

  const activeGroups = groups?.filter((group) => group.deletedAt === null)

  const publicActiveGroups = activeGroups?.filter((group) =>
    [ActerPrivacySettings.PUBLIC].includes(
      group.acterPrivacySetting as ActerPrivacySettings
    )
  )

  const privateActiveGroups = activeGroups?.filter((group) => {
    const userGroups = user.Acter.Following.filter(
      (follow) => follow.Following.id === group.id
    )
    return (
      userGroups.length !== 0 &&
      [ActerPrivacySettings.PRIVATE].includes(
        group.acterPrivacySetting as ActerPrivacySettings
      )
    )
  })

  const groupList = [...publicActiveGroups, ...privateActiveGroups]

  return (
    <>
      <Divider className={classes.divider} />

      <Box className={classes.heading}>
        <Typography className={classes.text} variant="caption">
          Groups
        </Typography>
        {userCanCreateGroup && (
          <AddIcon
            className={classes.addIcon}
            fontSize="inherit"
            onClick={handleAddGroup}
          />
        )}
      </Box>

      <GroupsList acters={groupList} />

      <Drawer
        open={openDrawer}
        heading="Create work group"
        handleClose={handleCloseDrawer}
      >
        <AddGroup
          parentActer={acter}
          onSubmit={createGroup}
          saving={creating}
        />
      </Drawer>
    </>
  )
}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    divider: {
      marginTop: theme.spacing(1.5),
    },
    heading: {
      marginLeft: theme.spacing(2),
      marginRight: theme.spacing(2),
      display: 'flex',
      justifyContent: 'space-between',
    },
    text: {
      fontWeight: theme.typography.fontWeightLight,
      color: theme.palette.secondary.contrastText,
    },
    addIcon: {
      fontSize: 20,
      cursor: 'pointer',
      color: theme.palette.secondary.contrastText,
      '&:hover': {
        color: theme.colors.white,
      },
    },
  })
)
