import React, { FC, useState } from 'react'
import { Box, Typography } from '@material-ui/core'
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles'
import { DoneRounded as SelectedIcon } from '@material-ui/icons'
import { grey } from '@material-ui/core/colors'
import { SearchActivitiesSortBy } from '@acter/lib/api/resolvers/get-order-by'
import { Popover } from 'src/components/util/popover'

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
      color: grey[800],
    },
  })
)
