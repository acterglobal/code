import React, { FC, useState, useEffect } from 'react'
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css'

import dynamic from 'next/dynamic'

import { createStyles, makeStyles, Theme } from '@material-ui/core/styles'

import { convertToRaw, convertFromRaw, EditorState } from 'draft-js'
import { draftToMarkdown, markdownToDraft } from 'markdown-draft-js'

import { Size } from '@acter/lib/constants'

const Editor = dynamic(
  () => import('react-draft-wysiwyg').then((reactDraft) => reactDraft.Editor),
  { ssr: false }
)
interface widthHeightType {
  width?: number
  height: number
}
interface borderStylesType {
  radius?: number
  color?: string
}
interface stylesProp {
  size?: widthHeightType
  borderStyles?: borderStylesType
  toolbarSize?: Size
}
export interface TextEditorProps extends widthHeightType, stylesProp {
  initialValue: string
  handleInputChange: (data: string) => void
  editorRef: (ref) => void
  clearTextEditor?: boolean
  hideEditorToolbar?: boolean
  placeholder?: string
}

export const TextEditor: FC<TextEditorProps> = ({
  handleInputChange,
  initialValue,
  height,
  width,
  borderStyles,
  editorRef,
  clearTextEditor,
  placeholder,
  toolbarSize,
}) => {
  const size = { height, width }
  const classes = useStyles({ size, borderStyles, toolbarSize })

  const rawData = markdownToDraft(initialValue)
  const contentState = convertFromRaw(rawData)
  const [editorState, setEditorState] = useState(
    EditorState.createWithContent(contentState)
  )

  useEffect(() => {
    if (clearTextEditor) {
      setEditorState(EditorState.createEmpty())
    }
  }, [clearTextEditor])

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
      onEditorStateChange={onEditorStateChange}
      editorRef={editorRef}
      placeholder={placeholder}
      blockStyleFn={customBlockStyleFn}
      wrapperClassName={classes.wrapper}
      editorClassName={classes.editor}
      toolbarClassName={classes.toolBar}
      toolbar={{
        options: ['inline', 'blockType', 'list'],
        inline: {
          options: ['bold', 'italic'],
          bold: { className: classes.inlineTools },
          italic: { className: classes.inlineTools },
        },
        blockType: {
          className: classes.blockType,
          dropdownClassName: undefined,
        },
        list: {
          className: undefined,
          unordered: { className: classes.list },
          ordered: { className: classes.list },
          indent: { className: classes.list },
          outdent: { className: classes.list },
        },
      }}
    />
  )
}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    wrapper: {
      border: '1px solid',
      borderColor: ({ borderStyles }: stylesProp) =>
        borderStyles?.color || theme.colors.grey.main,
      borderRadius: ({ borderStyles }: stylesProp) => borderStyles?.radius || 4,
      width: ({ size }: stylesProp) => size.width || '100%',
      minHeight: ({ size }: stylesProp) => size.height,
    },
    toolBar: {
      backgroundColor: theme.colors.grey.extraLight,
      marginBottom: 0,
      borderTopLeftRadius: ({ borderStyles }: stylesProp) =>
        borderStyles?.radius || 4,
      borderTopRightRadius: ({ borderStyles }: stylesProp) =>
        borderStyles?.radius || 4,
      paddingTop: ({ toolbarSize }: stylesProp) =>
        toolbarSize === Size.SMALL && 3,
      paddingLeft: ({ toolbarSize }: stylesProp) =>
        toolbarSize === Size.SMALL && 8,
      height: ({ toolbarSize }: stylesProp) => toolbarSize === Size.SMALL && 27,
    },
    toolbarHide: {
      display: 'none',
    },
    editor: {
      lineHeight: '1.2rem',
      paddingTop: 10,
      paddingLeft: 15,
      paddingRight: 10,
      marginTop: -10,
    },
    inlineTools: {
      height: ({ toolbarSize }: stylesProp) => toolbarSize === Size.SMALL && 10,
      minWidth: ({ toolbarSize }: stylesProp) =>
        toolbarSize === Size.SMALL && 10,
      '& img': {
        height: ({ toolbarSize }: stylesProp) =>
          toolbarSize === Size.SMALL && '0.6rem',
      },
    },
    blockType: {
      height: ({ toolbarSize }: stylesProp) => toolbarSize === Size.SMALL && 20,
      width: ({ toolbarSize }: stylesProp) => toolbarSize === Size.SMALL && 80,
      fontSize: ({ toolbarSize }: stylesProp) =>
        toolbarSize === Size.SMALL && '0.7rem',
    },
    list: {
      padding: ({ toolbarSize }: stylesProp) => toolbarSize === Size.SMALL && 0,
      '& img': {
        height: ({ toolbarSize }: stylesProp) =>
          toolbarSize === Size.SMALL && '0.6rem',
      },
    },
    listStyle: {
      lineHeight: '0.2rem',
    },
  })
)
