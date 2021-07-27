import React, { FC, useState } from 'react'
import {
  Box,
  createStyles,
  IconButton,
  makeStyles,
  Theme,
  Typography,
} from '@material-ui/core'
import { Link } from '@acter/components/util/anchor-link'
import { Acter, ActerType } from '@acter/schema/types'
import { acterAsUrl } from '@acter/lib/acter/acter-as-url'
import { userHasRoleOnActer } from '@acter/lib/user/user-has-role-on-acter'
import { ActerConnectionRole } from '@acter/schema/types'
import { Connect, ConnectProps } from '@acter/components/acter/connect'
import { GroupForm as EditGroup } from '@acter/components/group/form'
import { Edit as EditIcon, Delete as DeleteIcon } from '@material-ui/icons'
import { capitalize } from 'lodash'

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

  const isAdmin = userHasRoleOnActer(user, ActerConnectionRole.ADMIN, acter)

  return (
    <>
      <Box className={classes.heading}>
        <Box className={classes.titleSection}>
          <Typography className={classes.name} variant="subtitle1">
            # {capitalize(acter.name)}
          </Typography>

          {isAdmin && (
            <>
              <IconButton onClick={handleClick}>
                <EditIcon fontSize="small" />
              </IconButton>
              <Link href={`${acterAsUrl(acter)}/delete`}>
                <IconButton>
                  <DeleteIcon />
                </IconButton>
              </Link>
            </>
          )}
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
      fontWeight: theme.typography.fontWeightBold,
    },
  })
)
