import React, { FC } from 'react'
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles'
import { grey } from '@material-ui/core/colors'
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css'
import dynamic from 'next/dynamic'
import { convertToRaw } from 'draft-js'

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
      width: ({ width }: { width: number }) => width,
      height: ({ height }: { height: number }) => height,
    },
    toolBar: {
      backgroundColor: grey[200],
    },
    editor: {},
    inlineTools: {},
  })
})

export interface TextEditorProps {
  height: number
  width: number
  handleInputChange: (data: any) => void
}

export const TextEditor: FC<TextEditorProps> = (props) => {
  const { handleInputChange, height, width } = props
  const classes = useStyles({ width, height })

  const onEditorStateChange = async (data) => {
    const draftToMarkdown = (await import('draftjs-to-markdown')).default
    const value = draftToMarkdown(convertToRaw(data.getCurrentContent()))
    handleInputChange(value)
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
