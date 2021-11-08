import { Button, createStyles, withStyles, Theme } from '@material-ui/core'

export const ConnectButton = withStyles((theme: Theme) =>
  createStyles({
    root: {
      borderRadius: theme.spacing(3),
      paddingLeft: theme.spacing(3),
      paddingRight: theme.spacing(3),
      minWidth: theme.spacing(13),
      height: theme.spacing(3.5),
      backgroundColor: theme.palette.primary.main,
      color: 'white',
      textTransform: 'capitalize',
      fontWeight: theme.typography.fontWeightRegular,
      '&:hover': {
        backgroundColor: theme.palette.primary.main,
      },
    },
  })
)(Button)
