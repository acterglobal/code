import React, { FC } from 'react'

import {
  Button,
  createStyles,
  makeStyles,
  Theme,
  Typography,
} from '@material-ui/core'
import { green } from '@material-ui/core/colors'

import { useTranslation } from '@acter/lib/i18n/use-translation'

export interface SearchButtonProps {
  onClick: () => void
}

export const SearchButton: FC<SearchButtonProps> = ({ onClick }) => {
  const classes = useStyles()
  const { t } = useTranslation('search')

  return (
    <Button className={classes.button} variant="contained" onClick={onClick}>
      <Typography className={classes.text} variant="caption">
        {t('searchButtonText')}
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
      [theme.breakpoints.down('sm')]: {
        minWidth: theme.spacing(10),
      },
    },
    text: {
      fontSize: '1rem',
    },
  })
)
