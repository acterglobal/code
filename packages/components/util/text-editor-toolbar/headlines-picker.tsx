import { useEffect } from 'react'

import {
  HeadlineOneButton,
  HeadlineTwoButton,
  HeadlineThreeButton,
} from '@draft-js-plugins/buttons'
import { ToolbarChildrenProps } from '@draft-js-plugins/static-toolbar/lib/components/Toolbar'
import { Box } from '@material-ui/core'

export const HeadlinesPicker = ({
  ...props
}: ToolbarChildrenProps): JSX.Element => {
  const buttons = [HeadlineOneButton, HeadlineTwoButton, HeadlineThreeButton]
  const { getEditorState, setEditorState, onOverrideContent, theme } = props

  useEffect(() => {
    const onWindowClick = () => {
      onOverrideContent(undefined)

      return window.removeEventListener('click', onWindowClick)
    }
    window.addEventListener('click', onWindowClick)
  }, [])

  return (
    <Box>
      {buttons.map((Button, i) => (
        <Button
          key={i}
          getEditorState={getEditorState}
          setEditorState={setEditorState}
          theme={theme}
        />
      ))}
    </Box>
  )
}
