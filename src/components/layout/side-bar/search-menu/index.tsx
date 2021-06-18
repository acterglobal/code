import React, { FC, useState, useEffect } from 'react'
import {
  Box,
  createStyles,
  makeStyles,
  Theme,
  Typography,
} from '@material-ui/core'
import { SearchIcon } from 'src/components/icons/search-icon'
import { SearchTabs } from 'src/components/layout/side-bar/search-menu/tabs'
import { useRouter } from 'next/router'
import {
  SearchTypes,
  SearchTypesProps,
} from 'src/components/layout/side-bar/search-menu/types'
import { ActivityTypes } from 'src/constants'
const { EVENT, IDEA, PROJECT } = ActivityTypes

export type SearchMenuProps = SearchTypesProps

export const SearchMenu: FC<SearchMenuProps> = ({ acterTypes, searchType }) => {
  const classes = useStyles()
  const router = useRouter()
  const [filterSubTypes, setFilterSubTypes] = useState([EVENT, IDEA, PROJECT])

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
        acterTypes={acterTypes}
        searchType={searchType}
        filterSubTypes={filterSubTypes}
        setFilterSubTypes={setFilterSubTypes}
      />
    </Box>
  )
}

const HeaderSection = () => {
  const classes = useStyles()
  return (
    <Box className={classes.heading}>
      <SearchIcon fontSize="inherit" className={classes.searchIcon} />
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
