import React, { FC } from 'react'

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
import createToolbarPlugin, {
  Separator,
} from '@draft-js-plugins/static-toolbar'
import { Box, createStyles, Grid, makeStyles } from '@material-ui/core'

import { HeadlinesButton } from '@acter/components/util/text-editor-toolbar/headlines-button'

export const toolbarPlugin = createToolbarPlugin()

export const Toolbar: FC = () => {
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
      flex: 1,
      flexWrap: 'wrap',
    },
    separator: {
      display: 'flex',
      alignItems: 'center',
    },
  })
)
