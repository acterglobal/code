import React, { FC, useState } from 'react'

import {
  Box,
  createStyles,
  IconButton,
  makeStyles,
  Theme,
  Typography,
} from '@material-ui/core'
import { Edit as EditIcon, Delete as DeleteIcon } from '@material-ui/icons'

import { Connect } from '@acter/components/acter/connect'
import { GroupForm as EditGroup } from '@acter/components/group/form'
import { Link } from '@acter/components/util/anchor-link'
import { LoadingSpinner } from '@acter/components/util/loading-spinner'
import { acterAsUrl } from '@acter/lib/acter/acter-as-url'
import { useActer } from '@acter/lib/acter/use-acter'
import { capitalize } from '@acter/lib/string/capitalize'
import { useUser } from '@acter/lib/user/use-user'
import { userHasRoleOnActer } from '@acter/lib/user/user-has-role-on-acter'
import { ActerConnectionRole } from '@acter/schema'

export const HeaderSection: FC = () => {
  const classes = useStyles()
  const [openModal, setOpenModal] = useState(false)
  const { user, loading: userLoading } = useUser()
  const { acter, loading: acterLoading } = useActer()

  if (acterLoading || userLoading) return <LoadingSpinner />
  if (!acter) return null

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
              <Link href={acterAsUrl({ acter, extraPath: ['delete'] })}>
                <IconButton>
                  <DeleteIcon />
                </IconButton>
              </Link>
            </>
          )}
        </Box>

        <Box>
          <Connect />
        </Box>
      </Box>

      {openModal && (
        <EditGroup
          acter={acter}
          parentActer={acter.Parent}
          modalHeading="Update work group"
          submitButtonLabel="Update"
          openModal={openModal}
          setModal={setOpenModal}
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
