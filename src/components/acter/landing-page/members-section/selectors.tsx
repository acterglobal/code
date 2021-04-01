import React, { FC } from 'react'
import { Box, Button } from '@material-ui/core'
import { green, grey } from '@material-ui/core/colors'
import { makeStyles, Theme } from '@material-ui/core/styles'
// import {
//   GpsFixedTwoTone as FocusIcon,
//   Search as SearchIcon,
// } from '@material-ui/icons'
// import { useAutocomplete } from '@material-ui/lab'
import clsx from 'clsx'

const useStyles = makeStyles((theme: Theme) => ({
  container: {
    display: 'flex',
    justifyContent: 'space-between',
    marginBottom: theme.spacing(1),
  },
  button: {
    height: 25,
    width: 140,
    borderRadius: theme.spacing(3),
    marginRight: theme.spacing(1),
    color: grey[600],
    backgroundColor: 'white',
    textTransform: 'capitalize',
    fontSize: '0.7rem',
    '&:hover': {
      backgroundColor: 'white',
    },
  },
  active: {
    backgroundColor: green[400],
    color: 'white',
    '&:hover': {
      backgroundColor: green[600],
    },
  },

  searchSection: { display: 'flex' },
  searchField: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'white',
    width: 170,
    height: 25,
    borderRadius: 20,
    marginLeft: 15,
    marginRight: 15,
  },

  input: {
    width: 120,
    outline: 'none',
    border: 'none',
  },
  listbox: {
    margin: 0,
    padding: 0,
    zIndex: 1,
    position: 'absolute',
    listStyle: 'none',
    backgroundColor: theme.palette.background.paper,
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
}))

export interface SelectorProps {
  selectors: string[]
  activeSelector: string
  onChange: (selector: string) => void
}

export const Selectors: FC<SelectorProps> = ({
  selectors,
  activeSelector,
  onChange,
}) => {
  const classes = useStyles()

  // const {
  //   getRootProps,
  //   getInputProps,
  //   getListboxProps,
  //   getOptionProps,
  //   groupedOptions,
  // } = useAutocomplete({
  //   id: 'use-autocomplete-demo',
  //   options: films,
  //   getOptionLabel: (option) => option.title,
  // })

  return (
    <Box className={classes.container}>
      <Box role="tablist">
        {selectors.map((selector) => (
          <Button
            key={`members-selector-${selector}`}
            role="tab"
            className={clsx(
              classes.button,
              activeSelector === selector && classes.active
            )}
            variant="contained"
            disableElevation
            onClick={() => onChange(selector)}
          >
            {selector}
          </Button>
        ))}
      </Box>

      <Box className={classes.searchSection}>
        {/* <Button
          className={clsx(
            classes.button,
            activeSelector === 'focus' && classes.active
          )}
          variant="contained"
          disableElevation
          startIcon={<FocusIcon fontSize="inherit" style={{ fontSize: 14 }} />}
          onClick={() => handleSelectorChange('focus')}
        >
          Focus
        </Button>
        <Box>
          <Box className={classes.searchField} {...getRootProps()}>
            <SearchIcon
              fontSize="inherit"
              style={{ fontSize: 14, fontWeight: 'bold', color: grey[600] }}
            />
            <input
              disabled={true}
              placeholder="search members"
              className={classes.input}
              {...getInputProps()}
            />
          </Box>
          {groupedOptions.length > 0 ? (
            <ul className={classes.listbox} {...getListboxProps()}>
              {groupedOptions.map((option, index) => (
                <li {...getOptionProps({ option, index })}>{option.title}</li>
              ))}
            </ul>
          ) : null}
        </Box> */}
      </Box>
    </Box>
  )
}
