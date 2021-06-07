import React, { FC, useState } from 'react'
import {
  Box,
  createStyles,
  makeStyles,
  Theme,
  Typography,
} from '@material-ui/core'
import { SearchIcon } from 'src/components/icons/search-icon'
import { ACTERS } from 'src/constants'
import { subMenuBackgroundColor } from 'src/themes/colors'
import { SearchTabs } from 'src/components/layout/side-bar/search-menu/tabs'
import {
  SearchTypes,
  SearchTypesProps,
} from 'src/components/layout/side-bar/search-menu/types'
import { grey } from '@material-ui/core/colors'
import { useRouter } from 'next/router'

export type SearchMenuProps = SearchTypesProps

export const SearchMenu: FC = () => {
  const classes = useStyles()
  const [activeTab, setActiveTab] = useState(ACTERS)
  const router = useRouter()

  const handleTabClick = (searchType) => {
    setActiveTab(searchType)
    // router.push(`/search/${searchType}`)
  }

  return (
    <Box className={classes.root}>
      <Box className={classes.heading}>
        <SearchIcon fontSize="inherit" className={classes.searchIcon} />
        <Typography variant="caption">Public search</Typography>
      </Box>

      <SearchTabs activeTab={activeTab} handleTabClick={handleTabClick} />
      <SearchTypes />
    </Box>
  )
}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      backgroundColor: subMenuBackgroundColor,
      height: '100%',
      width: '15rem',
      color: grey[200],
      fontWeight: theme.typography.fontWeightLight,
    },
    heading: {
      height: theme.spacing(8),
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
