import React, { FC, useState, useEffect, createRef, RefObject } from 'react'
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles'
import { FilePond, registerPlugin } from 'react-filepond'
import FilePondPluginImagePreview from 'filepond-plugin-image-preview'
import FilePondPluginImageEdit from 'filepond-plugin-image-edit'
import FilePondPluginFileValidateType from 'filepond-plugin-file-validate-type'
import { ImageCropper } from 'src/components/image-upload/cropper-editor'
import 'filepond/dist/filepond.min.css'
import 'filepond-plugin-image-edit/dist/filepond-plugin-image-edit.css'
import 'filepond-plugin-image-preview/dist/filepond-plugin-image-preview.css'
import axios from 'axios'
import { FormSetFieldValue } from 'src/components/acter/form'

registerPlugin(
  FilePondPluginImagePreview,
  FilePondPluginFileValidateType,
  FilePondPluginImageEdit
)

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    container: {
      display: 'flex',
      flexDirection: 'column',
      position: 'relative',
      margin: theme.spacing(1.2),
    },
    uploadContainer: {
      minWidth: 230,
      fontSize: '0.85rem',
    },
    button: {
      color: 'white',
      margin: 5,
      height: 30,
    },
  })
)

export interface ImageUploadProps {
  imageType: string
  setImageToFormField: FormSetFieldValue
  aspectRatio?: number
  fileUrl?: string
}

export const ImageUpload: FC<ImageUploadProps> = ({
  imageType,
  setImageToFormField,
  aspectRatio = 1,
  fileUrl,
}) => {
  const classes = useStyles()
  const pond: RefObject<FilePond> = createRef()

  const [image, setImage] = useState(null)
  const [files, setFiles] = useState([])
  const [showEditor, setShowEditor] = useState(false)

  const validFileTypes = [
    'image/png',
    'image/jpg',
    'image/jpeg',
    'image/webp',
    'application/octet-stream',
  ]

  const [editor] = useState({
    // Called by FilePond to edit the image
    // - should open your image editor
    // - receives file object and image edit instructions
    // @ts-ignore
    open: (file) => {
      setImage(URL.createObjectURL(file))
      setShowEditor(true)
    },

    // Callback set by FilePond
    // - should be called by the editor when user confirms editing
    // - should receive output object, resulting edit information
    onconfirm: () => {
      // code goes here
    },

    // Callback set by FilePond
    // - should be called by the editor when user cancels editing
    oncancel: () => null,

    // Callback set by FilePond
    // - should be called by the editor when user closes the editor
    onclose: () => {
      //   console.log(pond.getFile())
    },
  })

  const handleImageCrop = (cropData, imagefile) => {
    pond.current.addFile(imagefile)
    setImage(imagefile)
    setFiles([imagefile])
    setShowEditor(false)

    // const { center } = cropData

    // editor.onconfirm({
    //   data: {
    //     crop: {
    //       center: {
    //         x: center.X,
    //         y: center.Y,
    //       },
    //       flip: {
    //         horizontal: false,
    //         vertical: false,
    //       },
    //       zoom: 1,
    //       rotation: 0,
    //       aspectRatio: aspectRatio,
    //     },
    //   },
    // })
  }

  const handleFileSelected = (file) => {
    if (files.length === 0) {
      editor.open(file.file)
    }
  }

  const handleImageUpload = () => {
    if (pond.current.getFile()) {
      const { file } = pond.current.getFile()
      setFiles([file])
      setImageToFormField(`${imageType}`, file)
    }
  }

  useEffect(() => {
    if (fileUrl) {
      setFiles([
        {
          source: `${process.env.NEXT_PUBLIC_IMAGE_LOADER_URL}/${fileUrl}`,
          options: {
            type: 'local',
          },
        },
      ])
    }
  }, [fileUrl])

  const serverConfig = {
    load: async (url, load, error, progress, abort, headers) => {
      try {
        const res = await axios.request({
          url,
          responseType: 'blob',
        })
        headers(
          Object.keys(res.headers).reduce(
            (prev, key) => `${prev}${key}: ${res.headers[key]}\n`,
            ''
          )
        )
        load(res.data)
      } catch (err) {
        console.error(err)
        error(err)
      }
    },
  }

  return (
    <div className={classes.container}>
      <FilePond
        ref={pond}
        onaddfilestart={handleFileSelected}
        onaddfile={handleImageUpload}
        className={classes.uploadContainer}
        instantUpload={false}
        allowMultiple={false}
        labelIdle={`<span class="filepond--label-action"> Browse</span>  image file for ${
          imageType.charAt(0).toUpperCase() + imageType.slice(1)
        }`}
        //@ts-ignore
        imageEditEditor={editor}
        acceptedFileTypes={validFileTypes}
        credits={false}
        //@ts-ignore
        files={files}
        server={serverConfig}
      />

      {showEditor && (
        <ImageCropper
          image={image}
          aspectRatio={aspectRatio}
          handleCrop={handleImageCrop}
        />
      )}
    </div>
  )
}
