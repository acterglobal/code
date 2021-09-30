import React, { FC, useEffect, useState } from 'react'
import { di } from 'react-magnetic-di/macro'

import { useReactiveVar } from '@apollo/client'
import { Box, Button, Grid, Typography } from '@material-ui/core'
import { green } from '@material-ui/core/colors'
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles'

import { DisplayResults } from '@acter/components/search/display-results'
import { FilterTabs } from '@acter/components/search/filter-tabs'
import { SearchBar } from '@acter/components/search/search-bar'
import { SearchActivitiesSortBy } from '@acter/lib/api/resolvers/get-order-by'
import { SearchType } from '@acter/lib/constants'
import { searchVar } from '@acter/lib/search/search-var'
import { useSearchType } from '@acter/lib/search/use-search-type'
import { useSearchTypes } from '@acter/lib/search/use-search-types'

export const Search: FC = () => {
  di(useSearchType)
  const classes = useStyles()
  const searchType = useSearchType()
  const [searchText, setSearchText] = useState('')
  const [resultCount, setResultCount] = useState(0)
  const [searchReady, setSearchReady] = useState(false)

  const types = useSearchTypes()
  const searchVariables = useReactiveVar(searchVar)

  useEffect(() => {
    searchVar({
      ...searchVariables,
      types,
    })
    setSearchReady(true)
  }, [])

  const handleInputChange = (inputText: string) => setSearchText(inputText)

  const handleFilterInterests = (interests: string[]) => {
    searchVar({
      ...searchVariables,
      interests,
    })
  }

  const handleSortBy = (orderBy: SearchActivitiesSortBy) => {
    searchVar({
      ...searchVariables,
      orderBy,
    })
  }

  const handleSearch = () => {
    searchVar({
      ...searchVariables,
      searchText,
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
              {resultCount} {resultCount === 1 ? 'Result' : 'Results'}
            </Typography>
            <Box className={classes.searchInput}>
              <SearchBar handleInputChange={handleInputChange} />
            </Box>
            <Button
              className={classes.searchButton}
              variant="contained"
              onClick={handleSearch}
            >
              <Typography variant="caption">Search</Typography>
            </Button>
          </Grid>

          <FilterTabs
            searchType={searchType}
            applyFilters={handleFilterInterests}
            sortBy={searchVariables.orderBy}
            applySortBy={handleSortBy}
          />
        </Grid>
      </Box>
      {searchReady && <DisplayResults setResultCount={setResultCount} />}
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
