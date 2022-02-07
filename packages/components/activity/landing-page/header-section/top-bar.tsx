import React, { FC } from 'react'

import { Box, IconButton } from '@material-ui/core'
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles'
import { Close as CloseIcon } from '@material-ui/icons'

import { DeleteButton } from '@acter/components/acter/landing-page/header-section/delete-button'
import { EditButton } from '@acter/components/acter/landing-page/header-section/edit-button'
import { ActionButton } from '@acter/lib/constants'
import { useUser } from '@acter/lib/user/use-user'
import { Acter } from '@acter/schema'

export interface TopBarProps {
  actionButtons?: ActionButton[]
  setAction?: React.Dispatch<React.SetStateAction<ActionButton>>
  acter?: Acter
  handleClose?: () => void
}

export const TopBar: FC<TopBarProps> = ({
  actionButtons,
  acter,
  handleClose,
}) => {
  const classes = useStyles()
  const { user } = useUser()

  const onClose = () => {
    handleClose()
  }

  return (
    <Box className={classes.root}>
      <Box className={classes.buttonsSection}>
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
  )
}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      height: theme.spacing(6.2),
      padding: 5,
      display: 'flex',
      justifyContent: 'flex-end',
      alignItems: 'center',
      backgroundColor: theme.palette.secondary.main,
      color: theme.palette.secondary.contrastText,
    },
    buttonsSection: {
      display: 'flex',
      alignItems: 'center',
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
