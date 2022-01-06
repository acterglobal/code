import React, { FC, useEffect, useState, MouseEvent, ReactNode } from 'react'

import {
  Box,
  Button,
  Popover as MUIPopover,
  Typography,
  createStyles,
  makeStyles,
  Theme,
} from '@material-ui/core'

export type PopoverProps = {
  tabLabel: string
  children: ReactNode
  closePopover: boolean | null
}

export const Popover: FC<PopoverProps> = ({
  tabLabel,
  children,
  closePopover,
}) => {
  const classes = useStyles()

  useEffect(() => {
    if (closePopover !== null) handleClose()
  }, [closePopover])

  const [anchorEl, setAnchorEl] = useState<HTMLButtonElement | null>(null)
  const handleClick = (event: MouseEvent<HTMLButtonElement>) =>
    setAnchorEl(event.currentTarget)

  const handleClose = () => setAnchorEl(null)

  const open = Boolean(anchorEl)
  const id = open ? 'simple-popover' : undefined

  return (
    <>
      <Button
        className={classes.button}
        variant="contained"
        onClick={handleClick}
      >
        <Typography className={classes.tabLable} variant="caption">
          {tabLabel}
        </Typography>
      </Button>

      <MUIPopover
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
        <Box className={classes.popover}>{children}</Box>
      </MUIPopover>
    </>
  )
}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    button: {
      height: theme.spacing(4.5),
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
      maxWidth: theme.spacing(80),
    },
    tabLable: {
      fontSize: '1rem',
    },
  })
)
