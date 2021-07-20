import React, { FC, useState } from 'react'
import { Box, Typography } from '@material-ui/core'
import { createStyles, makeStyles, Theme } from '@material-ui/core'
import { AddRounded as AddIcon } from '@material-ui/icons'
import { GroupForm as AddGroup } from '@acter/components/group/form'
import { GroupsList } from '@acter/components/layout/side-bar/groups/groups-list'
import {
  Acter,
  ActerConnectionRole,
  ActerType,
  User,
} from '@acter/schema/types'
import { ActerTypes } from '@acter/lib/constants'
import { userHasRoleOnActer } from '@acter/lib/user/user-has-role-on-acter'
export interface GroupsSectionProps {
  acter: Acter
  user: User
  acterTypes: ActerType[]
  onGroupSubmit: (groupData: Acter) => void
  handleChildAvatar?: (childActer: Acter) => void
}
export const GroupsSection: FC<GroupsSectionProps> = ({
  acter,
  acterTypes,
  onGroupSubmit,
  user,
}) => {
  const classes = useStyles()
  const [openModal, setOpenModal] = useState(false)

  const userCanCreateGroup = userHasRoleOnActer(
    user,
    ActerConnectionRole.MEMBER,
    acter
  )

  const groups = acter.Children.filter(
    (child) => child.ActerType.name === ActerTypes.GROUP
  )

  const handleAddGroup = () => {
    setOpenModal(true)
  }

  return (
    <>
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

      <GroupsList acters={groups} />

      {openModal && (
        <AddGroup
          parentActer={acter}
          acterTypes={acterTypes}
          modalHeading="Create work group"
          submitButtonLabel="Create"
          openModal={openModal}
          setModal={setOpenModal}
          onGroupSubmit={onGroupSubmit}
        />
      )}
    </>
  )
}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    heading: {
      marginTop: theme.spacing(1),
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
    },
  })
)
