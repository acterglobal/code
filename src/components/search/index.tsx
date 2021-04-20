import React, { FC } from 'react'
import Link from 'next/link'
import { Box, Button, Grid, Typography } from '@material-ui/core'
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles'
import { grey } from '@material-ui/core/colors'
import { SearchBar } from 'src/components/search/search-bar'
import { ActivityTile } from 'src/components/activity/tile'
import { ExampleActivity } from 'src/__fixtures__/activity/example-activity'

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
    button: {
      height: theme.spacing(3.5),
      minWidth: theme.spacing(18),
      borderRadius: theme.spacing(3),
      marginRight: theme.spacing(1),
      color: 'black',
      backgroundColor: 'white',
      textTransform: 'capitalize',
      fontSize: '0.7rem',
      '&:hover': {
        backgroundColor: 'white',
      },
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
          <Grid item xs={12} sm={6} className={classes.searchSectionItem}>
            <Button
              className={classes.button}
              variant="contained"
              onClick={() => console.log('button cliked')}
            >
              Filters
            </Button>
            <Button
              className={classes.button}
              variant="contained"
              onClick={() => console.log('button cliked')}
            >
              Sort by
            </Button>
            <Button
              className={classes.button}
              variant="contained"
              onClick={() => console.log('button cliked')}
            >
              Map View
            </Button>
          </Grid>
        </Grid>
      </Box>

      <Box className={classes.displayResults}>
        {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map(() => (
          <Box className={classes.singleResultItem}>
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
