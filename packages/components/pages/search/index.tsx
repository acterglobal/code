import React, { FC, useState } from 'react'

import { Box } from '@material-ui/core'
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles'

import { SearchResultsInfiniteList } from '@acter/components/organisms/search/results-infinite-list'
import { ResultsMapList } from '@acter/components/organisms/search/results-map-list'
import { SearchTopBar } from '@acter/components/organisms/search/top-bar'
import { ResultDisplayType } from '@acter/lib/constants'

export const SearchPage: FC = () => {
  const classes = useStyles()
  const [resultDisplayType, setResultDisplayType] = useState<ResultDisplayType>(
    ResultDisplayType.LIST
  )

  return (
    <Box className={classes.root}>
      <Box className={classes.controls}>
        <SearchTopBar
          resultDisplayType={resultDisplayType}
          onResultDisplayTypeChange={setResultDisplayType}
        />
      </Box>
      {resultDisplayType === ResultDisplayType.LIST && (
        <SearchResultsInfiniteList />
      )}
      {resultDisplayType === ResultDisplayType.MAP && <ResultsMapList />}
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
