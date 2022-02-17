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
import {
  ShowMapSwitch,
  ShowMapSwitchProps,
} from '@acter/components/molecules/search/show-map-switch'
import { SearchBar } from '@acter/components/organisms/search/bar'
import { InterestsFilter } from '@acter/components/organisms/search/interests-filter'
import { SortBy } from '@acter/components/organisms/search/sort-by'
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

  return (
    <div className={classes.searchTopBar}>
      <div className={classes.main}>
        <SearchBar onClick={handleSearch} />

        <Hidden smUp>
          <IconButton onClick={() => setShowOtherControls(!showOtherControls)}>
            <FilterList />
          </IconButton>
        </Hidden>
      </div>

      {showOtherControls && (
        <div className={classes.otherControls}>
          <InterestsFilter applyFilters={handleFilterInterests} />

          {searchType === SearchType.ACTIVITIES && (
            <SortBy sortBy={searchVariables.orderBy} onChange={handleSortBy} />
          )}

          <ShowMapSwitch
            resultDisplayType={resultDisplayType}
            onChange={onResultDisplayTypeChange}
          />
        </div>
      )}
    </div>
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
