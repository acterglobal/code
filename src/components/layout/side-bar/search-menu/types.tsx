import React, { FC } from 'react'
import { Box, createStyles, makeStyles, Theme } from '@material-ui/core'
import { ActerType, ActivityType } from '@schema'
import { Type } from 'src/components/layout/side-bar/search-menu/type'
import { SearchType } from 'src/components/search'
import { USER, ACTIVITY, GROUP } from 'src/constants/acter-types'

export interface SearchTypesProps {
  acterTypes: (ActerType | ActivityType)[]
  searchType: SearchType
}

export const SearchTypes: FC<SearchTypesProps> = ({
  searchType,
  acterTypes,
}) => {
  const classes = useStyles()
  return (
    <Box className={classes.root}>
      {acterTypes.map((type) => {
        if (
          type.name !== USER &&
          type.name !== ACTIVITY &&
          type.name !== GROUP
        ) {
          return <Type acterTypeName={type.name} activeTab={searchType} />
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
