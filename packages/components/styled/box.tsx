import { Box as MuiBox } from '@material-ui/core'
import { createStyles, withStyles } from '@material-ui/core/styles'

export const Box = withStyles(
  createStyles({
    root: {
      display: 'flex',
      justifyContent: 'center',
    },
  })
)(MuiBox)
