import React, { useState, useEffect, FC } from 'react'
import Cropper from 'react-cropper'
import 'cropperjs/dist/cropper.css'
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles'
import { Modal, Backdrop, Fade, Button } from '@material-ui/core/'

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    modal: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      '&:focus': {
        outline: 'none',
      },
    },
    paper: {
      // backgroundColor: theme.palette.background.paper,
      // border: '2px solid #000',
      // boxShadow: theme.shadows[5],
      // padding: theme.spacing(2, 4, 3),
      // '&:focus': {
      //   outline: 'none',
      // },
    },
    editor: {
      width: 900,
      height: 700,
      backgroundColor: theme.palette.secondary.main,
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      outline: 'none',
    },
    cropBtn: {
      backgroundColor: theme.palette.primary.main,
      color: 'white',
      textTransform: 'none',
      margin: 10,
    },
  })
)

export interface ImageCropperProps {
  image: any
  openModal: boolean
  handleSubmit: (image: any) => void
}

const ImageCropper: FC<ImageCropperProps> = (props) => {
  const { image, handleSubmit, openModal } = props
  const classes = useStyles()
  const [open, setOpen] = useState(true)
  const [cropper, setCropper] = useState<any>()

  useEffect(() => {
    setOpen(true)
  }, [])

  // console.log('CROPPER: ', cropper)
  console.log('MODAL OPEN :', open)

  const handleImageCrop = () => {
    setOpen(false)
    handleSubmit(cropper.getCroppedCanvas().toDataURL())
  }

  return (
    <Modal
      aria-labelledby="transition-modal-title"
      aria-describedby="transition-modal-description"
      className={classes.modal}
      open={open}
      onClose={() => setOpen(false)}
      closeAfterTransition
      disableBackdropClick
      BackdropComponent={Backdrop}
      BackdropProps={{ timeout: 500 }}
    >
      <Fade in={open}>
        <div className={classes.editor}>
          <Cropper
            src={image !== {} ? image : ''}
            style={{ height: 600, width: 600 }}
            zoomable={true}
            movable={true}
            modal={true}
            aspectRatio={1 / 1}
            cropBoxResizable={true}
            // cropBoxMovable={false}
            // Cropper.js options
            guides={false}
            onInitialized={(instance) => setCropper(instance)}
          />

          <Button
            variant="contained"
            className={classes.cropBtn}
            onClick={handleImageCrop}
          >
            Crop
          </Button>
        </div>
      </Fade>
    </Modal>
  )
}

export default ImageCropper
