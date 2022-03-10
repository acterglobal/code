import { MenuItem as MuiMenuItem, Theme } from '@mui/material';

import createStyles from '@mui/styles/createStyles';
import withStyles from '@mui/styles/withStyles';

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
