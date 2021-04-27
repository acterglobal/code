import React, { FC } from 'react'
import { Search as SearchIcon } from '@material-ui/icons'
import { useAutocomplete } from '@material-ui/lab'
import { Box, Typography } from '@material-ui/core'
import { grey } from '@material-ui/core/colors'

import { createStyles, makeStyles, Theme } from '@material-ui/core/styles'

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
    options: data,
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

const data = []

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
