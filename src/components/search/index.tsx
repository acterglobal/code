import React, { FC } from 'react'
import Link from 'next/link'
import { Box, Grid, Typography } from '@material-ui/core'
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles'
import { grey } from '@material-ui/core/colors'
import { SearchBar } from 'src/components/search/search-bar'
import { ActivityTile } from 'src/components/activity/tile'
import { ExampleActivity } from 'src/__fixtures__/activity/example-activity'
import { FilterTabs } from 'src/components/search/filter-tabs'

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

    displayResults: {
      display: 'flex',
      flexWrap: 'wrap',
      justifyContent: 'center',
    },
    singleResultItem: {
      margin: theme.spacing(1),
      '& a': {
        textDecoration: 'none',
        color: theme.palette.text.primary,
      },
    },
  })
)

export const Search: FC = () => {
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

      <Box className={classes.displayResults}>
        {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((i) => (
          <Box className={classes.singleResultItem} key={i}>
            <Link href="">
              <a>
                <ActivityTile
                  // @ts-ignore
                  activity={ExampleActivity}
                />
              </a>
            </Link>
          </Box>
        ))}
      </Box>
    </Box>
  )
}
