import { Box as MuiBox } from '@mui/material'
import createStyles from '@mui/styles/createStyles';
import withStyles from '@mui/styles/withStyles';

export const Box = withStyles(
  createStyles({
    root: {
      display: 'flex',
      justifyContent: 'center',
    },
  })
)(MuiBox)
