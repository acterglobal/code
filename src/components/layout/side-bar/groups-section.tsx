import React, { FC, useState } from 'react'
import { Box, Typography } from '@material-ui/core'
import { createStyles, makeStyles, Theme } from '@material-ui/core'
import { AddRounded as AddIcon } from '@material-ui/icons'
import { AddGroup } from 'src/components/group/form'
import { Acter, ActerType } from '@schema'
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

  const handleAddGroup = () => {
    setOpenModal(true)
  }

  return (
    <Box className={classes.root}>
      <Typography variant="caption">Groups</Typography>
      <AddIcon
        className={classes.addIcon}
        fontSize="inherit"
        onClick={handleAddGroup}
      />

      {openModal && (
        <AddGroup
          parentActer={acter}
          acterTypes={acterTypes}
          openModal={openModal}
          setModal={setOpenModal}
          onCreateGroup={onCreateGroup}
        />
      )}
    </Box>
  )
}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
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
