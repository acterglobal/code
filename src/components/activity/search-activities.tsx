import React, { FC } from 'react'
import { Box, Button, Grid, Typography } from '@material-ui/core'
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles'
import { grey } from '@material-ui/core/colors'
import { SearchBar } from 'src/components/activity/search-bar'
import { ActivityTile } from 'src/components/activity/new-tile'
import { ExampleActivity } from 'src/__fixtures__/activity/example-activity'

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      backgroundColor: grey[300],
    },
    search: {
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
  })
)

export const SearchActivities: FC = () => {
  const classes = useStyles()
  return (
    <Box className={classes.root}>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={6} className={classes.search}>
          <Typography className={classes.results} variant="body2">
            178 results
          </Typography>
          <Box className={classes.searchInput}>
            <SearchBar />
          </Box>
        </Grid>
        <Grid item xs={12} sm={6} className={classes.search}>
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

      <Box style={{ display: 'flex', flexWrap: 'wrap' }}>
        <ActivityTile activity={ExampleActivity} />
        <ActivityTile activity={ExampleActivity} />
        <ActivityTile activity={ExampleActivity} />
        <ActivityTile activity={ExampleActivity} />
        <ActivityTile activity={ExampleActivity} />
        <ActivityTile activity={ExampleActivity} />
      </Box>
    </Box>
  )
}
