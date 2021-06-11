import { Box, createStyles, withStyles, Theme } from '@material-ui/core'

export const FormSection = withStyles((theme: Theme) =>
  createStyles({
    root: {
      marginBottom: theme.spacing(2),
      width: '100%',
    },
  })
)(Box)
