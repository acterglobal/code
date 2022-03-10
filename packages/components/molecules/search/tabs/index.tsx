import React, { FC } from 'react'

import Link from 'next/link'

import { Box, Theme } from '@mui/material';

import createStyles from '@mui/styles/createStyles';
import makeStyles from '@mui/styles/makeStyles';

import clsx from 'clsx'

import { SearchType } from '@acter/lib/constants'
import { capitalize } from '@acter/lib/string/capitalize'

export interface SearchTabsProps {
  activeTab: SearchType
}

export const SearchTabs: FC<SearchTabsProps> = ({ activeTab }) => {
  const classes = useStyles()
  const { ACTERS, ACTIVITIES } = SearchType
  const searchTypes = [ACTERS, ACTIVITIES]

  return (
    <Box className={classes.tabs}>
      {searchTypes.map((searchType) => (
        <Link
          href={searchType === ACTIVITIES ? `/search/${searchType}` : '/search'}
          key={`search-type-${searchType}`}
        >
          <Box
            className={clsx({
              [classes.tab]: true,
              [classes.activeTab]: activeTab === searchType,
            })}
          >
            {capitalize(searchType)}
          </Box>
        </Link>
      ))}
    </Box>
  )
}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    tabs: {
      height: theme.spacing(4),
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
    },
    tab: {
      width: '100%',
      height: '100%',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      cursor: 'pointer',
      fontSize: theme.spacing(1.5),
      backgroundColor: theme.colors.others.searchTab,
    },
    activeTab: {
      height: '100%',
      backgroundColor: theme.palette.secondary.main,
      color: 'white',
      fontWeight: theme.typography.fontWeightBold,
    },
  })
)
