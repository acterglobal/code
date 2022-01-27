import React, { FC } from 'react'

import { Box } from '@material-ui/core'
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles'

import { SearchTopBar } from '../organisms/search/top-bar'

import { DisplayResults } from '@acter/components/search/display-results'

export const Search: FC = () => {
  const classes = useStyles()

  return (
    <Box className={classes.root}>
      <Box className={classes.controls}>
        <SearchTopBar />
      </Box>
      <DisplayResults />
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
