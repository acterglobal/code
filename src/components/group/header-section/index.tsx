import React, { FC, useState } from 'react'
import {
  Box,
  createStyles,
  IconButton,
  makeStyles,
  Theme,
  Typography,
} from '@material-ui/core'
import { Acter, ActerType } from '@schema'
import { Connect, ConnectProps } from 'src/components/acter/connect'
import { GroupForm as EditGroup } from 'src/components/group/form'
import { Edit as EditIcon } from '@material-ui/icons'

export interface HeaderSectionProps extends ConnectProps {
  acter: Acter
  acterTypes: ActerType[]
  onGroupSubmit: (groupData: Acter) => void
}

export const HeaderSection: FC<HeaderSectionProps> = ({
  acter,
  acterTypes,
  user,
  onGroupSubmit,
  onJoin,
  onLeave,
  loading,
}) => {
  const classes = useStyles()
  const [openModal, setOpenModal] = useState(false)

  const handleClick = () => {
    setOpenModal(true)
  }

  return (
    <>
      <Box className={classes.heading}>
        <Box className={classes.titleSection}>
          <Typography className={classes.name} variant="subtitle1">
            # {acter.name}
          </Typography>
          <IconButton onClick={handleClick}>
            <EditIcon fontSize="small" />
          </IconButton>
        </Box>

        <Box>
          <Connect
            acter={acter}
            user={user}
            onJoin={onJoin}
            onLeave={onLeave}
            loading={loading}
          />
        </Box>
      </Box>

      {openModal && (
        <EditGroup
          acter={acter}
          parentActer={acter.Parent}
          acterTypes={acterTypes}
          modalHeading="Update work group"
          submitButtonLabel="Update"
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
      height: theme.spacing(7),
      borderBottom: '1px solid white',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
    },
    titleSection: {
      display: 'flex',
      alignItems: 'center',
    },
    name: {
      textTransform: 'capitalize',
      fontWeight: theme.typography.fontWeightBold,
    },
  })
)
