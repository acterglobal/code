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
      justifyContent: 'center',
      width: '80%',
    },
    searchSectionItem: {
      display: 'flex',
      alignItems: 'center',
      marginTop: theme.spacing(4),
      marginBottom: theme.spacing(5),
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

export const Search: FC<DisplayResultsProps> = ({ dataType, data }) => {
  const classes = useStyles()
  return (
    <Box className={classes.root}>
      <Box className={classes.searchSection}>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={6} className={classes.searchSectionItem}>
            <Typography className={classes.results} variant="body2">
              178 results
            </Typography>
            <Box className={classes.searchInput}>
              <SearchBar />
            </Box>
          </Grid>

          <FilterTabs />
        </Grid>
      </Box>

      <DisplayResults dataType={dataType} data={data} />
    </Box>
  )
}
