import React, {
  FC,
  useState,
  useEffect,
  useMemo,
  useRef,
  useCallback,
} from 'react'

import createLinkPlugin from '@draft-js-plugins/anchor'
import Editor from '@draft-js-plugins/editor'
import createInlineToolbarPlugin from '@draft-js-plugins/inline-toolbar'
import '@draft-js-plugins/inline-toolbar/lib/plugin.css'
import createMentionPlugin, {
  defaultSuggestionsFilter,
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
import { mentions } from '@acter/components/util/text-editor/mentions'
import { DraftEntityTypes } from '@acter/lib/constants'
import { getEntities } from '@acter/lib/draft-js/get-entities'
import { getInitials } from '@acter/lib/get-initials'
import { ActerConnection } from '@acter/schema'

const { LINK, MENTION } = DraftEntityTypes

let htmlToDraft = null
if (typeof window === 'object') {
  // eslint-disable-next-line @typescript-eslint/no-var-requires
  htmlToDraft = require('html-to-draftjs').default
}

const mentionPlugin = createMentionPlugin()
const { MentionSuggestions } = mentionPlugin
// const plugins = [mentionPlugin]

interface widthHeightType {
  height?: number
}
interface borderStylesType {
  radius?: number
  color?: string
  border?: string
}
interface stylesProp {
  borderStyles?: borderStylesType
  size?: widthHeightType
}
export interface TextEditorProps extends widthHeightType, stylesProp {
  initialValue: string
  handleInputChange: (data: string) => void
  hideEditorToolbar?: boolean
  placeholder?: string
  isComment?: boolean
  followers?: ActerConnection[]
}

export const TextEditor: FC<TextEditorProps> = ({
  handleInputChange,
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
  const [clearText, setClearText] = useState(false)
  const ref = useRef<Editor>(null)

  const [open, setOpen] = useState(false)
  const [suggestions, setSuggestions] = useState([])
  const [selectedMentions, setSelectedMentions] = useState([])

  useEffect(() => {
    if (followers) {
      const followersList = followers.map((follower) => ({
        name: follower.Follower.name,
        avatar: follower.Follower.avatarUrl
          ? follower.Follower.avatarUrl
          : getInitials(follower.Follower.name || ''),
      }))
      setSuggestions([followersList])
    }
  }, [followers])

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
    if (editorState) {
      const entities = getEntities(editorState, MENTION)
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      const mentions = entities.map(({ content }: any) => {
        return content.mention
      })

      setSelectedMentions(mentions)
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
        if (entity.get('type').toLowerCase() === LINK) {
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

  const handleEditorRef = (editorRef) => {
    editorRef?.focus()
    setClearText(false)
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
    },
  })
)
