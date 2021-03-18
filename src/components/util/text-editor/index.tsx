import React, { FC, useState } from 'react'
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles'
import { grey } from '@material-ui/core/colors'
import { draftToMarkdown, markdownToDraft } from 'markdown-draft-js'
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css'
import dynamic from 'next/dynamic'
import { convertToRaw, convertFromRaw, EditorState } from 'draft-js'

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
      minHeight: ({ width, height }: widthHeightType) => height,
    },
    toolBar: {
      backgroundColor: grey[200],
      marginBottom: 0,
    },
    editor: {
      lineHeight: '1.2rem',
      padding: 0,
      marginTop: -10,
    },
    inlineTools: {},
    listStyle: {
      lineHeight: '0.2rem',
    },
  })
})

interface widthHeightType {
  width: number
  height: number
}
export interface TextEditorProps extends widthHeightType {
  initialValue: any
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

  const onEditorStateChange = async (data) => {
    const rawObject = convertToRaw(data.getCurrentContent())
    const value = draftToMarkdown(rawObject)
    handleInputChange(value)
    setEditorState(data)
  }

  const customBlockStyleFn = (contentBlock) => {
    const type = contentBlock.getType()
    if (type === 'unordered-list-item' || type === 'ordered-list-item') {
      return classes.listStyle
    }
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
          options: ['bold', 'italic'],
          bold: { className: classes.inlineTools },
          italic: { className: classes.inlineTools },
        },
      }}
      blockStyleFn={customBlockStyleFn}
    />
  )
}
