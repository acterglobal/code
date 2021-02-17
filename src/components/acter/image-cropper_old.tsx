import React from 'react'
import Cropper from 'react-cropper'
import 'cropperjs/dist/cropper.css'

export default function CropperEditor(props) {
  const { image, handleSubmit, ref } = props

  return (
    <div>
      <Cropper
        ref={ref}
        src={image !== {} ? image : ''}
        style={{ height: 400, width: '100%' }}
        zoomable={true}
        modal={true}
        //cropBoxMovable={false}
        cropBoxResizable={false}
        // Cropper.js options
        guides={false}
      />

      <button type="button" onClick={handleSubmit}>
        Submit
      </button>
    </div>
  )
}
