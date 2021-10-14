import React, { FC, useEffect } from 'react'
import InfiniteScroll from 'react-infinite-scroll-component'
import { di } from 'react-magnetic-di/macro'

import { Box, Typography } from '@material-ui/core'
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles'

import { LoadingSpinner } from '../util/loading-spinner'
import clsx from 'clsx'

import { ActerTile } from '@acter/components/acter/tile'
import { ActivityTile } from '@acter/components/activity/tile'
import { Link } from '@acter/components/util/anchor-link'
import { acterAsUrl } from '@acter/lib/acter/acter-as-url'
import { SearchType } from '@acter/lib/constants'
import { useActerSearch } from '@acter/lib/search/use-acter-search'
import { useSearchType } from '@acter/lib/search/use-search-type'

const { ACTIVITIES, ACTERS } = SearchType
export interface DisplayResultsProps {
  setResultCount?: (number) => void
}

export const DisplayResults: FC<DisplayResultsProps> = ({ setResultCount }) => {
  di(useActerSearch, useSearchType)
  const classes = useStyles()
  const searchType = useSearchType()

  const { acters, fetching, loadMore, hasMore } = useActerSearch()

  useEffect(() => {
    setResultCount?.(acters?.length || 0)
  }, [acters?.length])

  if (fetching && acters.length === 0)
    return (
      <Box className={classes.loading}>
        <LoadingSpinner />
      </Box>
    )

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
    <Box className={classes.root}>
      <InfiniteScroll
        className={clsx(classes[searchType])}
        dataLength={acters.length}
        next={loadMore}
        hasMore={hasMore}
        loader={<span>Loading...</span>}
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
    </Box>
  )
}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      marginTop: theme.spacing(5),
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
    loading: {
      marginTop: theme.spacing(5),
      display: 'flex',
      justifyContent: 'center',
      color: theme.palette.primary.main,
    },
  })
)
