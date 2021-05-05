import React, { FC, useState, MouseEvent } from 'react'
import { Box, Grid, Button, Popover, Typography } from '@material-ui/core'
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles'
import { InterestsAddSection } from 'src/components/acter/form/interests-add-section'
import { InterestType } from '@schema'
import { grey } from '@material-ui/core/colors'

export interface FilterTabsProps {
  interestTypes: InterestType[]
}

export const FilterTabs: FC<FilterTabsProps> = ({ interestTypes }) => {
  const classes = useStyles()
  const [anchorEl, setAnchorEl] = useState<HTMLButtonElement | null>(null)

  const handleClick = (event: MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget)
  }

  const handleClose = () => {
    setAnchorEl(null)
  }

  const open = Boolean(anchorEl)
  const id = open ? 'simple-popover' : undefined

  return (
    <Grid item xs={12} sm={6} className={classes.root}>
      <Button
        className={classes.button}
        variant="contained"
        onClick={handleClick}
      >
        Interests
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
          {/* <InterestsAddSection interestTypes={interestTypes} /> */}
        </Box>
      </Popover>

      <Button
        className={classes.button}
        variant="contained"
        onClick={() => null}
      >
        <Typography variant="caption">Sort by</Typography>
      </Button>
      <Button
        className={classes.button}
        variant="contained"
        onClick={() => null}
      >
        <Typography variant="caption">Map View</Typography>
      </Button>
    </Grid>
  )
}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: 'flex',
      alignItems: 'center',
      [theme.breakpoints.down('xs')]: {
        justifyContent: 'center',
      },
    },
    button: {
      height: theme.spacing(3.5),
      minWidth: theme.spacing(18),
      borderRadius: theme.spacing(3),
      marginRight: theme.spacing(1),
      color: grey[900],
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
      maxWidth: theme.spacing(80),
      minHeight: theme.spacing(65),
      padding: theme.spacing(2),
    },
  })
)
