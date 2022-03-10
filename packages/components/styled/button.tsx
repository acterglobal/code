import { Button as MuiButton } from '@mui/material';

import createStyles from '@mui/styles/createStyles';
import withStyles from '@mui/styles/withStyles';

export const Button = withStyles(
  createStyles({
    root: {
      borderRadius: 50,
      textTransform: 'none',
      width: 100,
    },
  })
)(MuiButton)
