import React, { FC, ReactNode } from 'react'

import { Modal as MUIModal, Backdrop, Fade } from '@mui/material'
import makeStyles from '@mui/styles/makeStyles';
import createStyles from '@mui/styles/createStyles';

import { TopBar } from '@acter/components/util/modal/top-bar'
import { TopBarProps } from '@acter/components/util/modal/top-bar'

export interface ModalProps extends TopBarProps {
  open: boolean
  children: ReactNode
  handleModalClose: (any?) => void
  disableBackdropClick?: boolean
}
export const Modal: FC<ModalProps> = ({
  open,
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
      open={open}
      // onClose={handleClose}
      closeAfterTransition
      BackdropComponent={Backdrop}
      BackdropProps={{ timeout: 500 }}
      disableBackdropClick={disableBackdropClick}
    >
      <Fade in={open}>
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
      paddingBottom: 30,
      overflow: 'scroll',
      'ms-overflow-style': 'none',
      scrollbarWidth: 'none',
      '&::-webkit-scrollbar': {
        display: 'none',
        overflowY: 'hidden',
      },
    },
  })
)
