import React, { FC } from 'react'

import { Box, createStyles, makeStyles, Theme } from '@material-ui/core'

import { SubtypeSelect } from '@acter/components/atoms/search/subtype-select'
import { CombinedSearchTypes } from '@acter/lib/search/use-search-types'

export interface SearchTypesPickerProps {
  types: CombinedSearchTypes[]
  selectedTypes: CombinedSearchTypes[]
  showTypeIcon: boolean
  onChange: (selectedTypes: CombinedSearchTypes[]) => void
}

export const SearchTypesPicker: FC<SearchTypesPickerProps> = ({
  types,
  selectedTypes,
  showTypeIcon,
  onChange,
}) => {
  const classes = useStyles()

  // Callback for individual type selectors
  const handleChange = (type: CombinedSearchTypes) => (checked: boolean) =>
    onChange(
      checked
        ? selectedTypes.includes(type)
          ? selectedTypes
          : [...selectedTypes, type]
        : selectedTypes.filter((t) => t !== type)
    )

  return (
    <Box className={classes.root}>
      {types?.map((type) => (
        <SubtypeSelect
          key={`sub-type-${type}`}
          subTypeName={type}
          checked={selectedTypes?.includes(type)}
          showTypeIcon={showTypeIcon}
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
