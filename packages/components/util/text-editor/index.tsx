import React, { FC, useState, useEffect, useMemo } from 'react'

import createLinkPlugin from '@draft-js-plugins/anchor'
import Editor from '@draft-js-plugins/editor'
import createInlineToolbarPlugin from '@draft-js-plugins/inline-toolbar'
import '@draft-js-plugins/inline-toolbar/lib/plugin.css'
import '@draft-js-plugins/static-toolbar/lib/plugin.css'
import { Box } from '@material-ui/core'
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles'

import {
  AtomicBlockUtils,
  ContentBlock,
  ContentState,
  EditorState,
  CompositeDecorator,
} from 'draft-js'
import { stateToHTML } from 'draft-js-export-html'

import {
  Toolbar,
  toolbarPlugin,
} from '@acter/components/util/text-editor-toolbar'
import { DecoratedLink } from '@acter/components/util/text-editor/decorated-link'
import { EditorContext } from '@acter/components/util/text-editor/editor-context'
import { linkStrategy } from '@acter/components/util/text-editor/link-strategy'
import { MediaComponent } from '@acter/components/util/text-editor/media-component'

let htmlToDraft = null
if (typeof window === 'object') {
  // eslint-disable-next-line @typescript-eslint/no-var-requires
  htmlToDraft = require('html-to-draftjs').default
}

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

  const [inlinePlugins, InlineToolbar] = useMemo(() => {
    const inlineToolbarPlugin = createInlineToolbarPlugin()

    return [[inlineToolbarPlugin], inlineToolbarPlugin.InlineToolbar]
  }, [])

  const plugins = [...inlinePlugins, toolbarPlugin, linkPlugin]

  const decorator = new CompositeDecorator([
    {
      strategy: linkStrategy,
      component: DecoratedLink,
    },
  ])

  const blocksFromHtml = htmlToDraft(initialValue)
  const { contentBlocks, entityMap } = blocksFromHtml
  const contentState = ContentState.createFromBlockArray(
    contentBlocks,
    entityMap
  )

  const [editorState, setEditorState] = useState(
    EditorState.createWithContent(contentState, decorator)
  )

  useEffect(() => {
    if (clearTextEditor) {
      return setEditorState(EditorState.createEmpty())
    }
  }, [clearTextEditor])

  const onEditorStateChange = async (data) => {
    const contentState = data.getCurrentContent()

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

    const value = stateToHTML(contentState, options)
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
        <EditorContext.Provider value={editorState}>
          <Editor
            editorState={editorState}
            onChange={onEditorStateChange}
            plugins={plugins}
            ref={editorRef}
            blockRendererFn={renderBlock}
            placeholder={placeholder}
          />
        </EditorContext.Provider>

        <InlineToolbar>
          {(externalProps) => <linkPlugin.LinkButton {...externalProps} />}
        </InlineToolbar>

        <input
          id="fileInput"
          style={{ display: 'none' }}
          type="file"
          accept="image/png,image/jpeg,image/jpg,image/gif"
          onChange={(event) => {
            const reader = new FileReader()
            reader.addEventListener(
              'load',
              function () {
                const contentStateWithEntity = editorState
                  .getCurrentContent()
                  .createEntity('IMAGE', 'IMMUTABLE', { src: reader.result })
                setEditorState(
                  AtomicBlockUtils.insertAtomicBlock(
                    EditorState.set(editorState, {
                      currentContent: contentStateWithEntity,
                    }),
                    contentStateWithEntity.getLastCreatedEntityKey(),
                    ' '
                  )
                )
              },
              false
            )
            if (event.target.files) {
              reader.readAsDataURL(
                Array.prototype.slice.call(event.target.files)[0]
              )
            }
          }}
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
