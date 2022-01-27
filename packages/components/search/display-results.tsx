import React, { FC, useEffect, useRef } from 'react'
import InfiniteScroll from 'react-infinite-scroll-component'
import { useIsVisible } from 'react-is-visible'

import { Box, Typography } from '@material-ui/core'
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles'

import { LoadingSpinner } from '../util/loading-spinner'
import clsx from 'clsx'

import { ActerTile } from '@acter/components/acter/tile'
import { ActivityTile } from '@acter/components/activity/tile'
import { Button } from '@acter/components/styled'
import { Link } from '@acter/components/util/anchor-link'
import { acterAsUrl } from '@acter/lib/acter/acter-as-url'
import { SearchType } from '@acter/lib/constants'
import { useActerSearch } from '@acter/lib/search/use-acter-search'
import { useSearchType } from '@acter/lib/search/use-search-type'

const { ACTIVITIES, ACTERS } = SearchType

const LoadingBar = () => {
  const classes = useStyles()
  return (
    <Box className={classes.fetching}>
      <LoadingSpinner />
    </Box>
  )
}

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

export const DisplayResults: FC = () => {
  const classes = useStyles()
  const searchType = useSearchType()

  const { acters, fetching, loadMore, hasMore } = useActerSearch()

  if (fetching && acters.length === 0) return <LoadingBar />

  if (acters.length === 0)
    return (
      <Box className={classes.root}>
        <Typography variant="body2" aria-label="zero-acters">
          Your search did not return any results. Try removing search terms
          and/or filters to see more.
        </Typography>
      </Box>
    )

  return (
    <div className={classes.root}>
      <InfiniteScroll
        className={clsx(classes[searchType])}
        dataLength={acters.length}
        next={loadMore}
        hasMore={hasMore}
        loader={<LoadingBar />}
      >
        {acters.map((acter, index) => (
          <Box className={classes.singleItem} key={index} role="listitem">
            {searchType === ACTERS && (
              <Link href={acterAsUrl({ acter })} passHref>
                <ActerTile acter={acter} />
              </Link>
            )}
            {searchType === ACTIVITIES && (
              <ActivityTile activity={acter.Activity} />
            )}
          </Box>
        ))}
      </InfiniteScroll>
      {hasMore && !fetching && (
        <HasMore onVisible={() => loadMore(true)}>
          <Button onClick={() => loadMore(true)}>Load more</Button>
        </HasMore>
      )}
    </div>
  )
}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      marginTop: theme.spacing(5),
      [theme.breakpoints.down('xs')]: {
        marginTop: 0,
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
