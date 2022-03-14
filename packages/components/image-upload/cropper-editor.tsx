import React, { FC, useState } from 'react'
import Cropper from 'react-cropper'

import {
  Crop as CropIcon,
  RotateLeft as RotateLeftIcon,
  RotateRight as RotateRightIcon,
  ZoomIn as ZoomInIcon,
  ZoomOut as ZoomOutIcon,
} from '@mui/icons-material'
import { Box, Button, Modal } from '@mui/material/'
import { Theme } from '@mui/material/styles'
import makeStyles from '@mui/styles/makeStyles'

import clsx from 'clsx'
import 'cropperjs/dist/cropper.css'

import { blueGrey, green } from '@acter/components/themes/colors'

type cropDataType = {
  center: {
    X: number
    Y: number
  }
  cropAreaRatio: number
  zoom: number
}

export interface ImageCropperProps {
  image: string
  aspectRatio: number
  handleCrop: (cropData: cropDataType, imagefile: string) => void
}

export const ImageCropper: FC<ImageCropperProps> = (props) => {
  const { image, aspectRatio, handleCrop } = props
  const classes = useStyles()
  const [cropper, setCropper] = useState(null)
  const [openModal, setOpenModal] = useState(true)

  const calculateCropData = () => {
    const cropData = cropper.getData()
    const canvasData = cropper.getCanvasData()
    /* Ratio of selected crop area. */
    const cropAreaRatio = cropData.height / cropData.width

    /* Center point of crop area in percent. */
    const percentX = (cropData.x + cropData.width / 2) / canvasData.naturalWidth
    const percentY =
      (cropData.y + cropData.height / 2) / canvasData.naturalHeight

    /* Calculate available space round image center position. */
    const cx = percentX > 0.5 ? 1 - percentX : percentX
    const cy = percentY > 0.5 ? 1 - percentY : percentY

    /* Calculate image rectangle respecting space round image from crop area. */
    let width = canvasData.naturalWidth
    let height = width * cropAreaRatio
    if (height > canvasData.naturalHeight) {
      height = canvasData.naturalHeight
      width = height / cropAreaRatio
    }
    const rectWidth = cx * 2 * width
    const rectHeight = cy * 2 * height

    /* Calculate zoom. */
    const zoom = Math.max(
      rectWidth / cropData.width,
      rectHeight / cropData.height
    )

    return { center: { X: percentX, Y: percentY }, cropAreaRatio, zoom }
  }

  const handleImageCrop = () => {
    handleCrop(calculateCropData(), cropper.getCroppedCanvas().toDataURL())
    setOpenModal(false)
  }

  return (
    <Modal // `disableBackdropClick` is removed by codemod.
      // You can find more details about this breaking change in [the migration guide](https://mui.com/guides/migration-v4/#modal)
      className={classes.modal}
      open={openModal}
    >
      <Box
        className={clsx(
          classes.container,
          aspectRatio === 1 && classes.roundSelection
        )}
      >
        <Cropper
          src={image || ''}
          className={classes.cropper}
          zoomable={true}
          movable={true}
          modal={true}
          aspectRatio={aspectRatio}
          cropBoxResizable={true}
          guides={false}
          rotatable={true}
          onInitialized={(instance) => setCropper(instance)}
        />
        <Box className={classes.toolsContainer}>
          <Button
            variant="contained"
            className={classes.cropBtn}
            onClick={handleImageCrop}
            endIcon={<CropIcon />}
          >
            Crop
          </Button>

          <RotateRightIcon
            fontSize="inherit"
            className={classes.tool}
            onClick={() => cropper.rotate(-90)}
          />
          <RotateLeftIcon
            fontSize="inherit"
            className={classes.tool}
            onClick={() => cropper.rotate(90)}
          />
          <ZoomInIcon
            fontSize="inherit"
            className={classes.tool}
            onClick={() => cropper.zoom(0.1)}
          />
          <ZoomOutIcon
            fontSize="inherit"
            className={classes.tool}
            onClick={() => cropper.zoom(-0.1)}
          />
        </Box>
      </Box>
    </Modal>
  )
}

const useStyles = makeStyles((theme: Theme) => ({
  modal: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  container: {
    width: theme.spacing(55),
    height: theme.spacing(51),
    padding: theme.spacing(1),
    backgroundColor: 'white',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  roundSelection: {
    '& .cropper-view-box, .cropper-crop-box': {
      borderRadius: '50%',
    },
  },
  cropper: {
    width: theme.spacing(54),
    height: theme.spacing(45),
  },
  toolsContainer: {
    display: 'flex',
    alignItems: 'center',
  },
  cropBtn: {
    backgroundColor: theme.palette.primary.main,
    color: 'white',
    textTransform: 'none',
    margin: theme.spacing(1),
    '&:hover': {
      backgroundColor: green[400],
    },
  },
  tool: {
    cursor: 'pointer',
    width: theme.spacing(4),
    height: theme.spacing(4),
    backgroundColor: theme.palette.secondary.main,
    color: 'white',
    marginLeft: theme.spacing(2),
    '&:hover': {
      backgroundColor: blueGrey.A200,
    },
  },
}))
