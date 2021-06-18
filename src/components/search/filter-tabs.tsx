import React, { FC } from 'react'
import { Grid } from '@material-ui/core'
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles'
import {
  FilterInterests,
  FilterInterestsProps,
} from 'src/components/search/filter-interests'
import { SortBy, SortByProps } from 'src/components/search/sort-by'
import { SearchType } from 'src/constants'

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
      sm={searchType === SearchType.ACTERS ? 4 : 6}
      className={classes.root}
    >
      <FilterInterests
        interestTypes={interestTypes}
        applyFilters={applyFilters}
      />

      {searchType === SearchType.ACTIVITIES && (
        <SortBy sortBy={sortBy} applySortBy={applySortBy} />
      )}
    </Grid>
  )
}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: 'flex',
      justifyContent: 'center',
      [theme.breakpoints.down('xs')]: {
        justifyContent: 'center',
      },
    },
  })
)
