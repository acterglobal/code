import React, { FC } from 'react'

import { Box } from '@material-ui/core'
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles'

import { SearchTopBar } from '../../organisms/search/top-bar'

import { LoadingBar } from '@acter/components/atoms/loading/bar'
import { SearchResultsList } from '@acter/components/organisms/search/results-list'
import { useActerSearch } from '@acter/lib/search/use-acter-search'

export const Search: FC = () => {
  const classes = useStyles()

  const { acters, fetching, loadMore, hasMore } = useActerSearch()

  if (fetching && acters.length === 0) return <LoadingBar />

  return (
    <Box className={classes.root}>
      <Box className={classes.controls}>
        <SearchTopBar />
      </Box>
      <SearchResultsList
        acters={acters}
        fetching={fetching}
        hasMore={hasMore}
        loadMore={loadMore}
      />
    </Box>
  )
}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      margin: '0 5%',
    },
    controls: {
      marginTop: theme.spacing(4),
    },
  })
)