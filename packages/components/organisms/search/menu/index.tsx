import React, { FC, useEffect, useState } from 'react'

import {
  Box,
  Typography,
  createStyles,
  makeStyles,
  useTheme,
  Theme,
} from '@material-ui/core'

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
  const searchType = useSearchType()
  const [currentSearchType, setCurrentSearchType] = useState<SearchType>()
  const [subTypes, setSubTypes] = useState<CombinedSearchTypes[]>()
  const [selectedSubTypes, setSelectedSubTypes] = useState<
    CombinedSearchTypes[]
  >()
  const [searchVariables, setSearchVariables] = useSearchVariables()

  useEffect(() => {
    if (searchType !== currentSearchType) {
      setCurrentSearchType(searchType)

      switch (searchType) {
        case SearchType.ACTERS:
          setSubTypes(ActerSearchTypes)
          setSelectedSubTypes(ActerSearchTypes)
          setSearchVariables({
            ...searchVariables,
            types: ActerSearchTypes,
            activityTypes: undefined,
          })
          break
        case SearchType.ACTIVITIES:
          setSubTypes(ActivitySearchTypes)
          setSelectedSubTypes(ActivitySearchTypes)
          setSearchVariables({
            ...searchVariables,
            types: [ActerTypes.ACTIVITY],
            activityTypes: ActivitySearchTypes,
            orderBy: SearchActivitiesSortBy.DATE,
          })
      }
    }
  }, [searchType])

  const handleTypesPickerChange = (
    newSelectedSubTypes: CombinedSearchTypes[]
  ) => {
    setSelectedSubTypes(newSelectedSubTypes)
    const searchVariableTypeKey =
      searchType === SearchType.ACTIVITIES ? 'activityTypes' : 'types'
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
