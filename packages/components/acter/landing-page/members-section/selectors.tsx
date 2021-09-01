import React, { FC } from 'react'
import { Box, Button } from '@material-ui/core'
import { green } from '@material-ui/core/colors'
import { makeStyles, Theme } from '@material-ui/core/styles'
import clsx from 'clsx'
import { justCapitalize } from '@acter/components/util/just-capitalize'

const useStyles = makeStyles((theme: Theme) => ({
  container: {
    display: 'flex',
    justifyContent: 'space-between',
    marginBottom: theme.spacing(1),
    paddingLeft: theme.spacing(1),
  },
  button: {
    height: 25,
    minWidth: 120,
    borderRadius: theme.spacing(3),
    marginRight: theme.spacing(1),
    color: theme.palette.secondary.main,
    backgroundColor: 'white',
    fontSize: '0.7rem',
    '&:hover': {
      backgroundColor: 'white',
    },
  },
  active: {
    backgroundColor: green[400],
    color: 'white',
    '&:hover': {
      backgroundColor: green[600],
    },
  },
}))

export interface SelectorProps {
  selectors: string[]
  activeSelector: string
  onChange: (selector: string) => void
}

export const Selectors: FC<SelectorProps> = ({
  selectors,
  activeSelector,
  onChange,
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
            {selector && justCapitalize(selector)}
          </Button>
        ))}
      </Box>
    </Box>
  )
}
