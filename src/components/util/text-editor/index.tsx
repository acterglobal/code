import React, { FC, useState, useEffect } from 'react'
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles'
import { grey } from '@material-ui/core/colors'
import { draftToMarkdown, markdownToDraft } from 'markdown-draft-js'
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css'

import dynamic from 'next/dynamic'
import {
  convertToRaw,
  convertFromRaw,
  EditorState,
  ContentState,
} from 'draft-js'
import { number } from 'yup'

const Editor = dynamic(
  () => import('react-draft-wysiwyg').then((reactDraft) => reactDraft.Editor),
  { ssr: false }
)

const useStyles = makeStyles((theme: Theme) => {
  return createStyles({
    wrapper: {
      border: '1px solid',
      borderColor: grey[400],
      borderRadius: 4,
      width: ({ width, height }: widthHeightType) => width,
      height: ({ width, height }: widthHeightType) => height,
    },
    toolBar: {
      backgroundColor: grey[200],
    },
    editor: {
      height: 100,
      // backgroundColor: 'red',
    },
    inlineTools: {},
  })
})

type widthHeightType = {
  width: number
  height: number
}
export interface TextEditorProps {
  initialValue: any
  height: number
  width: number
  handleInputChange: (data: any) => void
}

export const TextEditor: FC<TextEditorProps> = (props) => {
  const { handleInputChange, initialValue, height, width } = props
  const classes = useStyles({ width, height })

  const rawData = markdownToDraft(initialValue)

  const contentState = convertFromRaw(rawData)

  const [editorState, setEditorState] = useState(
    EditorState.createWithContent(contentState)
  )

  console.log('EDITOR :', editorState)

  const onEditorStateChange = async (data) => {
    const content = data.getCurrentContent()
    const rawObject = convertToRaw(content)
    const value = draftToMarkdown(rawObject)
    handleInputChange(value)

    setEditorState(data)
    console.log('DATA', data)
  }

  return (
    <Editor
      // @ts-ignore
      editorState={editorState}
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
