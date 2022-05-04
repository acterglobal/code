import { SyntheticEvent } from 'react'

import { ToolbarChildrenProps } from '@draft-js-plugins/static-toolbar/lib/components/Toolbar'
import { createStyles, makeStyles, Theme } from '@material-ui/core'

import { HeadlinesPicker } from '@acter/components/util/text-editor-toolbar/headlines-picker'

export const HeadlinesButton = ({
  ...props
}: ToolbarChildrenProps): JSX.Element => {
  const classes = useStyles()

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

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    headlineButton: {
      backgroundColor: theme.colors.toolbar.main,
      color: '#888',
      fontSize: 18,
      border: 0,
      paddingTop: 2,
      height: 34,
      width: 36,
      '&:hover, &:focus': {
        backgroundColor: theme.colors.toolbar.hover,
      },
    },
  })
)
