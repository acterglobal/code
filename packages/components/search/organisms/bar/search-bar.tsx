import React, { FC, useState } from 'react'

import { Box, createStyles, makeStyles, Theme } from '@material-ui/core'

import { SearchButton } from '@acter/components/search/atoms/button'
import { SearchInput } from '@acter/components/search/atoms/input'

export interface SearchBarProps {
  onClick: (searchText: string) => void
}

export const SearchBar: FC<SearchBarProps> = ({ onClick }) => {
  const classes = useStyles()
  const [searchText, setSearchText] = useState('')

  const handleInputChange = (inputText: string) => setSearchText(inputText)

  return (
    <div className={classes.root}>
      <Box className={classes.input}>
        <SearchInput
          handleInputChange={handleInputChange}
          handleSubmit={() => onClick(searchText)}
        />
      </Box>
      <SearchButton onClick={() => onClick(searchText)} />
    </div>
  )
}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: 'flex',
      alignItems: 'center',
      flexGrow: 1,
      paddingRight: theme.spacing(1),
    },
    input: {
      display: 'flex',
      flexGrow: 8,
    },
  })
)
