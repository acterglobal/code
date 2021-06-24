import React, { FC } from 'react'
import { Search as SearchIcon } from '@material-ui/icons'
import { Box } from '@material-ui/core'
import { grey } from '@material-ui/core/colors'
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles'

export interface SearchBarProps {
  handleInputChange: (data: string) => void
}

export const SearchBar: FC<SearchBarProps> = ({ handleInputChange }) => {
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
      height: theme.spacing(3.5),
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
      color: grey[600],
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
