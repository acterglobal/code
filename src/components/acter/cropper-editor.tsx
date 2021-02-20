import React, { FC, useState } from 'react'
import { Crop as CropIcon } from '@material-ui/icons'
import { makeStyles, Theme } from '@material-ui/core/styles'
import { Button } from '@material-ui/core/'
import Cropper from 'react-cropper'
import 'cropperjs/dist/cropper.css'

const useStyles = makeStyles((theme: Theme) => ({
  container: {},
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
  handleCrop: (cropData: any, canvasData: any, imagefile: any) => void
}

export const ImageCropper: FC<ImageCropperProps> = (props) => {
  const { image, aspectRatio, handleCrop } = props
  const classes = useStyles()
  const [cropper, setCropper] = useState<any>()

  const handleImageCrop = () =>
    handleCrop(
      cropper.getData(),
      cropper.getCanvasData(),
      cropper.getCroppedCanvas().toDataURL()
    )

  return (
    <div>
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
