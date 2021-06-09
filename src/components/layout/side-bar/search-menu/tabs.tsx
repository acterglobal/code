import React, { FC } from 'react'
import { Box, createStyles, makeStyles, Theme } from '@material-ui/core'
import clsx from 'clsx'
import { SearchType } from 'src/constants'
import { menuActiveTabColor } from 'src/themes/colors'
import Link from 'next/link'

export interface SearchTabsProps {
  activeTab: SearchType
}

export const SearchTabs: FC<SearchTabsProps> = ({ activeTab }) => {
  const classes = useStyles()
  const { ACTERS, ACTIVITIES } = SearchType
  const searchTypes = [ACTIVITIES, ACTERS]

  return (
    <Box className={classes.tabs}>
      {searchTypes.map((searchType) => (
        <Link
          href={searchType === ACTIVITIES ? `/search/${searchType}` : '/search'}
        >
          <Box
            className={clsx({
              [classes.tab]: true,
              [classes.activeTab]: activeTab === searchType,
            })}
          >
            {searchType}
          </Box>
        </Link>
      ))}
    </Box>
  )
}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    tabs: {
      height: theme.spacing(5),
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
    },
    tab: {
      width: '100%',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      cursor: 'pointer',
      fontSize: theme.spacing(1.8),
      textTransform: 'capitalize',
    },
    activeTab: {
      height: '100%',
      backgroundColor: menuActiveTabColor,
      color: 'white',
      fontWeight: theme.typography.fontWeightBold,
    },
  })
)