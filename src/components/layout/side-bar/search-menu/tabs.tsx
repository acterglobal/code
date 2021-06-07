import React, { FC } from 'react'
import { Box, createStyles, makeStyles, Theme } from '@material-ui/core'
import clsx from 'clsx'
import { ACTERS, ACTIVITIES } from 'src/constants'
import { menuActiveTabColor } from 'src/themes/colors'

export interface SearchTabsProps {
  activeTab: string
  handleTabClick: (tab: string) => void
}

export const SearchTabs: FC<SearchTabsProps> = ({
  activeTab,
  handleTabClick,
}) => {
  const classes = useStyles()
  const searchTypes = [ACTIVITIES, ACTERS]

  return (
    <Box className={classes.tabs}>
      {searchTypes.map((searchType) => (
        <Box
          className={clsx({
            [classes.tab]: true,
            [classes.activeTab]: activeTab === searchType,
          })}
          onClick={() => handleTabClick(searchType)}
        >
          {searchType}
        </Box>
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
