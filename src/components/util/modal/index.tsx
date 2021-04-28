import React, { FC, useState, ReactNode } from 'react'
import { makeStyles, createStyles } from '@material-ui/core/styles'
import { Modal as MUIModal, Backdrop, Fade } from '@material-ui/core'
import { TopBar } from 'src/components/util/modal/top-bar'
import { TopBarProps } from 'src/components/util/modal/top-bar'

const useStyles = makeStyles(
  createStyles({
    modal: {
      display: 'flex',
      justifyContent: 'flex-end',
    },
    modalContainer: {
      outline: 0,
      backgroundColor: 'white',
    },
    content: {
      height: '100%',
      overflow: 'scroll',
      paddingBottom: 30,
    },
  })
)

export interface ModalProps extends TopBarProps {
  children: ReactNode
  showCloseButton?: boolean
  handleModalClose?: (any?) => void
  disableBackdropClick?: boolean
}

export const Modal: FC<ModalProps> = ({
  children,
  handleModalClose,
  actionButtons = null,
  acter,
  user,
  heading,
  disableBackdropClick = true,
}) => {
  const classes = useStyles()
  const [open, setOpen] = useState(true)

  //   const handleOpen = () => setOpen(true)

  const handleClose = () => {
    setOpen(false)
    handleModalClose()
  }

  return (
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
          <TopBar
            handleClose={handleClose}
            actionButtons={actionButtons}
            acter={acter}
            user={user}
            heading={heading}
          />
          <div className={classes.content}>{children}</div>
        </div>
      </Fade>
    </MUIModal>
  )
}
