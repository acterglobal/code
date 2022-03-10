import React, { FC, useState } from 'react'

import { Box, Theme } from '@mui/material';

import createStyles from '@mui/styles/createStyles';
import makeStyles from '@mui/styles/makeStyles';

import { SearchButton } from '@acter/components/atoms/search/button'
import { SearchInput } from '@acter/components/atoms/search/input'

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
        <SearchInput handleInputChange={handleInputChange} />
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
