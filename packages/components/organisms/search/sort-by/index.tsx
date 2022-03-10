import React, { FC, useState } from 'react'

import { Box, Typography } from '@mui/material'
import { Theme } from '@mui/material/styles';
import createStyles from '@mui/styles/createStyles';
import makeStyles from '@mui/styles/makeStyles';
import { DoneRounded as SelectedIcon } from '@mui/icons-material'

import { Popover } from '@acter/components/util/popover'
import { SearchActivitiesSortBy } from '@acter/lib/api/resolvers/get-order-by'

export type SortByProps = {
  sortBy: SearchActivitiesSortBy
  applySortBy: (sortBy: SearchActivitiesSortBy) => void
}

export const SortBy: FC<SortByProps> = ({ sortBy, applySortBy }) => {
  const classes = useStyles()
  const [closePopover, setClosePopover] = useState<boolean | null>(null)

  const handleSelect = (sortBy: SearchActivitiesSortBy) => {
    applySortBy(sortBy)
    setClosePopover(!closePopover)
  }

  return (
    <Popover tabLabel="Sort by" closePopover={closePopover}>
      <Box className={classes.popover}>
        <Box
          className={classes.item}
          onClick={() => handleSelect(SearchActivitiesSortBy.DATE)}
        >
          <Typography variant="caption">Date</Typography>
          {sortBy === SearchActivitiesSortBy.DATE && (
            <SelectedIcon className={classes.icon} />
          )}
        </Box>
        <Box
          className={classes.item}
          onClick={() => handleSelect(SearchActivitiesSortBy.NAME)}
        >
          <Typography variant="caption">Name</Typography>
          {sortBy === SearchActivitiesSortBy.NAME && (
            <SelectedIcon className={classes.icon} />
          )}
        </Box>
      </Box>
    </Popover>
  )
}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    popover: {
      minWidth: theme.spacing(17.5),
      padding: theme.spacing(2),
      display: 'flex',
      flexDirection: 'column',
    },
    item: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      height: theme.spacing(4),
      cursor: 'pointer',
    },
    icon: {
      fontSize: 20,
      color: theme.colors.grey.dark,
    },
  })
)
