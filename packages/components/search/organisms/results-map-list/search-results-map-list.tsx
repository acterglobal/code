import React, { FC, useState } from 'react'

import { Grid, styled } from '@material-ui/core'

import { LoadingBar } from '@acter/components/atoms/loading/bar'
import { SearchZeroResultsMessage } from '@acter/components/search/atoms/zero-results-message'
import { SearchResultsList } from '@acter/components/search/organisms/results-list'
import { SearchResultsMap } from '@acter/components/search/organisms/results-map'
import { useActerSearch } from '@acter/lib/search/use-acter-search'

export const SearchResultsMapList: FC = () => {
  const { acters, fetching } = useActerSearch()
  const [hoverActerId, setHoverActerId] = useState('')

  return (
    <SearchResultsMapListContainer container>
      <ResultsContainer item xs={12} sm={6}>
        <SearchResultsList
          acters={acters}
          activeActerId={hoverActerId}
          collapsed={true}
        />
        {acters?.length === 0 && !fetching && <SearchZeroResultsMessage />}
        {fetching && <LoadingBar />}
      </ResultsContainer>
      <Grid item xs={12} sm={6}>
        <SearchResultsMap acters={acters} onActerHover={setHoverActerId} />
      </Grid>
    </SearchResultsMapListContainer>
  )
}

const SearchResultsMapListContainer = styled(Grid)({
  height: '100%',
})

const ResultsContainer = styled(Grid)(({ theme }) => ({
  height: '100%',
  overflowY: 'scroll',
  paddingRight: theme.spacing(1),
}))
