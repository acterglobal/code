import { Link as MuiLink } from '@material-ui/core'
import { createStyles, withStyles } from '@material-ui/core/styles'

export const Link = withStyles(
  createStyles({
    root: {
      cursor: 'pointer',
    },
  })
)(MuiLink)
