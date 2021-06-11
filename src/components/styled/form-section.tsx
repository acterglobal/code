import { Box, createStyles, withStyles, Theme } from '@material-ui/core'

export const FormSection = withStyles((theme: Theme) =>
  createStyles({
    root: {
      paddingTop: theme.spacing(1),
      marginBottom: theme.spacing(1),
      width: '100%',
    },
  })
)(Box)
