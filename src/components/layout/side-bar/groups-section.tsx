import React, { FC, useState } from 'react'
import { Box, Typography } from '@material-ui/core'
import { createStyles, makeStyles, Theme } from '@material-ui/core'
import { AddRounded as AddIcon } from '@material-ui/icons'
import { AddGroup } from 'src/components/group/form'
import { GroupsList } from 'src/components/layout/side-bar/groups-list'
import { Acter, ActerType } from '@schema'
import { GROUP } from 'src/constants'
export interface GroupsSectionProps {
  acter: Acter
  acterTypes: ActerType[]
  onCreateGroup: (groupData: Acter) => void
}
export const GroupsSection: FC<GroupsSectionProps> = ({
  acter,
  acterTypes,
  onCreateGroup,
}) => {
  const classes = useStyles()
  const [openModal, setOpenModal] = useState(false)

  const groups = acter.Children.filter(
    (child) => child.ActerType.name === GROUP
  )

  const handleAddGroup = () => {
    setOpenModal(true)
  }

  return (
    <>
      <Box className={classes.heading}>
        <Typography variant="caption">Groups</Typography>
        <AddIcon
          className={classes.addIcon}
          fontSize="inherit"
          onClick={handleAddGroup}
        />
      </Box>

      <GroupsList acters={groups} />

      {openModal && (
        <AddGroup
          parentActer={acter}
          acterTypes={acterTypes}
          openModal={openModal}
          setModal={setOpenModal}
          onCreateGroup={onCreateGroup}
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
    addIcon: {
      fontSize: 20,
      cursor: 'pointer',
    },
  })
)
