import React, { FC } from 'react'

import { createStyles, makeStyles, Theme } from '@material-ui/core'

import { useSearchVariables } from '@acter/components/contexts/search-variables'
import { SearchBar } from '@acter/components/organisms/search/bar'
import { InterestsFilter } from '@acter/components/organisms/search/interests-filter'
import { SortBy } from '@acter/components/organisms/search/sort-by'
import { SearchActivitiesSortBy } from '@acter/lib/api/resolvers/get-order-by'
import { SearchType } from '@acter/lib/constants'
import { useSearchType } from '@acter/lib/search/use-search-type'

export const SearchTopBar: FC = () => {
  const classes = useStyles()
  const searchType = useSearchType()

  const [searchVariables, setSearchVariables] = useSearchVariables()

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

  const handleSearch = (searchText) => {
    setSearchVariables({
      ...searchVariables,
      searchText,
    })
  }

  return (
    <div className={classes.root}>
      <SearchBar onClick={handleSearch} />

      <div className={classes.otherControls}>
        <InterestsFilter applyFilters={handleFilterInterests} />

        {searchType === SearchType.ACTIVITIES && (
          <SortBy sortBy={searchVariables.orderBy} applySortBy={handleSortBy} />
        )}
      </div>
    </div>
  )
}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: 'flex',
      [theme.breakpoints.down('xs')]: {
        flexDirection: 'column',
        '& > *': {
          marginBottom: theme.spacing(1),
        },
      },
    },
    otherControls: {
      display: 'inline',
      [theme.breakpoints.down('xs')]: {
        display: 'flex',
        justifyContent: 'space-evenly',
        '& > *': {
          flexGrow: 1,
        },
      },
    },
  })
)
