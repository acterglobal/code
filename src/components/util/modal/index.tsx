import React, { FC, useState } from 'react'
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles'
import { Modal as MUIModal, Backdrop, Fade } from '@material-ui/core'
import { CloseRounded as CloseButtonIcon } from '@material-ui/icons'
import { grey } from '@material-ui/core/colors'

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    modal: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    },
    closeButton: {
      backgroundColor: 'white',
      height: theme.spacing(5),
      width: theme.spacing(5),
      padding: theme.spacing(1),
      borderRadius: '50%',
      marginLeft: theme.spacing(-2),
      marginTop: theme.spacing(-2.5),
      cursor: 'pointer',
      zIndex: 99,
      color: grey[800],
      '&:hover': {
        color: grey[600],
      },
    },
    paper: {
      outline: 0,
      backgroundColor: theme.palette.background.paper,
      boxShadow: theme.shadows[5],
      borderRadius: theme.spacing(2),
      overflow: 'hidden',
    },
    modalContainer: {
      display: 'flex',
      outline: 'none',
    },
  })
)

export interface ModalProps {
  children: React.ReactNode
  showCloseButton?: boolean
  handleModalClose?: () => void
  disableBackdropClick?: boolean
}

export const Modal: FC<ModalProps> = (props) => {
  const {
    children,
    handleModalClose,
    disableBackdropClick = true,
    showCloseButton = true,
  } = props
  const classes = useStyles()
  const [open, setOpen] = useState(true)

  //   const handleOpen = () => setOpen(true)

  const handleClose = () => {
    setOpen(false)
    handleModalClose()
  }

  return (
    <div>
      <MUIModal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        className={classes.modal}
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{ timeout: 500 }}
        disableBackdropClick={disableBackdropClick}
      >
        <Fade in={open}>
          <div className={classes.modalContainer}>
            <div className={classes.paper}>{children}</div>

            {showCloseButton && (
              <CloseButtonIcon
                className={classes.closeButton}
                onClick={handleClose}
              />
            )}
          </div>
        </Fade>
      </MUIModal>
    </div>
  )
}
