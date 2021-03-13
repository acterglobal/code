import React, { FC, useEffect, useState } from 'react'
import { Editor } from 'react-draft-wysiwyg'
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css'

export const TextEditor: FC = () => {
  //   const [editor, setEditor] = useState<boolean>(false)
  //   useEffect(() => {
  //     setEditor(true)
  //   }, [])

  return (
    <>
      {window !== undefined ? (
        <Editor
          wrapperClassName="wrapper-class"
          editorClassName="editor-class"
          toolbarClassName="toolbar-class"
          toolbar={{
            options: [
              'inline',
              'blockType',
              'fontSize',
              'list',
              'colorPicker',
              'emoji',
            ],
            inline: {
              options: ['bold', 'italic', 'underline'],
            },
          }}
          //   wrapperStyle={<wrapperStyleObject>}
          //   editorStyle={<editorStyleObject>}
          //   toolbarStyle={<toolbarStyleObject>}
        />
      ) : null}
    </>
  )
}
