import React, { FC, useEffect } from 'react'

import {
  ItalicButton,
  BoldButton,
  UnderlineButton,
  CodeButton,
  HeadlineOneButton,
  HeadlineTwoButton,
  HeadlineThreeButton,
  UnorderedListButton,
  OrderedListButton,
  BlockquoteButton,
  CodeBlockButton,
} from '@draft-js-plugins/buttons'
import createToolbarPlugin, {
  Separator,
} from '@draft-js-plugins/static-toolbar'
import { Box, createStyles, Grid, makeStyles } from '@material-ui/core'

export const toolbarPlugin = createToolbarPlugin()

export interface ToolbarProps {
  onEditorStateChange: (data) => Promise<void>
}

export const Toolbar: FC<ToolbarProps> = ({
  onEditorStateChange,
}): JSX.Element => {
  const classes = useStyles()
  const { Toolbar } = toolbarPlugin

  const HeadlinesPicker = ({ ...props }) => {
    const buttons = [HeadlineOneButton, HeadlineTwoButton, HeadlineThreeButton]
    const { getEditorState, setEditorState, onOverrideContent, theme } = props

    useEffect(() => {
      const onWindowClick = () => {
        onEditorStateChange(getEditorState())
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

  const HeadlinesButton = ({ ...props }) => {
    const { onOverrideContent } = props
    const onClick = () => onOverrideContent(HeadlinesPicker)

    return (
      <Box className={classes.headlineButtonWrapper}>
        <button onClick={onClick} className={classes.headlineButton}>
          H
        </button>
      </Box>
    )
  }

  return (
    <Toolbar>
      {(externalProps) => (
        <Grid className={classes.toolbar}>
          <BoldButton {...externalProps} />
          <ItalicButton {...externalProps} />
          <UnderlineButton {...externalProps} />
          <CodeButton {...externalProps} />

          <Box className={classes.separator}>
            <Separator />
          </Box>

          <HeadlinesButton {...externalProps} />
          <UnorderedListButton {...externalProps} />
          <OrderedListButton {...externalProps} />
          <BlockquoteButton {...externalProps} />
          <CodeBlockButton {...externalProps} />
        </Grid>
      )}
    </Toolbar>
  )
}

const useStyles = makeStyles(() =>
  createStyles({
    toolbar: {
      display: 'flex',
    },
    headlineButtonWrapper: {
      display: 'inline-block',
    },
    headlineButton: {
      backgroundColor: '#fbfbfb',
      color: '#888',
      fontSize: 18,
      border: 0,
      paddingTop: 5,
      verticalAlign: 'bottom',
      height: 34,
      width: 36,
    },
    separator: {
      display: 'flex',
      alignItems: 'center',
    },
  })
)
