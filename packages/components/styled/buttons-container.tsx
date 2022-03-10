import { Box, Theme } from '@mui/material';

import createStyles from '@mui/styles/createStyles';
import withStyles from '@mui/styles/withStyles';

export const ButtonsContainer = withStyles((theme: Theme) =>
  createStyles({
    root: {
      display: 'flex',
      justifyContent: 'space-evenly',
      marginTop: theme.spacing(1),
      backgroundColor: 'white',
      zIndex: 10,
    },
  })
)(Box)
