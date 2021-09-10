import React, { FC, useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import { Box, Button, Grid, Typography } from '@material-ui/core'
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles'
import { green } from '@material-ui/core/colors'
import { SearchBar } from '@acter/components/search/search-bar'
import { FilterTabs } from '@acter/components/search/filter-tabs'
import { DisplayResults } from '@acter/components/search/display-results'
import { SearchActivitiesSortBy } from '@acter/lib/api/resolvers/get-order-by'
import { InterestType } from '@acter/schema'
import { SearchType } from '@acter/lib/constants'

export interface SearchProps {
  searchType: SearchType
  interestTypes: InterestType[]
}

export const Search: FC<SearchProps> = ({ searchType, interestTypes }) => {
  const classes = useStyles()
  const router = useRouter()
  const [searchText, setSearchText] = useState('')
  const [filterInterests, setFilterInterests] = useState([])
  const [sortBy, setSortBy] = useState(SearchActivitiesSortBy.DATE)
  const [searchReady, setSearchReady] = useState(false)
  const [resultCount, setResultCount] = useState(0)

  const handleInputChange = (inputText: string) => setSearchText(inputText)

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

  useEffect(() => {
    if (!router.query?.types) return setSearchReady(false)
    const types = Array.isArray(router.query.types)
      ? router.query.types
      : [router.query.types]
    setSearchReady(types.length >= 0)
  }, [router.query?.types])

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
              {resultCount} {resultCount === 1 ? 'Result' : 'Results'}
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

      {!searchReady && (
        <Box className={classes.emptySearchTypesMessage}>
          <Typography variant="body2">
            You must select at least one type on the left to search
          </Typography>
        </Box>
      )}

      {searchReady && (
        <DisplayResults
          searchType={searchType}
          interestTypes={interestTypes}
          setResultCount={setResultCount}
        />
      )}
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
    emptySearchTypesMessage: {
      marginTop: theme.spacing(5),
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
