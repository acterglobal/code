import { Link as MuiLink } from '@mui/material'
import createStyles from '@mui/styles/createStyles';
import withStyles from '@mui/styles/withStyles';

export const Link = withStyles(
  createStyles({
    root: {
      cursor: 'pointer',
    },
  })
)(MuiLink)
