import React, { FC, useState } from 'react'
import { useRouter } from 'next/router'
import { Box, Button, Grid, Typography } from '@material-ui/core'
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles'
import { green } from '@material-ui/core/colors'
import { SearchBar } from '@acter/components/search/search-bar'
import { FilterTabs } from '@acter/components/search/filter-tabs'
import {
  DisplayResults,
  DisplayResultsProps,
} from '@acter/components/search/display-results'
import { SearchActivitiesSortBy } from '@acter/lib/api/resolvers/get-order-by'
import { Acter, InterestType } from '@acter/schema'
import { SearchType } from '@acter/lib/constants'
import { useFetchActers } from '@acter/lib/acter/use-fetch-acters'
import { LoadingSpinner } from '@acter/components/util/loading-spinner'
export interface SearchProps extends Omit<DisplayResultsProps, 'acters'> {
  searchType: SearchType
  interestTypes: InterestType[]
}

export const Search: FC<SearchProps> = ({ searchType, interestTypes }) => {
  const classes = useStyles()
  const router = useRouter()
  const [searchText, setSearchText] = useState('')
  const [filterInterests, setFilterInterests] = useState([])
  const [sortBy, setSortBy] = useState(SearchActivitiesSortBy.DATE)

  const { acters, loading } = useFetchActers(searchType)

  if (loading || !acters) {
    return <LoadingSpinner load={loading || !acters} />
  }

  const handleInputChange = (inputText: string) => {
    setSearchText(inputText)
  }

  const handleFilterInterests = (filterInterests: string[]) => {
    setFilterInterests(filterInterests)
    handleSearch({ searchText, filterInterests, sortBy })
  }

  const handleSortBy = (sortBy: SearchActivitiesSortBy) => {
    setSortBy(sortBy)
    handleSearch({ searchText, filterInterests, sortBy })
  }

  const handleSearch = ({ searchText, filterInterests, sortBy }) => {
    router.push({
      pathname: router.pathname,
      query: {
        ...router.query,
        search: searchText,
        interests: filterInterests.length > 0 ? filterInterests.join(',') : '',
        sortBy,
      },
    })
  }

  return (
    <Box className={classes.root}>
      <Box className={classes.searchSection}>
        <Grid container spacing={2}>
          <Grid
            item
            xs={12}
            sm={searchType === SearchType.ACTERS ? 8 : 6}
            className={classes.searchSectionItem}
          >
            <Typography
              className={classes.results}
              variant="body2"
              aria-label="search-results"
            >
              {acters?.length} {acters?.length === 1 ? 'Result' : 'Results'}
            </Typography>
            <Box className={classes.searchInput}>
              <SearchBar handleInputChange={handleInputChange} />
            </Box>
            <Button
              className={classes.searchButton}
              variant="contained"
              onClick={() =>
                handleSearch({ searchText, filterInterests, sortBy })
              }
            >
              <Typography variant="caption">Search</Typography>
            </Button>
          </Grid>

          <FilterTabs
            searchType={searchType}
            interestTypes={interestTypes}
            applyFilters={handleFilterInterests}
            sortBy={sortBy}
            applySortBy={handleSortBy}
          />
        </Grid>
      </Box>

      <DisplayResults searchType={searchType} interestTypes={interestTypes} />
      {/* <Box>
        <Button onClick={loadMore}>Load more</Button>
      </Box> */}
    </Box>
  )
}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
    },
    searchSection: {
      display: 'flex',
      width: '80%',
      marginTop: theme.spacing(4),
      [theme.breakpoints.down('xs')]: {
        width: '95%',
      },
    },
    searchSectionItem: {
      display: 'flex',
      alignItems: 'center',
    },
    results: {
      color: theme.palette.secondary.main,
      flexGrow: 1,
    },
    searchInput: {
      display: 'flex',
      flexGrow: 8,
    },
    searchButton: {
      height: theme.spacing(3.5),
      minWidth: theme.spacing(15),
      borderRadius: theme.spacing(3),
      marginLeft: theme.spacing(1),
      color: 'white',
      backgroundColor: green[500],
      textTransform: 'capitalize',
      '&:hover': {
        backgroundColor: green[500],
      },
      [theme.breakpoints.down('sm')]: {
        minWidth: theme.spacing(10),
      },
    },
  })
)
