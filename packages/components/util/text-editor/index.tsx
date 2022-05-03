import React, { FC, useState, useEffect } from 'react'

import Editor from '@draft-js-plugins/editor'
import createLinkifyPlugin from '@draft-js-plugins/linkify'
import '@draft-js-plugins/static-toolbar/lib/plugin.css'
import { Box } from '@material-ui/core'
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles'

import {
  convertToRaw,
  convertFromRaw,
  EditorState,
  CompositeDecorator,
  ContentBlock,
} from 'draft-js'
import { draftToMarkdown, markdownToDraft } from 'markdown-draft-js'

import {
  Toolbar,
  toolbarPlugin,
} from '@acter/components/util/text-editor-toolbar'
import { DecoratedLink } from '@acter/components/util/text-editor/decorated-link'
import { linkStrategy } from '@acter/components/util/text-editor/link-strategy'
import { MediaComponent } from '@acter/components/util/text-editor/media-component'

const linkifyPlugin = createLinkifyPlugin({ target: '_blank' })

const plugins = [toolbarPlugin, linkifyPlugin]

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
      setEditorState(
        EditorState.createEmpty(
          new CompositeDecorator([
            {
              strategy: linkStrategy,
              component: DecoratedLink,
            },
          ])
        )
      )
    }
  }, [clearTextEditor])

  const onEditorStateChange = async (data) => {
    const rawObject = convertToRaw(data.getCurrentContent())

    console.log('CURRENT...', rawObject)

    const value = draftToMarkdown(rawObject)
    handleInputChange(value)
    setEditorState(data)
  }

  const renderBlock = (contentBlock: ContentBlock) => {
    if (contentBlock.getType() === 'atomic') {
      const entityKey = contentBlock.getEntityAt(0)
      const entityData = editorState
        .getCurrentContent()
        .getEntity(entityKey)
        .getData()
      return {
        component: MediaComponent,
        editable: false,
        props: {
          src: { file: entityData.src },
        },
      }
    }
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
          blockRendererFn={renderBlock}
          placeholder={placeholder}
        />
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

const initialState = {
  blocks: [
    {
      key: 'agrno',
      text: '',
      type: 'unstyled',
      depth: 0,
      inlineStyleRanges: [],
      entityRanges: [],
      data: {},
    },
  ],
  entityMap: {},
}

const initialState2 = {
  entityMap: {
    0: {
      type: 'IMAGE',
      mutability: 'IMMUTABLE',
      data: {
        src: '/images/canada-landscape-small.jpg',
      },
    },
  },
  blocks: [
    {
      key: '9gm3s',
      text: 'You can have images in your text field. This is a very rudimentary example, but you can enhance the image plugin with resizing, focus or alignment plugins.',
      type: 'unstyled',
      depth: 0,
      inlineStyleRanges: [],
      entityRanges: [],
      data: {},
    },
    {
      key: 'ov7r',
      text: ' ',
      type: 'atomic',
      depth: 0,
      inlineStyleRanges: [],
      entityRanges: [
        {
          offset: 0,
          length: 1,
          key: 0,
        },
      ],
      data: {},
    },
  ],
}
