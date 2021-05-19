import React, { FC, ReactNode } from 'react'
import { makeStyles, createStyles } from '@material-ui/core/styles'
import { Modal as MUIModal, Backdrop, Fade } from '@material-ui/core'
import { TopBar } from 'src/components/util/modal/top-bar'
import { TopBarProps } from 'src/components/util/modal/top-bar'

export interface ModalProps extends TopBarProps {
  openModal: boolean
  children: ReactNode
  handleModalClose?: (any?) => void
  disableBackdropClick?: boolean
}
// TODO: need to refactor
export const Modal: FC<ModalProps> = ({
  openModal,
  children,
  handleModalClose,
  actionButtons = null,
  acter,
  user,
  heading,
  disableBackdropClick = true,
}) => {
  const classes = useStyles()

  return (
    <MUIModal
      aria-labelledby="transition-modal-title"
      aria-describedby="transition-modal-description"
      className={classes.modal}
      open={openModal}
      // onClose={handleClose}
      closeAfterTransition
      BackdropComponent={Backdrop}
      BackdropProps={{ timeout: 500 }}
      disableBackdropClick={disableBackdropClick}
    >
      <Fade in={openModal}>
        <div className={classes.modalContainer}>
          <TopBar
            handleClose={handleModalClose}
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
