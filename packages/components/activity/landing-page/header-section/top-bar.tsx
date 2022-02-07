import React, { FC, useState } from 'react'

import { useRouter } from 'next/router'

import { Box, IconButton } from '@material-ui/core'
import { Breadcrumbs, Typography } from '@material-ui/core'
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles'
import { Close as CloseIcon } from '@material-ui/icons'
import { NavigateNext as NavigateNextIcon } from '@material-ui/icons'

import { DeleteButton } from '@acter/components/acter/landing-page/header-section/delete-button'
import { EditButton } from '@acter/components/acter/landing-page/header-section/edit-button'
import { Link } from '@acter/components/util/anchor-link'
import { acterAsUrl } from '@acter/lib/acter/acter-as-url'
import { ActionButton } from '@acter/lib/constants'
import { capitalize } from '@acter/lib/string/capitalize'
import { useUser } from '@acter/lib/user/use-user'
import { Acter } from '@acter/schema'

export interface TopBarProps {
  actionButtons?: ActionButton[]
  acter?: Acter
  handleClose?: () => void
}

export const TopBar: FC<TopBarProps> = ({
  actionButtons,
  acter,
  handleClose,
}) => {
  const classes = useStyles()
  const router = useRouter()
  const { user } = useUser()
  const [localRoute] = useState(router.query.localRoute)

  const onClose = () => {
    handleClose()
  }

  return (
    <Box className={classes.root}>
      <Box className={classes.buttonsContainer}>
        {localRoute ? (
          <Breadcrumbs
            separator={
              <NavigateNextIcon fontSize="small" className={classes.icon} />
            }
            aria-label="breadcrumb"
          >
            <Link href={`${acterAsUrl({ acter: acter?.Parent })}`}>
              <Typography className={classes.name}>
                # {capitalize(acter?.Parent.name)}
              </Typography>
            </Link>

            <Link href={`${acterAsUrl({ acter: acter?.Parent })}/activities`}>
              <Typography className={classes.activities}>Activities</Typography>
            </Link>

            <Link href={acter && acterAsUrl({ acter })}>
              <Typography className={classes.name}>
                # {capitalize(acter.name)}
              </Typography>
            </Link>
          </Breadcrumbs>
        ) : (
          <Breadcrumbs
            separator={
              <NavigateNextIcon fontSize="small" className={classes.icon} />
            }
            aria-label="breadcrumb"
          >
            <Link href="javascript:history.go(-1)">
              <Typography className={classes.name}># {'back'}</Typography>
            </Link>

            <Link href={acter && acterAsUrl({ acter })}>
              <Typography className={classes.name}>
                # {capitalize(acter.name)}
              </Typography>
            </Link>
          </Breadcrumbs>
        )}
      </Box>
      <Box className={classes.buttonsContainer}>
        <Box className={classes.actionButtonsSection}>
          {actionButtons && acter?.createdByUserId === user?.id && (
            <>
              <EditButton />
              <DeleteButton />
            </>
          )}

          <IconButton className={classes.button} onClick={onClose}>
            <CloseIcon />
          </IconButton>
        </Box>
      </Box>
    </Box>
  )
}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      backgroundColor: theme.palette.secondary.main,
      display: 'flex',
      justifyContent: 'space-between',
      width: '100%',
    },
    buttonsContainer: {
      height: theme.spacing(6.2),
      padding: 5,
      display: 'flex',
      justifyContent: 'flex-end',
      alignItems: 'center',
      color: theme.palette.secondary.contrastText,
    },
    actionButtonsSection: {
      display: 'flex',
      alignItems: 'center',
    },
    icon: {
      color: theme.palette.secondary.contrastText,
    },
    name: {
      marginLeft: '10px',
      fontWeight: theme.typography.fontWeightMedium,
      fontSize: 14,
      color: theme.palette.secondary.contrastText,
    },
    activities: {
      fontWeight: theme.typography.fontWeightMedium,
      fontSize: 14,
      color: theme.palette.secondary.contrastText,
    },
    button: {
      textTransform: 'none',
      height: 30,
      fontSize: '0.8rem',
      color: theme.palette.secondary.contrastText,
      borderColor: theme.palette.secondary.contrastText,
    },
  })
)
