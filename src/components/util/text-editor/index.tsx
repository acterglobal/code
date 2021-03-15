import React, { FC, useState } from 'react'
import { makeStyles, Theme } from '@material-ui/core/styles'
import { grey } from '@material-ui/core/colors'
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css'
import dynamic from 'next/dynamic'
// import { convertToRaw } from 'draft-js'
// import draftToMarkdown from 'draftjs-to-markdown'

const Editor = dynamic(
  () => import('react-draft-wysiwyg').then((reactDraft) => reactDraft.Editor),
  { ssr: false }
)
const draftToMarkdown = dynamic(() => import('draftjs-to-markdown'), {
  ssr: false,
})
const convertToRaw = dynamic(
  () => import('draft-js').then((draft) => draft.convertToRaw),
  {
    ssr: false,
  }
)

const useStyles = makeStyles((theme: Theme) => ({
  wrapper: {
    border: '1px solid',
    borderColor: grey[400],
    borderRadius: 4,
    height: 200,
  },
  toolBar: {
    backgroundColor: grey[200],
  },
  editor: {},
  inlineTools: {},
}))

export interface TextEditorProps {
  handleInputChange: (data: any) => void
}

export const TextEditor: FC<TextEditorProps> = ({ handleInputChange }) => {
  const classes = useStyles()
  const [showEditor, setShowEditor] = useState()

  const onEditorStateChange = (data) => {
    handleInputChange(
      // @ts-ignore
      data && draftToMarkdown(convertToRaw(data.getCurrentContent()))
    )
  }

  return (
    <Editor
      // @ts-ignore
      wrapperClassName={classes.wrapper}
      editorClassName={classes.editor}
      toolbarClassName={classes.toolBar}
      onEditorStateChange={onEditorStateChange}
      toolbar={{
        options: ['inline', 'blockType', 'list'],
        inline: {
          options: ['bold', 'italic', 'underline'],
          bold: { className: classes.inlineTools },
          italic: { className: classes.inlineTools },
          underline: { className: classes.inlineTools },
        },
      }}
    />
  )
}
