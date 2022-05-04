import React, { FC, useState, useEffect, useMemo } from 'react'

import createLinkPlugin from '@draft-js-plugins/anchor'
import Editor from '@draft-js-plugins/editor'
import createInlineToolbarPlugin from '@draft-js-plugins/inline-toolbar'
import '@draft-js-plugins/inline-toolbar/lib/plugin.css'
import '@draft-js-plugins/static-toolbar/lib/plugin.css'
import { Box } from '@material-ui/core'
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles'

import {
  convertFromRaw,
  convertFromHTML,
  ContentState,
  EditorState,
  CompositeDecorator,
} from 'draft-js'
import { stateToHTML } from 'draft-js-export-html'
import { markdownToDraft } from 'markdown-draft-js'

import {
  Toolbar,
  toolbarPlugin,
} from '@acter/components/util/text-editor-toolbar'

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
  const linkPlugin = createLinkPlugin({ linkTarget: '_blank' })

  const [inlinPlugin, InlineToolbar] = useMemo(() => {
    const inlineToolbarPlugin = createInlineToolbarPlugin()

    return [[inlineToolbarPlugin], inlineToolbarPlugin.InlineToolbar]
  }, [])

  const plugins = [...inlinPlugin, toolbarPlugin, linkPlugin]

  // const decorator = new CompositeDecorator([
  //   {
  //     strategy: linkStrategy,
  //     component: DecoratedLink,
  //   },
  // ])

  const rawData = markdownToDraft(initialValue)
  const contentState = convertFromRaw(rawData)
  const [editorState, setEditorState] = useState(
    EditorState.createWithContent(contentState)
  )

  // const blocksFromHTML = convertFromHTML(initialValue)
  // const contentState = ContentState.createFromBlockArray(
  //   blocksFromHTML.contentBlocks,
  //   blocksFromHTML.entityMap
  // )

  useEffect(() => {
    if (clearTextEditor) {
      setEditorState(EditorState.createEmpty())
    }
  }, [clearTextEditor])

  const onEditorStateChange = async (data) => {
    const options = {
      entityStyleFn: (entity) => {
        if (entity.get('type').toLowerCase() === 'link') {
          const data = entity.getData()
          return {
            element: 'a',
            attributes: {
              href: data.url,
              target: '_blank',
            },
          }
        }
      },
    }

    handleInputChange(stateToHTML(data.getCurrentContent(), options))
    setEditorState(data)
  }

  return (
    <Box className={classes.editorContainer}>
      <Box className={classes.toolbarContainer}>
        <Toolbar />
      </Box>

      <Box className={classes.editor}>
        <Editor
          editorState={editorState}
          onChange={onEditorStateChange}
          plugins={plugins}
          ref={editorRef}
          placeholder={placeholder}
        />
        <InlineToolbar>
          {(externalProps) => (
            <>
              <linkPlugin.LinkButton {...externalProps} />
            </>
          )}
        </InlineToolbar>
      </Box>
    </Box>
  )
}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    editorContainer: {
      border: '1px solid',
      borderColor: theme.colors.blue.lightGrey,
      borderRadius: 8,
      minHeight: ({ size }: stylesProp) => size.height,
      cursor: 'text',
      minInlineSize: '1.2rem',
      marginBottom: '1em',
      boxShadow: 'inset 0px 1px 8px -3px #ABABAB',
      [theme.breakpoints.down('md')]: {
        minHeight: ({ size }: stylesProp) => size.height + theme.spacing(5),
      },
    },
    toolbarContainer: {
      display: 'flex',
      width: '100%',
      justifyContent: 'center',
    },
    editor: {
      padding: 10,
      fontSize: '0.813rem',
    },
  })
)
