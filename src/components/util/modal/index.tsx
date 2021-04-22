import React, { FC, useState, ReactNode } from 'react'
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles'
import { Modal as MUIModal, Backdrop, Fade } from '@material-ui/core'
import { grey } from '@material-ui/core/colors'
import { TopBar } from 'src/components/util/modal/top-bar'

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    modal: {
      display: 'flex',
      justifyContent: 'flex-end',
    },
    modalContainer: {
      outline: 0,
      backgroundColor: 'white',
      overflow: 'hidden',
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
      [theme.breakpoints.down('sm')]: {
        height: theme.spacing(3),
        width: theme.spacing(3),
        padding: theme.spacing(0.5),
        marginLeft: theme.spacing(-2),
        marginTop: theme.spacing(-1.5),
      },
    },
  })
)

export interface ModalProps {
  children: ReactNode
  showCloseButton?: boolean
  handleModalClose?: (any?) => void
  disableBackdropClick?: boolean
}

export const Modal: FC<ModalProps> = (props) => {
  const { children, handleModalClose, disableBackdropClick = true } = props
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
            <TopBar handleClose={handleClose} />
            {children}
          </div>
        </Fade>
      </MUIModal>
    </div>
  )
}
