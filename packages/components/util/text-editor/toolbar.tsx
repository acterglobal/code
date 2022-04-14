import React from 'react'

import {
  ItalicButton,
  BoldButton,
  UnderlineButton,
  CodeButton,
  UnorderedListButton,
  OrderedListButton,
  BlockquoteButton,
  CodeBlockButton,
} from '@draft-js-plugins/buttons'
import createToolbarPlugin from '@draft-js-plugins/static-toolbar'
import { createStyles, Grid, makeStyles } from '@material-ui/core'
import Divider from '@material-ui/core/Divider'

export const toolbarPlugin = createToolbarPlugin()

export const Toolbar = (): JSX.Element => {
  const classes = useStyles()
  const { Toolbar } = toolbarPlugin

  return (
    <Toolbar>
      {(externalProps) => (
        <Grid className={classes.toolbar}>
          <BoldButton {...externalProps} />
          <ItalicButton {...externalProps} />
          <UnderlineButton {...externalProps} />
          <CodeButton {...externalProps} />
          <Divider orientation="vertical" />
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
  })
)
