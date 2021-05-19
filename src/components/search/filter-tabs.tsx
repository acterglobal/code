import React, { FC } from 'react'
import { Grid, Button, Typography } from '@material-ui/core'
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles'
import { grey } from '@material-ui/core/colors'
import {
  FilterInterests,
  FilterInterestsProps,
} from 'src/components/search/filter-interests'
import { SortBy, SortByProps } from 'src/components/search/sort-by'
import { ACTERS, ACTIVITIES } from 'src/constants'
import { SearchType } from 'src/components/search'

type FilterTabsProps = FilterInterestsProps &
  SortByProps & { searchType: SearchType }

export const FilterTabs: FC<FilterTabsProps> = ({
  searchType,
  interestTypes,
  applyFilters,
  sortBy,
  applySortBy,
}) => {
  const classes = useStyles()
  return (
    <Grid
      item
      xs={12}
      sm={searchType === ACTERS ? 4 : 6}
      className={classes.root}
    >
      <FilterInterests
        interestTypes={interestTypes}
        applyFilters={applyFilters}
      />

      {searchType === ACTIVITIES && (
        <SortBy sortBy={sortBy} applySortBy={applySortBy} />
      )}

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
