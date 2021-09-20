import React, { FC } from 'react'

import {
  Box,
  Typography,
  createStyles,
  makeStyles,
  useTheme,
  Theme,
} from '@material-ui/core'

import { SearchIcon } from '@acter/components/icons/search-icon'
import { SecondaryMenu } from '@acter/components/layout/side-bar/secondary-menu'
import { SearchTabs } from '@acter/components/search/layout/menu/tabs'
import { SearchTypes } from '@acter/components/search/layout/menu/types'
import { useSearchType } from '@acter/lib/search/use-search-type'

export const SearchMenu: FC = () => {
  const classes = useStyles()
  const theme = useTheme()
  const searchType = useSearchType()

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

      <SearchTypes />
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
