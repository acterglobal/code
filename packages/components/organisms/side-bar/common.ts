import { createStyles, StyleRules, Theme } from '@material-ui/core'

type CommonStyleRules = StyleRules<'item'>

export const commonStyles = (theme: Theme): CommonStyleRules =>
  createStyles({
    item: {
      '& a': {
        display: 'flex',
        alignItems: 'center',
        color: theme.palette.secondary.contrastText,
        textDecoration: 'none',
        width: '100%',
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
        paddingRight: theme.spacing(0.5),
      },
      '& .MuiListItemText-root': {
        color: theme.palette.secondary.contrastText,
      },
      '& .MuiListItem-divider': {
        borderColor: theme.palette.secondary.contrastText,
      },
      '& .MuiListItemText-primary': {
        fontWeight: theme.typography.fontWeightLight,
        fontSize: theme.spacing(1.8),
        color: theme.palette.secondary.contrastText,
      },
      '& .MuiBadge-colorError': {
        color: theme.colors.white,
        backgroundColor: theme.colors.others.notificationBadge,
      },
      '& .MuiBadge-badge': {
        height: theme.spacing(2),
        minWidth: theme.spacing(2),
        fontSize: '0.6rem',
      },
    },
  })
