import { InputLabel, Theme } from '@mui/material';

import createStyles from '@mui/styles/createStyles';
import withStyles from '@mui/styles/withStyles';

export const FormLabel = withStyles((theme: Theme) =>
  createStyles({
    root: {
      color: theme.colors.grey.dark,
      marginBottom: 10,
      fontSize: '0.9rem',
      fontWeight: theme.typography.fontWeightBold,
    },
  })
)(InputLabel)
