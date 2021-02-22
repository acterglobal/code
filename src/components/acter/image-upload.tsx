import React, { FC, useState, createRef, RefObject } from 'react'
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
    position: 'relative',
    margin: 10,
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
  const pond: RefObject<FilePond> = createRef()

  const [image, setImage] = useState(null)
  const [showEditor, setShowEditor] = useState(false)

  const validFileTypes = ['image/png', 'image/jpg', 'image/jpeg']

  const [editor] = useState({
    // Called by FilePond to edit the image
    // - should open your image editor
    // - receives file object and image edit instructions
    open: (file, instructions) => {
      // console.log('FILE in edit:', file)
      //   console.log(instructions)
      setImage(URL.createObjectURL(file))
      setShowEditor(true)
    },

    // Callback set by FilePond
    // - should be called by the editor when user confirms editing
    // - should receive output object, resulting edit information
    onconfirm: (output) => {
      // console.log('FILE...:', output.file)
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

  const handleSubmit = (cropData, imagefile) => {
    const { center, cropAreaRatio, zoom } = cropData
    pond.current.addFile(imagefile)
    setImage(imagefile)
    setShowEditor(false)

    console.log('submit')
    editor.onconfirm({
      data: {
        crop: {
          center: {
            x: center.X,
            y: center.Y,
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
      <FilePond
        ref={pond}
        className={classes.uploadContainer}
        instantUpload={false}
        allowMultiple={false}
        labelIdle={`<span class="filepond--label-action"> Browse</span>  image file for ${imageType}`}
        // @ts-ignore
        imageEditEditor={editor}
        acceptedFileTypes={validFileTypes}
        credits={false}
      />

      {showEditor ? (
        <ImageCropper
          image={image}
          aspectRatio={imageType === 'Banner' ? 24 / 5 : 1 / 1}
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
