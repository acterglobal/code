import { Box, createStyles, withStyles, Theme } from '@material-ui/core'

export const ButtonsContainerRight = withStyles((theme: Theme) =>
  createStyles({
    root: {
      display: 'flex',
      justifyContent: 'flex-end',
      zIndex: 10,
      ['& > button:first-child']: {
        marginRight: theme.spacing(2),
      },
    },
  })
)(Box)
