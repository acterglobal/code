import React, { FC } from 'react'
import { Box, Button } from '@material-ui/core'
import { green, grey } from '@material-ui/core/colors'
import { makeStyles, Theme } from '@material-ui/core/styles'
import {
  GpsFixedTwoTone as FocusIcon,
  Search as SearchIcon,
} from '@material-ui/icons'
import { useAutocomplete } from '@material-ui/lab'
import clsx from 'clsx'
import { MembersSectionProps } from 'src/components/acter/landing-page/members-section'
import { ORGANISATION, USER } from 'src/constants'

const useStyles = makeStyles((theme: Theme) => ({
  container: {
    paddingTop: 10,
    paddingBottom: 10,
    // height: 50,
    backgroundColor: 'grey',
    display: 'flex',
    justifyContent: 'space-between',
  },
  button: {
    height: 25,
    width: 140,
    borderRadius: 20,
    color: grey[600],
    backgroundColor: 'white',
    textTransform: 'none',
    fontSize: '0.7rem',
    '&:hover': {
      backgroundColor: 'white',
    },
  },
  active: {
    backgroundColor: green[600],
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
    // width: 200,
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

export interface SelectorProps extends MembersSectionProps {
  activeSelector: string
  handleSelectorChange: (selector: string) => void
}

export const Selectors: FC<SelectorProps> = (props) => {
  const { people, organisations, activeSelector, handleSelectorChange } = props
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
    <Box className={classes.container}>
      <Box>
        <Button
          className={clsx(
            classes.button,
            activeSelector === USER && classes.active
          )}
          variant="contained"
          disableElevation
          onClick={() => handleSelectorChange(USER)}
        >
          People
        </Button>
        <Button
          className={clsx(
            classes.button,
            activeSelector === ORGANISATION && classes.active
          )}
          variant="contained"
          disableElevation
          onClick={() => handleSelectorChange(ORGANISATION)}
          style={{ marginLeft: 15 }}
        >
          Organisations
        </Button>
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
]
