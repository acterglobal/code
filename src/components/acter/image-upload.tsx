import React, { FC, useState, createRef } from 'react'
import { makeStyles, Theme } from '@material-ui/core/styles'
import { Button } from '@material-ui/core'
import { Backup as UploadIcon } from '@material-ui/icons'
import { FilePond, registerPlugin } from 'react-filepond'
import FilePondPluginImagePreview from 'filepond-plugin-image-preview'
import FilePondPluginImageEdit from 'filepond-plugin-image-edit'
import FilePondPluginFileValidateType from 'filepond-plugin-file-validate-type'
import { ImageCropper } from './cropper-editor'
import 'filepond/dist/filepond.min.css'
import 'filepond-plugin-image-edit/dist/filepond-plugin-image-edit.css'
import 'filepond-plugin-image-preview/dist/filepond-plugin-image-preview.css'

registerPlugin(
  FilePondPluginImagePreview,
  FilePondPluginFileValidateType,
  FilePondPluginImageEdit
)

const useStyles = makeStyles((theme: Theme) => ({
  container: {
    // width: 250,
    height: 250,
    display: 'flex',
  },
  uploadContainer: {
    width: 250,
  },
  button: {
    color: 'white',
    margin: 10,
    height: 40,
  },
}))

export interface ImageUploadProps {
  imageType: string
}

export const ImageUpload: FC<ImageUploadProps> = ({ imageType }) => {
  const classes = useStyles()
  const pond: React.RefObject<FilePond> = createRef()

  const [image, setImage] = useState(null)
  const [showEditor, setShowEditor] = useState(false)
  const validFileTypes = ['image/png', 'image/jpg', 'image/jpeg']

  const [editor] = useState({
    // Called by FilePond to edit the image
    // - should open your image editor
    // - receives file object and image edit instructions
    open: (file, instructions) => {
      //   console.log('FILE :', file)
      //   console.log(instructions)
      setImage(URL.createObjectURL(file))
      setShowEditor(true)
    },

    // Callback set by FilePond
    // - should be called by the editor when user confirms editing
    // - should receive output object, resulting edit information
    onconfirm: (output) => {
      console.log('FILE...:', output.file)
    },

    // Callback set by FilePond
    // - should be called by the editor when user cancels editing
    oncancel: () => {},

    // Callback set by FilePond
    // - should be called by the editor when user closes the editor
    onclose: () => {
      //   console.log(pond.getFile())
    },
  })

  const handleSubmit = (cropData, canvasData, imagefile) => {
    pond.current.addFile(imagefile)
    setImage(imagefile)
    setShowEditor(false)

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

    console.log('submit')
    editor.onconfirm({
      data: {
        crop: {
          center: {
            x: percentX,
            y: percentY,
          },
          flip: {
            horizontal: false,
            vertical: false,
          },
          zoom: 1,
          rotation: 0,
          aspectRatio: cropAreaRatio,
        },
      },
    })
  }

  return (
    <div className={classes.container}>
      {/* {showEditor ? (
        <ImageCropper image={image} handleCrop={handleSubmit} />
      ) : (
        <FilePond
          className={classes.container}
          ref={pond}
          instantUpload={false}
          allowMultiple={false}
          imageEditEditor={editor}
        />
      )} */}
      <FilePond
        ref={pond}
        className={classes.uploadContainer}
        instantUpload={false}
        allowMultiple={false}
        // @ts-ignore
        imageEditEditor={editor}
        acceptedFileTypes={validFileTypes}
        credits={false}
      />
      {showEditor ? (
        <ImageCropper
          image={image}
          aspectRatio={imageType === 'banner' ? 24 / 5 : 1 / 1}
          handleCrop={handleSubmit}
        />
      ) : (
        image !== null && (
          <Button
            variant="contained"
            color="primary"
            className={classes.button}
            endIcon={<UploadIcon />}
            onClick={() => console.log(pond.current.getFile())}
          >
            Upload
          </Button>
        )
      )}
    </div>
  )
}
