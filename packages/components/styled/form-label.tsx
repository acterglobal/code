import { InputLabel, Theme } from '@mui/material'
import { blueGrey } from '@mui/material/colors'
import createStyles from '@mui/styles/createStyles'
import withStyles from '@mui/styles/withStyles'

export const FormLabel = withStyles((theme: Theme) =>
  createStyles({
    root: {
      color: blueGrey.A700,
      marginBottom: 10,
      fontSize: '0.9rem',
      fontWeight: theme.typography.fontWeightBold,
    },
  })
)(InputLabel)
