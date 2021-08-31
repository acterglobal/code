import React, { FC, useState, useEffect } from 'react'
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
import { useRouter } from 'next/router'
import { SearchTypes } from '@acter/components/layout/side-bar/search-menu/types'
import { ActerType, ActivityType } from '@acter/schema'
import { ActerTypes, ActivityTypes, SearchType } from '@acter/lib/constants'

export interface SearchMenuProps {
  acterTypes: (ActerType | ActivityType)[]
  searchType: SearchType
}

export const SearchMenu: FC<SearchMenuProps> = ({ acterTypes, searchType }) => {
  const classes = useStyles()
  const router = useRouter()
  const { types } = router.query

  const { USER, ACTIVITY, GROUP } = ActerTypes
  const { MEETING } = ActivityTypes

  const subTypes = acterTypes.filter(
    (type) =>
      ![ACTIVITY, MEETING, GROUP, USER].includes(type.name as ActerTypes)
  )
  const [filterSubTypes, setFilterSubTypes] = useState(
    types ? (types as string).split(',') : subTypes.map((type) => type.name)
  )

  useEffect(() => {
    router.push({
      pathname: router.pathname,
      query: {
        ...router.query,
        types: filterSubTypes.length > 0 ? filterSubTypes.join(',') : '',
      },
    })
  }, [filterSubTypes])

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
