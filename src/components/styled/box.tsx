import { Box as MuiBox } from '@material-ui/core'
import { createStyles, withStyles, Theme } from '@material-ui/core/styles'

export const Box = withStyles((theme: Theme) =>
  createStyles({
    root: {
      display: 'flex',
      justifyContent: 'center',
    },
  })
)(MuiBox)
