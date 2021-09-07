import React, { FC } from 'react'
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
import { useFetchActers } from '@acter/lib/acter/use-fetch-acters'

const { ACTIVITIES, ACTERS } = SearchType
export interface DisplayResultsProps {
  searchType: SearchType
  interestTypes: InterestType[]
}

export const DisplayResults: FC<DisplayResultsProps> = ({
  searchType,
  interestTypes,
}) => {
  const classes = useStyles()
  const { acters, loading, loadMore, hasMore } = useFetchActers(searchType)

  return (
    <Box className={clsx(classes.root, classes[searchType])}>
      {loading ? (
        <Box className={classes.loading}>
          <CircularProgress color="inherit" size={60} thickness={2} />
        </Box>
      ) : acters.length !== 0 ? (
        <InfiniteScroll
          dataLength={acters.length}
          next={loadMore}
          hasMore={hasMore}
          loader={<span>Loading...</span>}
          endMessage={
            <p style={{ textAlign: 'center' }}>
              <b>Yay! You have seen it all</b>
            </p>
          }
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
      ) : (
        <Typography variant="body2" aria-label="zero-acters">
          Your search did not return any results. Try removing search terms
          and/or filters to see more.
        </Typography>
      )}
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
      display: 'flex',
      justifyContent: 'center',
      color: theme.palette.primary.main,
    },
  })
)
