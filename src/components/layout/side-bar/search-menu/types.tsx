import React, { FC } from 'react'
import { Box, createStyles, makeStyles, Theme } from '@material-ui/core'
import { ActerType, ActivityType } from '@schema'
import { Type } from 'src/components/layout/side-bar/search-menu/type'
import { SearchType } from 'src/components/search'
import { USER, ACTIVITY, GROUP } from 'src/constants/acter-types'
export interface SearchTypesProps {
  activeTab: SearchType
  acterTypes: ActerType[] | ActivityType[]
}

export const SearchTypes: FC<SearchTypesProps> = ({
  activeTab,
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
          return <Type acterTypeName={type.name} activeTab={activeTab} />
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
