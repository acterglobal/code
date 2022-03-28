import React, { FC, useState } from 'react'

import { createStyles, Grid, makeStyles } from '@material-ui/core'

import { LoadingBar } from '@acter/components/atoms/loading/bar'
import { ZeroResultsMessage } from '@acter/components/atoms/search/zero-results-message'
import { ProfileImageSizes } from '@acter/components/organisms/acter/tile'
import { SearchResultsList } from '@acter/components/organisms/search/results-list'
import { SearchResultsMap } from '@acter/components/organisms/search/results-map'
import { useActerSearch } from '@acter/lib/search/use-acter-search'

const profileImageSizes: ProfileImageSizes = {
  sm: 24,
  md: 64,
  lg: 96,
}

export const ResultsMapList: FC = () => {
  const classes = useStyles()
  const { acters, fetching } = useActerSearch()
  const [hoverActerId, setHoverActerId] = useState('')

  return (
    <Grid container className={classes.resultsMapList}>
      <Grid item xs={12} sm={6}>
        <SearchResultsList
          acters={acters}
          profileImageSizes={profileImageSizes}
          hoverActerId={hoverActerId}
          collapsed={true}
        />
        {acters?.length === 0 && !fetching && <ZeroResultsMessage />}
        {fetching && <LoadingBar />}
      </Grid>
      <Grid item xs={12} sm={6}>
        <SearchResultsMap acters={acters} onActerHover={setHoverActerId} />
      </Grid>
    </Grid>
  )
}

const useStyles = makeStyles(() =>
  createStyles({
    resultsMapList: {
      height: '100%',
    },
  })
)
