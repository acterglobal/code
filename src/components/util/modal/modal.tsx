import React, { FC } from 'react'
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles'
import { Modal as MUIModal, Backdrop, Fade } from '@material-ui/core'

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    modal: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    },
    paper: {
      outline: 0,
      backgroundColor: theme.palette.background.paper,
      boxShadow: theme.shadows[5],
      borderRadius: theme.spacing(2),
      overflow: 'hidden',
    },
  })
)

export interface ModalProps {
  children: React.ReactNode
  handleCloseModal?: boolean
  disableBackdropClick?: boolean
}

export const Modal: FC<ModalProps> = (props) => {
  const { children, handleCloseModal, disableBackdropClick = true } = props
  const classes = useStyles()
  const [open, setOpen] = React.useState(true)

  //   const handleOpen = () => setOpen(true)

  const handleClose = () => setOpen(false)

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
          <div className={classes.paper}>{children}</div>
        </Fade>
      </MUIModal>
    </div>
  )
}
