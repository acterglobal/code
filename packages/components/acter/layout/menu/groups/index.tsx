import React, { FC, useState } from 'react'

import dynamic from 'next/dynamic'

import { Box, Divider, Typography } from '@material-ui/core'
import { createStyles, makeStyles, Theme } from '@material-ui/core'
import { AddRounded as AddIcon } from '@material-ui/icons'

import { GroupsList } from '@acter/components/acter/layout/menu/groups/list'
import { ActerTypes } from '@acter/lib/constants'
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
  const [openModal, setOpenModal] = useState(false)

  const { user } = useUser()
  if (!user) return null

  const userCanCreateGroup = userHasRoleOnActer(
    user,
    ActerConnectionRole.MEMBER,
    acter
  )

  const groups = acter.Children.filter(
    (child) => child.ActerType.name === ActerTypes.GROUP
  )

  const activeGroups = groups.filter((group) => group.deletedAt === null)

  const handleAddGroup = () => {
    setOpenModal(true)
  }

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

      <GroupsList acters={activeGroups} />

      {openModal && (
        <AddGroup
          parentActer={acter}
          modalHeading="Create work group"
          submitButtonLabel="Create"
          openModal={openModal}
          setModal={setOpenModal}
        />
      )}
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