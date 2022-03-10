import { Box, Theme } from '@mui/material';

import createStyles from '@mui/styles/createStyles';
import withStyles from '@mui/styles/withStyles';

export const FormSection = withStyles((theme: Theme) =>
  createStyles({
    root: {
      paddingTop: theme.spacing(1),
      marginBottom: theme.spacing(1),
      width: '100%',
    },
  })
)(Box)
