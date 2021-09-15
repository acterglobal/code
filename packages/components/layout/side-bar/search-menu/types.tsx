import React, { FC } from 'react'

import { Box, createStyles, makeStyles, Theme } from '@material-ui/core'

import {
  Type,
  SearchTypeProps,
} from '@acter/components/layout/side-bar/search-menu/type'
import { SearchType } from '@acter/lib/constants'
import { ActerType, ActivityType } from '@acter/schema'

export interface SearchTypesProps extends SearchTypeProps {
  subTypes: (ActerType | ActivityType)[]
  searchType: SearchType
}

export const SearchTypes: FC<SearchTypesProps> = ({
  subTypes,
  filterSubTypes,
  searchType,
  onChange,
}) => {
  const classes = useStyles()

  return (
    <Box className={classes.root}>
      {subTypes?.map((type) => (
        <Type
          key={`sub-type-${type.id}`}
          subTypeName={type.name}
          activeTab={searchType}
          filterSubTypes={filterSubTypes}
          onChange={onChange}
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
