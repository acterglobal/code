import React, { FC, useState, MouseEvent } from 'react'
import { Box, Button, Popover, Typography } from '@material-ui/core'
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles'
import { DoneRounded as SelectedIcon } from '@material-ui/icons'
import { grey } from '@material-ui/core/colors'
import { SearchActivitiesSortBy } from 'src/lib/api/resolvers/get-order-by'

export type SortByProps = {
  sortBy: SearchActivitiesSortBy
  applySortBy: (sortBy: SearchActivitiesSortBy) => void
}

export const SortBy: FC<SortByProps> = ({ sortBy, applySortBy }) => {
  const classes = useStyles()

  /* Material Ui Popover stuff */
  const [anchorEl, setAnchorEl] = useState<HTMLButtonElement | null>(null)
  const handleClick = (event: MouseEvent<HTMLButtonElement>) =>
    setAnchorEl(event.currentTarget)

  const handleClose = () => setAnchorEl(null)

  const open = Boolean(anchorEl)
  const id = open ? 'simple-popover' : undefined
  /* ****************************************** */

  const handleSelect = (sortBy: SearchActivitiesSortBy) => {
    applySortBy(sortBy)
    handleClose()
  }

  return (
    <>
      <Button
        className={classes.button}
        variant="contained"
        onClick={handleClick}
      >
        <Typography variant="caption">Sort by</Typography>
      </Button>

      <Popover
        id={id}
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'center',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'center',
        }}
        style={{ marginTop: 5 }}
      >
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
    </>
  )
}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    button: {
      height: theme.spacing(3.5),
      minWidth: theme.spacing(18),
      borderRadius: theme.spacing(3),
      marginRight: theme.spacing(1),
      color: 'black',
      backgroundColor: 'white',
      textTransform: 'capitalize',
      fontSize: '0.7rem',
      '&:hover': {
        backgroundColor: 'white',
      },
      [theme.breakpoints.down('sm')]: {
        minWidth: theme.spacing(10),
      },
    },
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
