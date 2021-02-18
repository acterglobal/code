import React, { FC, useState, createRef } from 'react'
import { FilePond, registerPlugin } from 'react-filepond'
import { makeStyles } from '@material-ui/core/styles'
import FilePondPluginImageExifOrientation from 'filepond-plugin-image-exif-orientation'
import FilePondPluginImagePreview from 'filepond-plugin-image-preview'
import FilePondPluginFileValidateType from 'filepond-plugin-file-validate-type'
import FilePondPluginImageEdit from 'filepond-plugin-image-edit'
import CropperEditor from './image-cropper'
import 'filepond/dist/filepond.min.css'
import 'filepond-plugin-image-preview/dist/filepond-plugin-image-preview.css'
import 'filepond-plugin-image-edit/dist/filepond-plugin-image-edit.css'
registerPlugin(
  FilePondPluginImageExifOrientation,
  FilePondPluginImagePreview,
  FilePondPluginFileValidateType,
  FilePondPluginImageEdit
)

const useStyles = makeStyles((theme) => ({
  container: {
    width: 350,
  },
}))

const PictureUpload: FC = () => {
  const classes = useStyles()
  const [files, setFiles] = useState([])
  const [image, setImage] = useState(null)
  const [showEditor, setShowEditor] = useState(false)
  const validFileTypes = ['image/png', 'image/jpg', 'image/jpeg']

  const [editor] = useState({
    // Called by FilePond to edit the image
    // - should open your image editor
    // - receives file object and image edit instructions
    open: (file, instructions) => {
      console.log('instructions :', instructions)
      setImage(URL.createObjectURL(file))
    },

    // Callback set by FilePond
    // - should be called by the editor when user confirms editing
    // - should receive output object, resulting edit information
    onconfirm: (output) => {},

    // Callback set by FilePond
    // - should be called by the editor when user cancels editing
    oncancel: () => {},

    // Callback set by FilePond
    // - should be called by the editor when user closes the editor
    onclose: () => {},
  })

  const handleUpload = () => {
    console.log('Upload file :', files[0].filename)
    editor.onclose()
  }

  const handleSubmit = (image: any) => {
    console.log('submit')
    setImage(image)
    editor.onconfirm({
      data: {
        crop: {
          center: {
            x: 0.5,
            y: 0.5,
          },
          flip: {
            horizontal: false,
            vertical: false,
          },
          zoom: 2,
          rotation: 0,
          aspectRatio: null,
        },
      },
    })
  }

  return (
    <div className={classes.container}>
      <FilePond
        files={files}
        allowMultiple={false}
        onupdatefiles={setFiles}
        imageEditEditor={editor}
        labelIdle='Drag & Drop image file here or <span class="filepond--label-action">Browse</span>'
        acceptedFileTypes={validFileTypes}
        credits={false}
        stylePanelLayout="compact"
      />

      {showEditor && (
        <CropperEditor
          openModal={true}
          image={image}
          handleSubmit={handleUpload}
        />
      )}
      <img src={image} alt="" />
    </div>
  )
}

export default PictureUpload
