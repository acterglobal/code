import { InputLabel, createStyles, withStyles, Theme } from '@material-ui/core'

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
