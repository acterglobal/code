import React, { FC, useState } from 'react'
import { useRouter } from 'next/router'
import { Box, Button, Grid, Typography } from '@material-ui/core'
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles'
import { green, grey } from '@material-ui/core/colors'
import { SearchBar } from 'src/components/search/search-bar'
import { FilterTabs } from 'src/components/search/filter-tabs'
import {
  DisplayResults,
  DisplayResultsProps,
} from 'src/components/search/display-results'

type SearchProps = DisplayResultsProps

export const Search: FC<SearchProps> = ({ dataType, acters }) => {
  const classes = useStyles()
  const router = useRouter()
  const [searchText, setSearchText] = useState('')

  const handleInputChange = (inputText: string) => {
    setSearchText(inputText)
  }

  const handleSearch = () => {
    router.push(`/?search=${searchText}`)
  }

  return (
    <Box className={classes.root}>
      <Box className={classes.searchSection}>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={6} className={classes.searchSectionItem}>
            <Typography className={classes.results} variant="body2">
              {acters?.length} Results
            </Typography>
            <Box className={classes.searchInput}>
              <SearchBar handleInputChange={handleInputChange} />
            </Box>
            <Button
              className={classes.searchButton}
              variant="contained"
              onClick={handleSearch}
            >
              <Typography variant="caption">Search</Typography>
            </Button>
          </Grid>

          <FilterTabs />
        </Grid>
      </Box>

      <DisplayResults dataType={dataType} acters={acters} />
    </Box>
  )
}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
    },
    searchSection: {
      display: 'flex',
      width: '80%',
      marginTop: theme.spacing(4),
      [theme.breakpoints.down('xs')]: {
        width: '95%',
      },
    },
    searchSectionItem: {
      display: 'flex',
      alignItems: 'center',
    },
    results: {
      color: grey[800],
      flexGrow: 1,
    },
    searchInput: {
      display: 'flex',
      flexGrow: 8,
    },
    searchButton: {
      height: theme.spacing(3.5),
      minWidth: theme.spacing(15),
      borderRadius: theme.spacing(3),
      marginLeft: theme.spacing(1),
      color: 'white',
      backgroundColor: green[500],
      textTransform: 'capitalize',
      '&:hover': {
        backgroundColor: green[500],
      },
      [theme.breakpoints.down('sm')]: {
        minWidth: theme.spacing(10),
      },
    },
  })
)
