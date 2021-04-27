import React, { FC } from 'react'
import { Box, Grid, Typography } from '@material-ui/core'
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles'
import { grey } from '@material-ui/core/colors'
import { SearchBar } from 'src/components/search/search-bar'
import { FilterTabs } from 'src/components/search/filter-tabs'
import {
  DisplayResults,
  DisplayResultsProps,
} from 'src/components/search/display-results'

export const Search: FC<DisplayResultsProps> = ({ dataType, acters }) => {
  const classes = useStyles()
  return (
    <Box className={classes.root}>
      <Box className={classes.searchSection}>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={6} className={classes.searchSectionItem}>
            <Typography className={classes.results} variant="body2">
              {acters.length} results
            </Typography>
            <Box className={classes.searchInput}>
              <SearchBar />
            </Box>
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
      backgroundColor: grey[300],
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
  })
)
