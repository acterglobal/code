import React, { FC, useState, useEffect } from 'react'
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css'

import Editor from '@draft-js-plugins/editor'
import createImagePlugin from '@draft-js-plugins/image'
import '@draft-js-plugins/static-toolbar/lib/plugin.css'
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles'

import { convertToRaw, convertFromRaw, EditorState } from 'draft-js'
import { draftToMarkdown, markdownToDraft } from 'markdown-draft-js'

import {
  Toolbar,
  toolbarPlugin,
} from '@acter/components/util/text-editor/toolbar'

const imagePlugin = createImagePlugin()
const plugins = [toolbarPlugin, imagePlugin]

interface widthHeightType {
  height?: number
}
interface borderStylesType {
  radius?: number
  color?: string
}
interface stylesProp {
  borderStyles?: borderStylesType
  size?: widthHeightType
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
  editorRef,
  clearTextEditor,
  placeholder,
  borderStyles,
  height,
}) => {
  const size = { height }
  const classes = useStyles({ borderStyles, size })

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

  return (
    <div>
      <div className={classes.editor}>
        <Toolbar />
        <Editor
          editorState={editorState}
          onChange={onEditorStateChange}
          plugins={plugins}
          ref={editorRef}
          placeholder={placeholder}
        />
      </div>
    </div>
  )
}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    editor: {
      boxSizing: 'border-box',
      border: '1px solid',
      borderColor: ({ borderStyles }: stylesProp) =>
        borderStyles?.color || theme.colors.grey.main,
      borderRadius: ({ borderStyles }: stylesProp) => borderStyles?.radius || 4,
      borderTopLeftRadius: ({ borderStyles }: stylesProp) =>
        borderStyles?.radius || 4,
      borderTopRightRadius: ({ borderStyles }: stylesProp) =>
        borderStyles?.radius || 4,
      height: ({ size }: stylesProp) => size.height,
      cursor: 'text',
      lineHeight: '1.2rem',
      padding: 8,
      marginBottom: '2em',
      boxShadow: 'inset 0px 1px 8px -3px #ABABAB',
      background: '#fefefe',
      '&:global(.public-DraftEditor-content)': {
        minHeight: '140px,',
      },
    },
  })
)
