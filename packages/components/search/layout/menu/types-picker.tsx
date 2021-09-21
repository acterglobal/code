import React, { FC } from 'react'

import { useReactiveVar } from '@apollo/client'
import { Box, createStyles, makeStyles, Theme } from '@material-ui/core'

import { Type } from '@acter/components/search/layout/menu/type'
import { SearchType } from '@acter/lib/constants'
import { searchVar } from '@acter/lib/search/search-var'
import { useSearchType } from '@acter/lib/search/use-search-type'
import { SearchTypes, useSearchTypes } from '@acter/lib/search/use-search-types'

export const SearchTypesPicker: FC = () => {
  const searchType = useSearchType()
  const types = useSearchTypes()
  const search = useReactiveVar(searchVar)
  const classes = useStyles()

  // Callback for individual type selectors
  const handleChange = (type: SearchTypes) => (checked: boolean) => {
    if (checked) {
      if (!search.types.includes(type))
        return searchVar({
          ...search,
          types: [...search.types, type],
        })
    }
    return searchVar({
      ...search,
      types: search.types.filter((subType) => subType !== type),
    })
  }

  return (
    <Box className={classes.root}>
      {types?.map((type) => (
        <Type
          key={`sub-type-${type}`}
          subTypeName={type}
          checked={search.types?.includes(type)}
          showTypeIcon={searchType === SearchType.ACTIVITIES}
          onChange={handleChange(type)}
        />
      ))}
    </Box>
  )
}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      padding: theme.spacing(2),
    },
  })
)