import React, { FC, ReactNode } from 'react'

import { Box, createStyles, makeStyles, Theme } from '@material-ui/core'
import { grey } from '@material-ui/core/colors'

import clsx from 'clsx'

export interface StepperProps {
  steps: ReactNode[]
  activeStep: number
}

export const Stepper: FC<StepperProps> = ({ steps, activeStep }) => {
  const classes = useStyles()
  return (
    <Box className={classes.statusBars}>
      {steps.map((step, index) => (
        <Box
          key={index}
          className={clsx(classes.bar, activeStep >= index && classes.active)}
        ></Box>
      ))}
    </Box>
  )
}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    statusBars: {
      display: 'flex',
      justifyContent: 'center',
      width: '100%',
      marginBottom: 40,
    },
    bar: {
      height: 8,
      backgroundColor: grey[200],
      borderRadius: 10,
      margin: 5,
      flexGrow: 1,
    },
    active: {
      backgroundColor: theme.palette.primary.main,
    },
  })
)
