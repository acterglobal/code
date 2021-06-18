import React, { FC } from 'react'
import { Box, createStyles, makeStyles, Theme } from '@material-ui/core'
import { ActerType, ActivityType } from '@schema'
import {
  Type,
  SearchTypeProps,
} from 'src/components/layout/side-bar/search-menu/type'
import { SearchType } from 'src/constants'

export interface SearchTypesProps extends SearchTypeProps {
  acterTypes: (ActerType | ActivityType)[]
  searchType: SearchType
}

export const SearchTypes: FC<SearchTypesProps> = ({
  acterTypes,
  filterSubTypes,
  searchType,
  setFilterSubTypes,
}) => {
  const classes = useStyles()

  return (
    <Box className={classes.root}>
      {acterTypes.map((type) => (
        <Type
          acterTypeName={type.name}
          activeTab={searchType}
          filterSubTypes={filterSubTypes}
          setFilterSubTypes={setFilterSubTypes}
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
