import {
  MenuItem as MuiMenuItem,
  createStyles,
  withStyles,
  Theme,
} from '@material-ui/core'

export const MenuItem = withStyles((theme: Theme) =>
  createStyles({
    root: {
      fontSize: theme.typography.fontSize,
      padding: theme.spacing(1),
      borderStyle: 'solid',
      borderTopWidth: '1px',
      borderColor: theme.palette.divider,
      '&:first-child': {
        borderTopWidth: 0,
      },
    },
  })
)(MuiMenuItem)
