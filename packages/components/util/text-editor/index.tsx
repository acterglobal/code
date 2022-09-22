import React, {
  FC,
  useState,
  useEffect,
  useMemo,
  useRef,
  useCallback,
  Component,
} from 'react'

import createLinkPlugin from '@draft-js-plugins/anchor'
import Editor from '@draft-js-plugins/editor'
import createInlineToolbarPlugin from '@draft-js-plugins/inline-toolbar'
import '@draft-js-plugins/inline-toolbar/lib/plugin.css'
import createMentionPlugin, {
  defaultSuggestionsFilter,
  MentionData,
} from '@draft-js-plugins/mention'
import '@draft-js-plugins/mention/lib/plugin.css'
import '@draft-js-plugins/static-toolbar/lib/plugin.css'
import { Box } from '@material-ui/core'
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles'

import clsx from 'clsx'
import { ContentState, EditorState, CompositeDecorator } from 'draft-js'
import { stateToHTML } from 'draft-js-export-html'
import createLinkDetectionPlugin from 'draft-js-link-detection-plugin'

import {
  Toolbar,
  toolbarPlugin,
} from '@acter/components/util/text-editor-toolbar'
import { DecoratedLink } from '@acter/components/util/text-editor/decorated-link'
import { EditorContext } from '@acter/components/util/text-editor/editor-context'
import { linkStrategy } from '@acter/components/util/text-editor/link-strategy'
import { DraftEntityTypes } from '@acter/lib/constants'
import { getEntities } from '@acter/lib/draft-js/get-entities'
import { getPostMentionsSuggestions } from '@acter/lib/post/get-post-mentions-suggestions'
import { ActerConnection, PostMention } from '@acter/schema'

const { LINK, MENTION } = DraftEntityTypes

let htmlToDraft = null
if (typeof window === 'object') {
  // eslint-disable-next-line @typescript-eslint/no-var-requires
  htmlToDraft = require('html-to-draftjs').default
}

const mentionPlugin = createMentionPlugin()
const { MentionSuggestions } = mentionPlugin

interface heightType {
  height?: number
}
interface borderStylesType {
  radius?: number
  color?: string
  border?: string
}
interface stylesProp {
  borderStyles?: borderStylesType
  size?: heightType
}
export interface TextEditorProps extends heightType, stylesProp {
  initialValue: string
  handleInputChange: (data: string) => void
  currentMentions?: PostMention[]
  handleMentions?: (data: MentionData[]) => void
  editorRef?: Component
  handleEditorRef?: (editorRef: Component) => void
  clearText?: boolean
  hideEditorToolbar?: boolean
  placeholder?: string
  isComment?: boolean
  followers?: ActerConnection[]
}

export const TextEditor: FC<TextEditorProps> = ({
  handleInputChange,
  handleMentions,
  handleEditorRef,
  currentMentions,
  editorRef,
  clearText,
  initialValue,
  placeholder,
  borderStyles,
  height,
  isComment,
  followers,
  hideEditorToolbar,
}) => {
  const size = { height }
  const classes = useStyles({ borderStyles, size })
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const ref = useRef<any>(editorRef)

  const [open, setOpen] = useState(false)
  const [suggestions, setSuggestions] = useState([])
  const [selectedMentions, setSelectedMentions] =
    useState<PostMention[]>(currentMentions)

  const linkPlugin = createLinkPlugin({ linkTarget: '_blank' })

  const [inlinePlugins, InlineToolbar] = useMemo(() => {
    const inlineToolbarPlugin = createInlineToolbarPlugin()

    return [[inlineToolbarPlugin], inlineToolbarPlugin.InlineToolbar]
  }, [])

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const linkDetectionPlugin: any = createLinkDetectionPlugin()

  const plugins = [
    ...inlinePlugins,
    toolbarPlugin,
    linkPlugin,
    linkDetectionPlugin,
    mentionPlugin,
  ]

  // TO DO add mentions decorator strategy
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

  const mentions = getPostMentionsSuggestions(followers)

  useEffect(() => {
    if (editorState) {
      const entities = getEntities(editorState, MENTION)
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      const currentMentions = entities.map(({ content }: any) => {
        return content.mention
      })

      setSelectedMentions(currentMentions)
    }
  }, [editorState])

  useEffect(() => {
    if (clearText) {
      return setEditorState(EditorState.createEmpty())
    }
  }, [clearText])

  const onEditorStateChange = async (data) => {
    const contentState = data.getCurrentContent()
    const options = {
      entityStyleFn: (entity) => {
        const entityType = entity.get('type').toLowerCase()

        if (entityType === LINK) {
          const link = entity.getData()

          return {
            element: 'a',
            attributes: {
              href: link.url,
              target: '_blank',
            },
          }
        }

        if (entityType === MENTION) {
          const { mention } = entity.getData()

          return {
            element: 'a',
            attributes: {
              href: '#',
              name: mention.name,
              acterId: mention.acterId,
              id: mention.acterId,
            },
          }
        }
      },
    }

    const value = stateToHTML(contentState, options)

    handleInputChange(value)
    handleMentions && handleMentions(selectedMentions)
    setEditorState(data)
  }

  const onOpenChange = useCallback((_open: boolean) => {
    setOpen(_open)
  }, [])

  const onSearchChange = useCallback(({ value }: { value: string }) => {
    setSuggestions(defaultSuggestionsFilter(value, mentions))
  }, [])

  return (
    <Box
      className={clsx(
        classes.editorContainer,
        isComment && classes.editorComment
      )}
    >
      {!hideEditorToolbar && (
        <Box className={classes.toolbarContainer}>
          <Toolbar />
        </Box>
      )}

      <Box
        className={classes.editor}
        onClick={() => {
          handleEditorRef
        }}
      >
        <EditorContext.Provider value={editorState}>
          <Editor
            editorKey={'editor'}
            editorState={editorState}
            onChange={onEditorStateChange}
            plugins={plugins}
            ref={ref}
            placeholder={clearText && placeholder}
          />
          <MentionSuggestions
            open={open}
            onOpenChange={onOpenChange}
            onSearchChange={onSearchChange}
            suggestions={suggestions}
          />
        </EditorContext.Provider>

        <InlineToolbar>
          {(externalProps) => <linkPlugin.LinkButton {...externalProps} />}
        </InlineToolbar>
      </Box>
    </Box>
  )
}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    editorContainer: {
      backgroundColor: theme.colors.white,
      border: '1px solid',
      borderColor: theme.colors.blue.lightGrey,
      borderRadius: 8,
      minHeight: ({ size }: stylesProp) => size.height,
      flexGrow: 1,
      cursor: 'text',
      minInlineSize: '1.2rem',
      marginBottom: '1em',
      boxShadow: 'inset 0px 1px 8px -3px #ABABAB',
      [theme.breakpoints.down('md')]: {
        minHeight: ({ size }: stylesProp) => size.height + theme.spacing(5),
      },
    },
    editorComment: {
      backgroundColor: theme.colors.grey.extraLight,
      outline: 'none',
      fontFamily: theme.typography.fontFamily,
      fontWeight: theme.typography.fontWeightRegular,
      fontSize: 0.688,
      lineHeight: '1.2rem',
      resize: 'none',
      width: '100%',
    },
    toolbarContainer: {
      display: 'flex',
      width: '100%',
      justifyContent: 'center',
    },
    editor: {
      padding: 10,
      fontSize: '0.813rem',
      minHeight: '100%',
      '& .public-DraftEditor-content': {
        minHeight: 80,
      },
    },
  })
)
