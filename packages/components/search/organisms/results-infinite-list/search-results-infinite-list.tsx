import React, { FC, useEffect, useRef } from 'react'
import InfiniteScroll from 'react-infinite-scroll-component'
import { useIsVisible } from 'react-is-visible'

import { Box } from '@material-ui/core'
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles'

import clsx from 'clsx'

import { LoadingBar } from '@acter/components/atoms/loading/bar'
import { SearchZeroResultsMessage } from '@acter/components/search/atoms/zero-results-message'
import { Button } from '@acter/components/styled'
import { useActerSearch } from '@acter/lib/search/use-acter-search'
import { useSearchType } from '@acter/lib/search/use-search-type'

import { SearchResultsList } from '../results-list'

interface HasMoreProps {
  onVisible: () => void
}

const HasMore: FC<HasMoreProps> = ({ onVisible, children }) => {
  const nodeRef = useRef()
  const isVisible = useIsVisible(nodeRef)
  useEffect(() => {
    if (isVisible) onVisible()
  }, [isVisible])
  return <div ref={nodeRef}>{children}</div>
}

export const SearchResultsInfiniteList: FC = () => {
  const classes = useStyles()
  const searchType = useSearchType()

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
      <InfiniteScroll
        className={clsx(classes[searchType], classes.infinityScroll)}
        dataLength={acters?.length || 0}
        next={loadMore}
        hasMore={hasMore}
        loader={<LoadingBar />}
      >
        <SearchResultsList acters={acters} />
      </InfiniteScroll>
      {acters && hasMore && !fetching && (
        <HasMore onVisible={loadMore}>
          <Button onClick={loadMore}>Load more</Button>
        </HasMore>
      )}
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
      justifyContent: 'center',
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
