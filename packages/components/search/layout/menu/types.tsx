import React, { FC, useEffect, useState } from 'react'

import { useRouter } from 'next/router'

import { Box, createStyles, makeStyles, Theme } from '@material-ui/core'

import { Type } from '@acter/components/search/layout/menu/type'
import {
  ActerSearchTypes,
  ActivitySearchTypes,
  SearchType,
} from '@acter/lib/constants'
import { useQuerystringTypes } from '@acter/lib/search/use-querystring-types'
import { useSearchType } from '@acter/lib/search/use-search-type'

export const SearchTypes: FC = () => {
  const classes = useStyles()
  const router = useRouter()
  const { pathname, query } = router
  const queryStringTypes = useQuerystringTypes()
  const [selectedTypes, setSelectedTypes] = useState<string[]>([])
  const searchType = useSearchType()
  const types =
    searchType === SearchType.ACTIVITIES
      ? ActivitySearchTypes
      : ActerSearchTypes

  useEffect(() => {
    setSelectedTypes(queryStringTypes.length > 0 ? queryStringTypes : types)
  }, [queryStringTypes, types])

  useEffect(() => {
    if (selectedTypes.length > 0) {
      router.push({
        pathname,
        query: {
          ...query,
          types: selectedTypes,
        },
      })
    }
  }, [selectedTypes.join(',')])

  // Callback for individual type selectors
  const handleChange = (type: string) => (checked: boolean) => {
    if (checked) {
      if (!selectedTypes.includes(type))
        return setSelectedTypes([...selectedTypes, type])
    }
    return setSelectedTypes(selectedTypes.filter((subType) => subType !== type))
  }

  return (
    <Box className={classes.root}>
      {types?.map((type) => (
        <Type
          key={`sub-type-${type}`}
          subTypeName={type}
          checked={selectedTypes.includes(type)}
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
