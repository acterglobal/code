import React, { FC } from 'react'
import { Box, createStyles, makeStyles, Theme } from '@material-ui/core'
import { ActerType, ActivityType } from '@schema'
import { Type } from 'src/components/layout/side-bar/search-menu/type'
import { SearchType } from 'src/constants'
import { USER, ACTIVITY, GROUP } from 'src/constants/acter-types'
import { ActivityTypes } from 'src/constants'

export interface SearchTypesProps {
  acterTypes: (ActerType | ActivityType)[]
  filterSubTypes: ActivityTypes[]
  setFilterSubTypes: any
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
      {acterTypes.map((type) => {
        if (![ACTIVITY, GROUP, USER].includes(type.name)) {
          return (
            <Type
              acterTypeName={type.name}
              activeTab={searchType}
              filterSubTypes={filterSubTypes}
              setFilterSubTypes={setFilterSubTypes}
            />
          )
        }
      })}
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
