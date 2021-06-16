import React, { FC } from 'react'
import {
  Box,
  createStyles,
  makeStyles,
  Theme,
  Typography,
} from '@material-ui/core'
import { SearchIcon } from 'src/components/icons/search-icon'
import { subMenuBackgroundColor, subMenuTextColor } from 'src/themes/colors'
import { SearchTabs } from 'src/components/layout/side-bar/search-menu/tabs'
import {
  SearchTypes,
  SearchTypesProps,
} from 'src/components/layout/side-bar/search-menu/types'

export type SearchMenuProps = SearchTypesProps

export const SearchMenu: FC<SearchMenuProps> = ({ acterTypes, searchType }) => {
  const classes = useStyles()

  return (
    <Box className={classes.root}>
      <HeaderSection />

      <SearchTabs activeTab={searchType} />

      <SearchTypes acterTypes={acterTypes} searchType={searchType} />
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
      backgroundColor: subMenuBackgroundColor,
      height: '100%',
      width: '15rem',
      color: subMenuTextColor,
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
