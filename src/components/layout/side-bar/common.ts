import { createStyles, StyleRules, Theme } from '@material-ui/core'

type CommonStyleRules = StyleRules<'item'>

export const commonStyles = (theme: Theme): CommonStyleRules =>
  createStyles({
    item: {
      '& a': {
        display: 'flex',
        color: theme.palette.secondary.contrastText,
        textDecoration: 'none',
      },
      '& .MuiListItemAvatar-root': {
        minWidth: 'auto',
      },
      '& .MuiListItem-gutters': {
        paddingLeft: theme.spacing(1),
        paddingRight: theme.spacing(1),
      },
      '& .MuiListItemIcon-root': {
        color: theme.palette.secondary.contrastText,
        minWidth: 'auto',
        paddingRight: theme.spacing(1),
      },
      '& .MuiListItemText-root': {
        color: theme.palette.secondary.contrastText,
      },
      '& .MuiListItem-divider': {
        borderColor: theme.palette.secondary.contrastText,
      },
    },
  })
