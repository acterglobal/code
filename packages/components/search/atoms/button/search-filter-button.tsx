import { Button } from '@material-ui/core'
import { createStyles, Theme, withStyles } from '@material-ui/core/styles'

export const SearchFilterButton = withStyles((theme: Theme) =>
  createStyles({
    root: {
      height: theme.spacing(4.5),
      borderRadius: theme.spacing(3),
      paddingLeft: theme.spacing(3),
      paddingRight: theme.spacing(3),
      marginRight: theme.spacing(3),
      minWidth: '54px',
      backgroundColor: theme.colors.white,
      color: theme.palette.secondary.main,
      fontWeight: theme.typography.fontWeightRegular,
      fontSize: '1rem',
      textTransform: 'capitalize',
      '&:hover, &.active': {
        backgroundColor: theme.palette.secondary.main,
        color: theme.colors.white,
        fontWeight: theme.typography.fontWeightBold,
        boxShadow: '1px 1px 1px rgba(0, 0, 0, 0.1)',
      },
    },
  })
)(Button)
