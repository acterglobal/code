import React, { FC, useEffect, useState } from 'react'
import { di } from 'react-magnetic-di/macro'

import { Box, Button, Grid, Typography } from '@material-ui/core'
import { green } from '@material-ui/core/colors'
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles'

import { useSearchVariables } from '@acter/components/contexts/search-variables'
import { DisplayResults } from '@acter/components/search/display-results'
import { FilterTabs } from '@acter/components/search/filter-tabs'
import { SearchBar } from '@acter/components/search/search-bar'
import { SearchActivitiesSortBy } from '@acter/lib/api/resolvers/get-order-by'
import { SearchType } from '@acter/lib/constants'
import { useSearchType } from '@acter/lib/search/use-search-type'

export const Search: FC = () => {
  di(useSearchType)
  const classes = useStyles()
  const searchType = useSearchType()
  const [searchText, setSearchText] = useState('')

  const [searchVariables, setSearchVariables] = useSearchVariables()

  const handleInputChange = (inputText: string) => setSearchText(inputText)

  const handleFilterInterests = (interests: string[]) => {
    setSearchVariables({
      ...searchVariables,
      interests,
    })
  }

  const handleSortBy = (orderBy: SearchActivitiesSortBy) => {
    setSearchVariables({
      ...searchVariables,
      orderBy,
    })
  }

  const handleSearch = () => {
    setSearchVariables({
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
      <DisplayResults />
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
