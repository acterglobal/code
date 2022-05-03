import { useContext, useState } from 'react'

import { ToolbarChildrenProps } from '@draft-js-plugins/static-toolbar/lib/components/Toolbar'
import { Box, IconButton, InputAdornment, TextField } from '@material-ui/core'
import { Check } from '@material-ui/icons'

import draftUtils from 'draft-js-plugins-utils'

import { EditorContext } from '../text-editor/editor-context'

export const LinkButton = ({ ...props }: ToolbarChildrenProps) => {
  const editorState = useContext(EditorContext)
  const [anchorElUrl, setAnchorElUrl] = useState<string>('')
  const { setEditorState } = props

  if (!editorState) return null

  console.log('EDITOR STATE', editorState)

  const handleClick = (anchorUrl) => {
    console.log('INPUT...', anchorUrl)
    setEditorState(draftUtils.createLinkAtSelection(editorState, anchorUrl))
  }

  return (
    <Box
      style={{
        position: 'absolute',
        // top: selectionRect.top,
        // left: selectionRect.right + 12,
        zIndex: 98,
        background: '#FFF',
        // display: toggleButtonGroupValue === "insert-link" ? "block" : "none"
      }}
    >
      <TextField
        variant="outlined"
        InputProps={{
          endAdornment: (
            <InputAdornment position="start">
              <IconButton onClick={() => handleClick(anchorElUrl)}>
                <Check />
              </IconButton>
            </InputAdornment>
          ),
        }}
        placeholder="gghttps://"
        value={anchorElUrl}
        onChange={(e) => setAnchorElUrl(e.target.value)}
      />
    </Box>
  )
}
