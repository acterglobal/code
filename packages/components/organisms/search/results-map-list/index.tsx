import React, { FC } from 'react'

import { Grid } from '@material-ui/core'

import { LoadingBar } from '@acter/components/atoms/loading/bar'
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
  const { acters, fetching } = useActerSearch()

  return (
    <Grid container>
      <Grid item xs={12} sm={6}>
        <SearchResultsList
          acters={acters}
          profileImageSizes={profileImageSizes}
        />
        {fetching && <LoadingBar />}
      </Grid>
      <Grid item xs={12} sm={6}>
        <SearchResultsMap acters={acters} />
      </Grid>
    </Grid>
  )
}
