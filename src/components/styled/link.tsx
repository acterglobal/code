import { Link as MuiLink } from '@material-ui/core'
import { createStyles, withStyles, Theme } from '@material-ui/core/styles'

export const Link = withStyles((theme: Theme) =>
  createStyles({
    root: {
      cursor: 'pointer',
    },
  })
)(MuiLink)
