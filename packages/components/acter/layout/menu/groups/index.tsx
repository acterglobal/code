import React, { FC, useState } from 'react'

import dynamic from 'next/dynamic'

import { Box, Divider, Typography } from '@material-ui/core'
import { createStyles, makeStyles, Theme } from '@material-ui/core'
import { AddRounded as AddIcon } from '@material-ui/icons'

import { GroupsList } from '@acter/components/acter/layout/menu/groups/list'
import { LoadingSpinner } from '@acter/components/atoms/loading/spinner'
import { Drawer } from '@acter/components/util/drawer'
import { getGroupsForUser } from '@acter/lib/acter/get-groups-for-user'
import { useCreateActer } from '@acter/lib/acter/use-create-acter'
import { useTranslation } from '@acter/lib/i18n/use-translation'
import { capitalize } from '@acter/lib/string/capitalize'
import { useUser } from '@acter/lib/user/use-user'
import { userHasRoleOnActer } from '@acter/lib/user/user-has-role-on-acter'
import { Acter, ActerConnectionRole } from '@acter/schema'

const AddGroup = dynamic(() =>
  import('@acter/components/group/form').then((mod) => mod.GroupForm)
)

export interface GroupsSectionProps {
  acter: Acter
}

export const GroupsSection: FC<GroupsSectionProps> = ({ acter }) => {
  const classes = useStyles()
  const [openDrawer, setOpenDrawer] = useState(false)
  const { t } = useTranslation('common')
  const handleAddGroup = () => setOpenDrawer(true)
  const handleCloseDrawer = () => setOpenDrawer(false)

  const { user, fetching: userLoading } = useUser()

  const [{ fetching: creating }, createGroup] = useCreateActer({
    onCompleted: handleCloseDrawer,
  })

  if (userLoading) return <LoadingSpinner />
  if (!user || !acter) return null

  const userCanCreateGroup = userHasRoleOnActer(
    user,
    ActerConnectionRole.MEMBER,
    acter
  )

  const groupList = getGroupsForUser(acter, user)

  return (
    <>
      <Divider className={classes.divider} />

      <Box className={classes.heading}>
        <Typography className={classes.text} variant="caption">
          {capitalize(t('acterTypes.groups'))}
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
        heading={`${t('form.create')} ${t('acterTypes.group')}`}
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
