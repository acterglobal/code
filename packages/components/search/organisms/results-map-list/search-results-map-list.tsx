import React, { FC, useEffect, useState } from 'react'

import { Grid, styled } from '@material-ui/core'

import { LoadingBar } from '@acter/components/atoms/loading/bar'
import { useSearchVariables } from '@acter/components/contexts/search-variables'
import { SearchZeroResultsMessage } from '@acter/components/search/atoms/zero-results-message'
import { SearchResultsList } from '@acter/components/search/organisms/results-list'
import { SearchResultsMap } from '@acter/components/search/organisms/results-map'
import { useActerSearch } from '@acter/lib/search/use-acter-search'

export const SearchResultsMapList: FC = () => {
  const { acters, fetching } = useActerSearch()
  const [activeActerId, setActiveActerId] = useState('')
  const [searchReady, setSearchReady] = useState(false)
  const [searchVariables] = useSearchVariables()

  useEffect(() => {
    setSearchReady(
      searchVariables.north !== null &&
        searchVariables.east !== null &&
        searchVariables.south !== null &&
        searchVariables.west !== null
    )
  }, [searchVariables])

  return (
    <SearchResultsMapListContainer container>
      <ResultsContainer item xs={12} sm={6}>
        {searchReady && (
          <>
            <SearchResultsList
              acters={acters}
              activeActerId={activeActerId}
              collapsed={true}
            />
            {fetching && <LoadingBar />}
            {searchReady && !fetching && acters?.length === 0 && (
              <SearchZeroResultsMessage />
            )}
          </>
        )}
      </ResultsContainer>
      <Grid item xs={12} sm={6}>
        <SearchResultsMap acters={acters} onActerHover={setActiveActerId} />
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
