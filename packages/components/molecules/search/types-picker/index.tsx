import React, { FC } from 'react'

import { Box, createStyles, makeStyles, Theme } from '@material-ui/core'

import { SubtypeSelect } from '@acter/components/atoms/search/subtype-select'
import { useSearchVariables } from '@acter/components/contexts/search-variables'
import { SearchType } from '@acter/lib/constants'
import { useSearchType } from '@acter/lib/search/use-search-type'
import { SearchTypes, useSearchTypes } from '@acter/lib/search/use-search-types'

export const SearchTypesPicker: FC = () => {
  const searchType = useSearchType()
  const types = useSearchTypes()
  const [search, searchVar] = useSearchVariables()
  const classes = useStyles()

  // Callback for individual type selectors
  const handleChange = (type: SearchTypes) => (checked: boolean) => {
    if (checked) {
      if (!search.types?.includes(type))
        return searchVar({
          ...search,
          types: [...search.types, type],
        })
    }
    return searchVar({
      ...search,
      types: search.types?.filter((subType) => subType !== type),
    })
  }

  return (
    <Box className={classes.root}>
      {types?.map((type) => (
        <SubtypeSelect
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
