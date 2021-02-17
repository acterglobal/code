import React, { useState } from 'react'
import Cropper from 'react-cropper'
import 'cropperjs/dist/cropper.css'
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles'
import Modal from '@material-ui/core/Modal'
import Backdrop from '@material-ui/core/Backdrop'
import Fade from '@material-ui/core/Fade'

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    modal: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    },
    paper: {
      backgroundColor: theme.palette.background.paper,
      border: '2px solid #000',
      boxShadow: theme.shadows[5],
      padding: theme.spacing(2, 4, 3),
    },
    editor: {
      width: 600,
    },
  })
)

export default function TransitionsModal(props) {
  const classes = useStyles()
  const [open, setOpen] = useState(true)
  const [cropper, setCropper] = useState<any>()
  const { image, handleSubmit, ref } = props

  console.log('CROPPER: ', cropper)

  const handleOpen = () => {
    setOpen(true)
  }

  const handleClose = () => {
    setOpen(false)
  }

  return (
    <Modal
      aria-labelledby="transition-modal-title"
      aria-describedby="transition-modal-description"
      className={classes.modal}
      open={open}
      onClose={handleClose}
      closeAfterTransition
      BackdropComponent={Backdrop}
      BackdropProps={{
        timeout: 500,
      }}
    >
      <Fade in={open}>
        <div className={classes.editor}>
          <Cropper
            ref={ref}
            src={image !== {} ? image : ''}
            style={{ height: 400, width: '100%' }}
            zoomable={true}
            modal={true}
            cropBoxResizable={false}
            // Cropper.js options
            guides={false}
            onInitialized={(instance) => setCropper(instance)}
          />

          <button
            type="button"
            onClick={() => {
              setOpen(false)
              handleSubmit(cropper.getCroppedCanvas().toDataURL())
            }}
          >
            Save
          </button>
        </div>
      </Fade>
    </Modal>
  )
}
