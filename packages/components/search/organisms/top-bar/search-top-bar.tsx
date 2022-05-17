import React, { FC, useEffect, useState } from 'react'

import {
  createStyles,
  Hidden,
  IconButton,
  makeStyles,
  Theme,
  useMediaQuery,
} from '@material-ui/core'
import { FilterList } from '@material-ui/icons'

import { useSearchVariables } from '@acter/components/contexts/search-variables'
import { SearchActivitiesDateFilters } from '@acter/components/search/molecules/date-filters'
import {
  ShowMapSwitch,
  ShowMapSwitchProps,
} from '@acter/components/search/molecules/show-map-switch'
import { SearchBar } from '@acter/components/search/organisms/bar'
import { SearchInterestsFilter } from '@acter/components/search/organisms/interests-filter'
import { SearchSortBy } from '@acter/components/search/organisms/sort-by'
import { SearchActivitiesDateFilter } from '@acter/lib/api/resolvers/date-filter'
import { SearchActivitiesSortBy } from '@acter/lib/api/resolvers/get-order-by'
import { SearchType } from '@acter/lib/constants'
import { useSearchType } from '@acter/lib/search/use-search-type'

export interface SearchTopBarProps
  extends Pick<ShowMapSwitchProps, 'resultDisplayType'> {
  onResultDisplayTypeChange: ShowMapSwitchProps['onChange']
}

export const SearchTopBar: FC<SearchTopBarProps> = ({
  resultDisplayType,
  onResultDisplayTypeChange,
}) => {
  const classes = useStyles()
  const searchType = useSearchType()
  const [showOtherControls, setShowOtherControls] = useState(true)
  const [searchVariables, setSearchVariables] = useSearchVariables()
  const [currentDateFilter, setCurrentDateFilter] =
    useState<SearchActivitiesDateFilter>(SearchActivitiesDateFilter.UPCOMING)
  const isSmallScreen = useMediaQuery((theme: Theme) =>
    theme.breakpoints.down('xs')
  )

  useEffect(() => {
    setShowOtherControls(!isSmallScreen)
  }, [isSmallScreen])

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

  const handleDateFilter = (dateFilter: SearchActivitiesDateFilter) => {
    setCurrentDateFilter(dateFilter)
    setSearchVariables({
      ...searchVariables,
      dateFilter,
    })
  }

  return (
    <>
      <div className={classes.searchTopBar}>
        <div className={classes.main}>
          <SearchBar onClick={handleSearch} />

          <Hidden smUp>
            <IconButton
              onClick={() => setShowOtherControls(!showOtherControls)}
            >
              <FilterList />
            </IconButton>
          </Hidden>
        </div>

        {showOtherControls && (
          <div className={classes.otherControls}>
            <SearchInterestsFilter applyFilters={handleFilterInterests} />

            {searchType === SearchType.ACTIVITIES && (
              <SearchSortBy
                sortBy={searchVariables.orderBy}
                onChange={handleSortBy}
              />
            )}

            <ShowMapSwitch
              resultDisplayType={resultDisplayType}
              onChange={onResultDisplayTypeChange}
            />
          </div>
        )}
      </div>

      {searchType === SearchType.ACTIVITIES && (
        <SearchActivitiesDateFilters
          currentDateFilter={currentDateFilter}
          onClick={handleDateFilter}
        />
      )}
    </>
  )
}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    searchTopBar: {
      display: 'flex',
      alignItems: 'center',
      [theme.breakpoints.down('xs')]: {
        flexDirection: 'column',
        '& > *': {
          marginBottom: theme.spacing(1),
        },
      },
    },
    main: {
      display: 'flex',
      flexGrow: 1,
    },
    otherControls: {
      display: 'flex',
      [theme.breakpoints.down('xs')]: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-evenly',
        width: '95%',
        '& > *': {
          flexGrow: 1,
          marginBottom: theme.spacing(1),
          marginRight: theme.spacing(-0.5),
        },
      },
    },
  })
)
