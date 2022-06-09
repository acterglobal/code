import React, { FC } from 'react'

import { Box } from '@material-ui/core'
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles'

import { LoadingBar } from '@acter/components/atoms/loading/bar'
import { InfiniteList } from '@acter/components/pagination/infinite-list'
import { SearchZeroResultsMessage } from '@acter/components/search/atoms/zero-results-message'
import { useActerSearch } from '@acter/lib/search/use-acter-search'

import { SearchResultsList } from '../results-list'

export const SearchResultsInfiniteList: FC = () => {
  const classes = useStyles()

  const { acters, fetching, loadMore, hasMore } = useActerSearch()

  if (acters?.length === 0) {
    if (fetching) return <LoadingBar />
    return (
      <Box className={classes.searchResultsInfiniteList}>
        <SearchZeroResultsMessage />
      </Box>
    )
  }

  return (
    <div className={classes.searchResultsInfiniteList}>
      <InfiniteList
        entities={acters}
        fetching={fetching}
        hasMore={hasMore}
        loadMore={loadMore}
        renderOnLoading={() => <LoadingBar />}
      >
        <SearchResultsList acters={acters} />
      </InfiniteList>
    </div>
  )
}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    searchResultsInfiniteList: {
      marginTop: theme.spacing(5),
      height: '100%',
      [theme.breakpoints.down('xs')]: {
        marginTop: 0,
      },
    },
    infinityScroll: {
      overflow: 'hidden',
      scrollbarWidth: 'none',
      '&::-webkit-scrollbar': {
        display: 'none',
      },
    },
    activities: {
      display: 'flex',
      flexWrap: 'wrap',
      justifyContent: 'flex-start',
    },
    singleItem: {
      margin: theme.spacing(1),
      '& a': {
        textDecoration: 'none',
        color: theme.palette.text.primary,
      },
    },
    fetching: {
      margin: theme.spacing(5),
      display: 'flex',
      justifyContent: 'center',
      color: theme.palette.primary.main,
    },
  })
)
