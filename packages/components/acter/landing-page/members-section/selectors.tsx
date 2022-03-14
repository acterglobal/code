import React, { FC } from 'react'

import { Box, Button, Typography } from '@mui/material'
import { Theme } from '@mui/material/styles';

import makeStyles from '@mui/styles/makeStyles';

import clsx from 'clsx'

import { capitalize } from '@acter/lib/string/capitalize'
import { pluralize } from '@acter/lib/string/pluralize'

export interface SelectorProps {
  selectors: string[]
  activeSelector: string
  onChange: (selector: string) => void
  totalResults: number
}

export const Selectors: FC<SelectorProps> = ({
  selectors,
  activeSelector,
  onChange,
  totalResults,
}) => {
  const classes = useStyles()

  return (
    <Box className={classes.container}>
      <Box role="tablist">
        {selectors.map((selector) => (
          <Button
            key={`members-selector-${selector}`}
            role="tab"
            className={clsx(
              classes.button,
              activeSelector === selector && classes.active
            )}
            variant="contained"
            onClick={() => onChange(selector)}
          >
            {capitalize(selector)}
          </Button>
        ))}
      </Box>
      <Box>
        <Typography className={classes.results} role="heading">
          {totalResults || 0} {pluralize(activeSelector)}
        </Typography>
      </Box>
    </Box>
  )
}

const useStyles = makeStyles((theme: Theme) => ({
  container: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '2.5%',
    borderBottom: '1.5px solid',
    borderBottomColor: theme.palette.secondary.light,
  },
  button: {
    height: theme.spacing(4.5),
    minWidth: 120,
    borderRadius: theme.spacing(3),
    marginRight: theme.spacing(1),
    color: theme.palette.secondary.dark,
    textTransform: 'capitalize',
    fontWeight: theme.typography.fontWeightLight,
    backgroundColor: 'white',
    fontSize: '1rem',
    '&:hover': {
      backgroundColor: 'white',
    },
  },
  active: {
    backgroundColor: theme.palette.secondary.main,
    color: theme.palette.background.paper,
    '&:hover': {
      backgroundColor: theme.palette.secondary.main,
    },
  },
  results: {
    fontSize: '0.88rem',
    fontWeight: theme.typography.fontWeightMedium,
    color: theme.palette.secondary.main,
  },
}))
