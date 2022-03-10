import React, { FC, ReactNode } from 'react'

import { Box, Button, Theme } from '@mui/material';
import createStyles from '@mui/styles/createStyles';
import makeStyles from '@mui/styles/makeStyles';
import { grey } from '@mui/material/colors'

import clsx from 'clsx'

export interface StepperProps {
  steps: ReactNode[]
  activeStep: number
  handleSelectStep: (value: number) => void
}

export const Stepper: FC<StepperProps> = ({
  steps,
  activeStep,
  handleSelectStep,
}) => {
  const classes = useStyles()

  const handleClick = (selectedStep: number) => {
    selectedStep <= activeStep && handleSelectStep(selectedStep)
  }

  return (
    <Box className={classes.statusBars}>
      {steps.map((step, index) => (
        <Button
          variant="text"
          color="primary"
          className={classes.button}
          onClick={() => handleClick(index)}
          key={index}
        >
          <Box
            className={clsx(classes.bar, activeStep >= index && classes.active)}
          ></Box>
        </Button>
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
      flexGrow: 1,
    },
    active: {
      backgroundColor: theme.palette.primary.main,
    },
    button: {
      borderRadius: theme.spacing(1),
      textTransform: 'none',
      width: '100%',
      '&:hover': {
        backgroundColor: '#FFF',
      },
    },
  })
)
