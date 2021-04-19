import React, { FC } from 'react'
import { Search as SearchIcon } from '@material-ui/icons'
import { useAutocomplete } from '@material-ui/lab'
import { Box, Typography } from '@material-ui/core'
import { grey } from '@material-ui/core/colors'

import { createStyles, makeStyles, Theme } from '@material-ui/core/styles'

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    searchField: {
      display: 'flex',
      alignItems: 'center',
      backgroundColor: 'white',
      height: theme.spacing(2.8),
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
    },
    listbox: {
      margin: 0,
      padding: 5,
      zIndex: 1,
      position: 'absolute',
      listStyle: 'none',
      backgroundColor: 'white',
      overflow: 'auto',
      maxHeight: 200,
      border: '1px solid rgba(0,0,0,.25)',
      '& li[data-focus="true"]': {
        backgroundColor: '#4a8df6',
        color: 'white',
        cursor: 'pointer',
      },
      '& li:active': {
        backgroundColor: '#2977f5',
        color: 'white',
      },
    },
  })
)

export const SearchBar: FC = () => {
  const classes = useStyles()
  const {
    getRootProps,
    getInputProps,
    getListboxProps,
    getOptionProps,
    groupedOptions,
  } = useAutocomplete({
    id: 'use-autocomplete-demo',
    options: films,
    getOptionLabel: (option) => option.title,
  })
  return (
    <Box style={{ width: '100%' }}>
      <Box className={classes.searchField} {...getRootProps()}>
        <SearchIcon fontSize="inherit" className={classes.searchIcon} />
        <input
          placeholder="search"
          className={classes.input}
          {...getInputProps()}
        />
      </Box>
      {groupedOptions.length > 0 ? (
        <ul className={classes.listbox} {...getListboxProps()}>
          {groupedOptions.map((option, index) => (
            <li {...getOptionProps({ option, index })}>
              <Typography variant="caption">{option.title}</Typography>
            </li>
          ))}
        </ul>
      ) : null}
    </Box>
  )
}

const films = [
  { title: 'The Shawshank Redemption', year: 1994 },
  { title: 'The Godfather', year: 1972 },
  { title: 'The Godfather: Part II', year: 1974 },
  { title: 'The Dark Knight', year: 2008 },
  { title: '12 Angry Men', year: 1957 },
  { title: "Schindler's List", year: 1993 },
  { title: 'Pulp Fiction', year: 1994 },
  { title: 'The Lord of the Rings: The Return of the King', year: 2003 },
  { title: 'The Good, the Bad and the Ugly', year: 1966 },
  { title: 'Fight Club', year: 1999 },
  { title: 'The Lord of the Rings: The Fellowship of the Ring', year: 2001 },
  { title: 'Star Wars: Episode V - The Empire Strikes Back', year: 1980 },
  { title: 'Forrest Gump', year: 1994 },
  { title: 'Inception', year: 2010 },
  { title: 'The Lord of the Rings: The Two Towers', year: 2002 },
  { title: "One Flew Over the Cuckoo's Nest", year: 1975 },
  { title: 'Goodfellas', year: 1990 },
  { title: 'The Matrix', year: 1999 },
  { title: 'Seven Samurai', year: 1954 },
  { title: 'Star Wars: Episode IV - A New Hope', year: 1977 },
]
