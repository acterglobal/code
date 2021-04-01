import {
  Button as MuiButton,
  createStyles,
  withStyles,
} from '@material-ui/core'

export const Button = withStyles(
  createStyles({
    root: {
      borderRadius: 50,
      textTransform: 'none',
      width: 200,
    },
  })
)(MuiButton)
