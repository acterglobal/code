import React, { FC, useEffect } from 'react'
import { Box, CircularProgress, Typography } from '@material-ui/core'
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles'
import { InterestType } from '@acter/schema'
import { ActivityTile } from '@acter/components/activity/tile'
import { ActerTile } from '@acter/components/acter/tile'
import { SearchType } from '@acter/lib/constants'
import { acterAsUrl } from '@acter/lib/acter/acter-as-url'
import { Link } from '@acter/components/util/anchor-link'
import clsx from 'clsx'
import InfiniteScroll from 'react-infinite-scroll-component'
import { useActerSearch } from '@acter/lib/acter/use-acter-search'
import { LoadingSpinner } from '../util/loading-spinner'

const { ACTIVITIES, ACTERS } = SearchType
export interface DisplayResultsProps {
  searchType: SearchType
  interestTypes: InterestType[]
  setResultCount?: (number) => void
}

export const DisplayResults: FC<DisplayResultsProps> = ({
  searchType,
  interestTypes,
  setResultCount,
}) => {
  const classes = useStyles()
  const { acters, loading, loadMore, hasMore } = useActerSearch(searchType)

  useEffect(() => {
    setResultCount?.(acters?.length || 0)
  }, [acters?.length])

  if (loading)
    return (
      <Box className={classes.loading}>
        <LoadingSpinner />
      </Box>
    )

  if (acters && acters.length === 0)
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
            <Link href={acterAsUrl({ acter })} passHref>
              {searchType === ACTERS && (
                <ActerTile acter={acter} interestTypes={interestTypes} />
              )}
              {searchType === ACTIVITIES && (
                <ActivityTile activity={acter.Activity} />
              )}
            </Link>
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
