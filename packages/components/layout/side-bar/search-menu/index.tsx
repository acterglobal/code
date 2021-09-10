import React, { FC, useState, useEffect, useMemo } from 'react'
import { useRouter } from 'next/router'
import {
  Box,
  createStyles,
  makeStyles,
  Theme,
  Typography,
  useTheme,
} from '@material-ui/core'
import { SearchIcon } from '@acter/components/icons/search-icon'
import { SearchTabs } from '@acter/components/layout/side-bar/search-menu/tabs'
import { SearchTypes } from '@acter/components/layout/side-bar/search-menu/types'
import { ActerTypes, ActivityTypes, SearchType } from '@acter/lib/constants'
import { useActerTypes } from '@acter/lib/acter-types/use-acter-types'
import { LoadingSpinner } from '@acter/components/util/loading-spinner'
import { useActivityTypes } from '@acter/lib/activity-types/use-activity-types'
import { ActerType, ActivityType } from '@acter/schema'

export interface SearchMenuProps {
  searchType: SearchType
}

type SubType = ActerType | ActivityType

export const SearchMenu: FC<SearchMenuProps> = ({ searchType }) => {
  const classes = useStyles()
  const router = useRouter()
  const [filterSubTypes, setFilterSubTypes] = useState<string[]>([])
  const { acterTypes, loading: acterTypesLoading } = useActerTypes()
  const { activityTypes, loading: activityTypesLoading } = useActivityTypes()

  const { USER, ACTIVITY, GROUP } = ActerTypes
  const { MEETING } = ActivityTypes

  const subTypes = useMemo(() => {
    const searchTypes = (searchType === SearchType.ACTERS
      ? acterTypes
      : activityTypes) as SubType[]
    return (searchTypes || []).filter(
      (type) =>
        ![ACTIVITY, MEETING, GROUP, USER].includes(type.name as ActerTypes)
    )
  }, [searchType, acterTypes, activityTypes])

  const { types } = router.query
  useEffect(() => {
    setFilterSubTypes(
      types ? (types as string).split(',') : subTypes.map((type) => type.name)
    )
  }, [subTypes])

  useEffect(() => {
    router.push({
      pathname: router.pathname,
      query: {
        ...router.query,
        types: filterSubTypes.length > 0 ? filterSubTypes.join(',') : undefined,
      },
    })
  }, [filterSubTypes])

  if (acterTypesLoading || activityTypesLoading) return <LoadingSpinner />
  if (!acterTypes || !activityTypes) return

  return (
    <Box className={classes.root}>
      <HeaderSection />

      <SearchTabs activeTab={searchType} />

      <SearchTypes
        subTypes={subTypes}
        searchType={searchType}
        filterSubTypes={filterSubTypes}
        onChange={setFilterSubTypes}
      />
    </Box>
  )
}

const HeaderSection: FC = () => {
  const classes = useStyles()
  const theme = useTheme()
  return (
    <Box className={classes.heading}>
      <SearchIcon
        fontSize="inherit"
        className={classes.searchIcon}
        style={{ color: theme.palette.secondary.light }}
      />
      <Typography variant="caption">Public search</Typography>
    </Box>
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
      height: 50,
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
