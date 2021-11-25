import React, { FC } from 'react'

import { Box, Button, Typography } from '@material-ui/core'
import { makeStyles, Theme } from '@material-ui/core/styles'

import clsx from 'clsx'
import pluralize from 'pluralize'

import { capitalize } from '@acter/lib/string/capitalize'

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
    height: 25,
    minWidth: 120,
    borderRadius: theme.spacing(3),
    marginRight: theme.spacing(1),
    color: theme.palette.secondary.dark,
    textTransform: 'capitalize',
    fontWeight: theme.typography.fontWeightLight,
    backgroundColor: 'white',
    fontSize: '0.8rem',
    '&:hover': {
      backgroundColor: 'white',
    },
  },
  active: {
    backgroundColor: theme.palette.secondary.main,
    color: theme.colors.white,
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
