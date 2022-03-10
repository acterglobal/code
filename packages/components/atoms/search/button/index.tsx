import React, { FC } from 'react'

import { Button, Theme, Typography } from '@mui/material';
import createStyles from '@mui/styles/createStyles';
import makeStyles from '@mui/styles/makeStyles';
import { green } from '@mui/material/colors'

export interface SearchButtonProps {
  onClick: () => void
}

export const SearchButton: FC<SearchButtonProps> = ({ onClick }) => {
  const classes = useStyles()
  return (
    <Button className={classes.button} variant="contained" onClick={onClick}>
      <Typography className={classes.text} variant="caption">
        Search
      </Typography>
    </Button>
  )
}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    button: {
      height: theme.spacing(4.5),
      minWidth: theme.spacing(15),
      borderRadius: theme.spacing(3),
      marginLeft: theme.spacing(1),
      color: 'white',
      backgroundColor: green[500],
      textTransform: 'capitalize',
      '&:hover': {
        backgroundColor: green[500],
      },
      [theme.breakpoints.down('md')]: {
        minWidth: theme.spacing(10),
      },
    },
    text: {
      fontSize: '1rem',
    },
  })
)
