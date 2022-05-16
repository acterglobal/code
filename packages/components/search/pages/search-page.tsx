import React, { FC, useState } from 'react'

import { Box, Button } from '@material-ui/core'
import {
  createStyles,
  makeStyles,
  Theme,
  withStyles,
} from '@material-ui/core/styles'

import { useSearchVariables } from '@acter/components/contexts/search-variables'
import { SearchResultsInfiniteList } from '@acter/components/search/organisms/results-infinite-list'
import { SearchResultsMapList } from '@acter/components/search/organisms/results-map-list'
import { SearchTopBar } from '@acter/components/search/organisms/top-bar'
import { SearchActivitiesDateFilter } from '@acter/lib/api/resolvers/date-filter'
import { ResultDisplayType } from '@acter/lib/constants'

const { ALL, UPCOMING, PAST } = SearchActivitiesDateFilter

export interface SearchPageProps {
  initialResultDisplayType?: ResultDisplayType
}

export const SearchPage: FC<SearchPageProps> = ({
  initialResultDisplayType = ResultDisplayType.LIST,
}) => {
  const classes = useStyles()
  const [searchVariables, setSearchVariables] = useSearchVariables()
  const [resultDisplayType, setResultDisplayType] = useState<ResultDisplayType>(
    initialResultDisplayType
  )

  const [currentDateFilter, setCurrentDateFilter] =
    useState<SearchActivitiesDateFilter>(UPCOMING)

  const handleDateFilter = (dateFilter: SearchActivitiesDateFilter) => {
    setCurrentDateFilter(dateFilter)
    setSearchVariables({
      ...searchVariables,
      dateFilter,
    })
  }

  return (
    <Box className={classes.searchPage}>
      <Box className={classes.controls}>
        <SearchTopBar
          resultDisplayType={resultDisplayType}
          onResultDisplayTypeChange={setResultDisplayType}
        />
      </Box>
      <Box className={classes.results}>
        <StyledButton
          className={currentDateFilter === UPCOMING && classes.active}
          onClick={() => handleDateFilter(UPCOMING)}
        >
          Upcoming
        </StyledButton>
        <StyledButton
          className={currentDateFilter === PAST && classes.active}
          onClick={() => handleDateFilter(PAST)}
        >
          Past
        </StyledButton>
        <StyledButton
          className={currentDateFilter === ALL && classes.active}
          onClick={() => handleDateFilter(ALL)}
        >
          All
        </StyledButton>
        {resultDisplayType === ResultDisplayType.LIST && (
          <SearchResultsInfiniteList />
        )}
        {resultDisplayType === ResultDisplayType.MAP && (
          <SearchResultsMapList />
        )}
      </Box>
    </Box>
  )
}

const StyledButton = withStyles((theme: Theme) =>
  createStyles({
    root: {
      borderRadius: theme.spacing(3),
      paddingLeft: theme.spacing(3),
      paddingRight: theme.spacing(3),
      marginRight: theme.spacing(3),
      minWidth: '54px',
      height: theme.spacing(4.5),
      backgroundColor: theme.colors.white,
      color: theme.palette.secondary.main,
      fontWeight: theme.typography.fontWeightRegular,
      fontSize: '1rem',
      textTransform: 'capitalize',
      '&:hover, &.active': {
        backgroundColor: theme.palette.secondary.main,
        color: theme.colors.white,
        fontWeight: theme.typography.fontWeightBold,
        boxShadow: '1px 1px 1px rgba(0, 0, 0, 0.1)',
      },
    },
  })
)(Button)

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    searchPage: {
      margin: '0 5%',
      height: '100%',
      display: 'flex',
      flexDirection: 'column',
    },
    controls: {
      paddingTop: theme.spacing(4),
      paddingBottom: theme.spacing(2),
      flex: '0 1 auto',
    },
    results: {
      flex: '1 1 auto',
      height: 'calc(100% - 84px)',
    },
    active: {
      backgroundColor: theme.palette.secondary.main,
      color: theme.colors.white,
      fontWeight: theme.typography.fontWeightBold,
    },
  })
)
