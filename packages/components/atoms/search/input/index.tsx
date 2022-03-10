import React, { FC } from 'react'

import { Box } from '@mui/material'
import { Theme } from '@mui/material/styles';
import createStyles from '@mui/styles/createStyles';
import makeStyles from '@mui/styles/makeStyles';
import { Search as SearchIcon } from '@mui/icons-material'

export interface SearchInputProps {
  handleInputChange: (data: string) => void
}

export const SearchInput: FC<SearchInputProps> = ({ handleInputChange }) => {
  const classes = useStyles()

  return (
    <Box style={{ width: '100%' }}>
      <Box className={classes.searchField}>
        <SearchIcon fontSize="inherit" className={classes.searchIcon} />
        <input
          placeholder="Search"
          className={classes.input}
          onChange={(evt) => handleInputChange(evt.target.value)}
        />
      </Box>
    </Box>
  )
}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    searchField: {
      height: theme.spacing(4.5),
      display: 'flex',
      alignItems: 'center',
      backgroundColor: 'white',
      borderRadius: 20,
      padding: 3,
      paddingLeft: 10,
    },
    searchIcon: {
      fontSize: 19,
      fontWeight: 'bold',
      color: theme.palette.secondary.main,
    },

    input: {
      width: 120,
      outline: 'none',
      border: 'none',
      flexGrow: 1,
      fontFamily: theme.typography.fontFamily,
    },
  })
)
