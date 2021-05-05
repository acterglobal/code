import React, { FC } from 'react'
import { Grid, Button, Typography } from '@material-ui/core'
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles'
import { InterestType } from '@schema'
import { grey } from '@material-ui/core/colors'
import { FilterInterests } from 'src/components/search/filter-interests'

export interface FilterTabsProps {
  interestTypes: InterestType[]
}

export const FilterTabs: FC<FilterTabsProps> = ({ interestTypes }) => {
  const classes = useStyles()

  return (
    <Grid item xs={12} sm={6} className={classes.root}>
      <FilterInterests interestTypes={interestTypes} />
      <Button
        className={classes.button}
        variant="contained"
        onClick={() => null}
      >
        <Typography variant="caption">Sort by</Typography>
      </Button>
      <Button
        className={classes.button}
        variant="contained"
        onClick={() => null}
      >
        <Typography variant="caption">Map View</Typography>
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
      color: grey[900],
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
