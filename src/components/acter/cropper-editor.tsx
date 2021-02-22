import React, { FC, useState } from 'react'
import { Crop as CropIcon } from '@material-ui/icons'
import { makeStyles, Theme } from '@material-ui/core/styles'
import { Button } from '@material-ui/core/'
import Cropper from 'react-cropper'
import 'cropperjs/dist/cropper.css'

const useStyles = makeStyles((theme: Theme) => ({
  container: {
    width: 250,
    top: 0,
    left: 0,
    position: 'absolute',
  },
  cropBtn: {
    backgroundColor: theme.palette.primary.main,
    color: 'white',
    textTransform: 'none',
    margin: 10,
  },
}))

export interface ImageCropperProps {
  image: any
  aspectRatio: any
  handleCrop: (cropData: any, imagefile: any) => void
}

export const ImageCropper: FC<ImageCropperProps> = (props) => {
  const { image, aspectRatio, handleCrop } = props
  const classes = useStyles()
  const [cropper, setCropper] = useState<any>()

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

  const handleImageCrop = () =>
    handleCrop(calculateCropData(), cropper.getCroppedCanvas().toDataURL())

  return (
    <div className={classes.container}>
      <Cropper
        src={image !== {} ? image : ''}
        style={{ maxHeight: 200 }}
        zoomable={true}
        movable={true}
        modal={true}
        aspectRatio={aspectRatio}
        cropBoxResizable={true}
        guides={false}
        onInitialized={(instance) => setCropper(instance)}
      />

      <Button
        variant="contained"
        className={classes.cropBtn}
        onClick={handleImageCrop}
        endIcon={<CropIcon />}
      >
        Crop
      </Button>
    </div>
  )
}
