import React, { FC, useEffect, useRef } from 'react'

import { Box, Typography, useTheme, Theme } from '@mui/material';

import createStyles from '@mui/styles/createStyles';
import makeStyles from '@mui/styles/makeStyles';

import { useSearchVariables } from '@acter/components/contexts/search-variables'
import { SearchIcon } from '@acter/components/icons/search-icon'
import { SearchTabs } from '@acter/components/molecules/search/tabs'
import { SearchTypesPicker } from '@acter/components/molecules/search/types-picker'
import { SecondaryMenu } from '@acter/components/molecules/secondary-menu'
import { SearchActivitiesSortBy } from '@acter/lib/api/resolvers/get-order-by'
import {
  ActerSearchTypes,
  ActerTypes,
  ActivitySearchTypes,
  SearchType,
} from '@acter/lib/constants'
import { useSearchType } from '@acter/lib/search/use-search-type'
import { CombinedSearchTypes } from '@acter/lib/search/use-search-types'

export const SearchMenu: FC = () => {
  const classes = useStyles()
  const theme = useTheme()
  const [searchVariables, setSearchVariables] = useSearchVariables()
  const searchType = useSearchType()
  const currentSearchType = useRef<SearchType>()

  const isActivitySearch = searchType === SearchType.ACTIVITIES

  useEffect(() => {
    if (currentSearchType.current !== searchType) {
      if (isActivitySearch) {
        setSearchVariables({
          types: [ActerTypes.ACTIVITY],
          activityTypes: ActivitySearchTypes,
          orderBy: SearchActivitiesSortBy.DATE,
        })
      } else {
        setSearchVariables({
          types: ActerSearchTypes,
          activityTypes: undefined,
          orderBy: SearchActivitiesSortBy.NAME,
        })
      }
      currentSearchType.current = searchType
    }
  }, [searchType])

  const subTypes = isActivitySearch ? ActivitySearchTypes : ActerSearchTypes
  const selectedSubTypes = isActivitySearch
    ? searchVariables.activityTypes
    : searchVariables.types

  const handleTypesPickerChange = (
    newSelectedSubTypes: CombinedSearchTypes[]
  ) => {
    const searchVariableTypeKey = isActivitySearch ? 'activityTypes' : 'types'
    setSearchVariables({
      ...searchVariables,
      [searchVariableTypeKey]: newSelectedSubTypes,
    })
  }

  return (
    <SecondaryMenu>
      <Box className={classes.heading}>
        <SearchIcon
          fontSize="inherit"
          className={classes.searchIcon}
          style={{ color: theme.palette.secondary.light }}
        />
        <Typography variant="caption">Public search</Typography>
      </Box>

      <SearchTabs activeTab={searchType} />

      <SearchTypesPicker
        types={subTypes}
        selectedTypes={selectedSubTypes}
        showTypeIcon={searchType === SearchType.ACTIVITIES}
        onChange={handleTypesPickerChange}
      />
    </SecondaryMenu>
  )
}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      backgroundColor: theme.palette.secondary.main,
      height: '100%',
      width: '15rem',
      color: theme.palette.secondary.contrastText,
      fontWeight: theme.typography.fontWeightLight,
    },
    heading: {
      height: theme.spacing(6),
      padding: theme.spacing(2),
      borderBottom: '1px solid white',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
    },
    searchIcon: {
      fontSize: 28,
      marginTop: 12,
      marginRight: 8,
    },
  })
)
