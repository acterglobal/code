import React, { FC, SyntheticEvent, useEffect } from 'react'

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
import { Box, createStyles, Grid, makeStyles, Theme } from '@material-ui/core'

export const toolbarPlugin = createToolbarPlugin()

export const Toolbar: FC = () => {
  const classes = useStyles()
  const { Toolbar } = toolbarPlugin

  const HeadlinesPicker = ({ ...props }) => {
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

  const HeadlinesButton = ({ ...props }) => {
    const { onOverrideContent } = props
    const onMouseDown = (event: SyntheticEvent) => event.preventDefault()

    const onClick = () => onOverrideContent(HeadlinesPicker)

    return (
      <div onMouseDown={onMouseDown}>
        <button onClick={onClick} className={classes.headlineButton}>
          H
        </button>
      </div>
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

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    toolbar: {
      display: 'flex',
      flex: 1,
      flexWrap: 'wrap',
    },
    headlineButtonWrapper: {
      display: 'inline-block',
    },
    headlineButton: {
      backgroundColor: '#fbfbfb',
      color: '#888',
      fontSize: 18,
      border: 0,
      paddingTop: 2,
      height: 34,
      width: 36,
      '&:hover, &:focus': {
        backgroundColor: '#f3f3f3',
      },
    },
    separator: {
      display: 'flex',
      alignItems: 'center',
    },
    menuItem: {
      fontSize: '0.8rem',
      display: 'flex',
      justifyContent: 'center',
      color: theme.palette.secondary.main,
      '&:hover': {
        backgroundColor: theme.palette.secondary.contrastText,
      },
    },
  })
)
