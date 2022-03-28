import React, { FC, useState } from 'react'

import { Box } from '@material-ui/core'
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles'

import { SearchResultsInfiniteList } from '@acter/components/search/organisms/results-infinite-list'
import { SearchResultsMapList } from '@acter/components/search/organisms/results-map-list'
import { SearchTopBar } from '@acter/components/search/organisms/top-bar'
import { ResultDisplayType } from '@acter/lib/constants'

export interface SearchPageProps {
  initialResultDisplayType?: ResultDisplayType
}

export const SearchPage: FC<SearchPageProps> = ({
  initialResultDisplayType = ResultDisplayType.LIST,
}) => {
  const classes = useStyles()
  const [resultDisplayType, setResultDisplayType] = useState<ResultDisplayType>(
    initialResultDisplayType
  )

  return (
    <Box className={classes.searchPage}>
      <Box className={classes.controls}>
        <SearchTopBar
          resultDisplayType={resultDisplayType}
          onResultDisplayTypeChange={setResultDisplayType}
        />
      </Box>
      <Box className={classes.results}>
        {resultDisplayType === ResultDisplayType.LIST && (
          <SearchResultsInfiniteList />
        )}
        {resultDisplayType === ResultDisplayType.MAP && (
          <SearchResultsMapList />
        )}
      </Box>
    </Box>
  )
}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    searchPage: {
      margin: '0 5%',
      height: '100%',
      display: 'flex',
      flexDirection: 'column',
    },
    controls: {
      paddingTop: theme.spacing(4),
      paddingBottom: theme.spacing(2),
      flex: '0 1 auto',
    },
    results: {
      flex: '1 1 auto',
    },
  })
)
