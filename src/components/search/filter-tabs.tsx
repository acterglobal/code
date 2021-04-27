import React, { FC } from 'react'
import { Grid, Button } from '@material-ui/core'
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles'

export const FilterTabs: FC = () => {
  const classes = useStyles()
  return (
    <Grid item xs={12} sm={6} className={classes.root}>
      <Button
        className={classes.button}
        variant="contained"
        onClick={() => null}
      >
        Filters
      </Button>
      <Button
        className={classes.button}
        variant="contained"
        onClick={() => null}
      >
        Sort by
      </Button>
      <Button
        className={classes.button}
        variant="contained"
        onClick={() => null}
      >
        Map View
      </Button>
    </Grid>
  )
}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: 'flex',
      alignItems: 'center',
      [theme.breakpoints.down('xs')]: {
        justifyContent: 'center',
      },
    },
    button: {
      height: theme.spacing(3.5),
      minWidth: theme.spacing(18),
      borderRadius: theme.spacing(3),
      marginRight: theme.spacing(1),
      color: 'black',
      backgroundColor: 'white',
      textTransform: 'capitalize',
      fontSize: '0.7rem',
      '&:hover': {
        backgroundColor: 'white',
      },
      [theme.breakpoints.down('sm')]: {
        minWidth: theme.spacing(10),
      },
    },
  })
)
