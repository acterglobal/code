/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import * as React from 'react'

import { createStyles, makeStyles, Theme } from '@material-ui/core/styles'

import { EditorContext } from '@acter/components/util/text-editor/editor-context'

export const DecoratedLink = ({
  children,
  entityKey,
}: {
  children: React.ReactNode
  entityKey: string
}) => {
  const classes = useStyles()
  const editorState = React.useContext(EditorContext)
  const entity = editorState.getCurrentContent().getEntity(entityKey)
  const entityData = entity ? entity.getData() : undefined
  const href = (entityData && entityData.url) || undefined
  return (
    <a
      className={classes.link}
      title={href}
      href={href}
      target="_blank"
      rel="noopener"
    >
      {children}
    </a>
  )
}
const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    link: {
      fontWeight: theme.typography.fontWeightBold,
      color: theme.palette.primary.main,
      '&:hover': {
        color: theme.palette.secondary.main,
      },
    },
  })
)
