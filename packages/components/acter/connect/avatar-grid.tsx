import { Grid, createStyles, withStyles, Theme } from '@material-ui/core'

export const AvatarGrid = withStyles((theme: Theme) =>
  createStyles({
    root: {
      paddingLeft: theme.spacing(2),
      paddingRight: theme.spacing(2),
    },
  })
)(Grid)
