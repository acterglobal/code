import React, { FC } from 'react'

import {
  FormControlLabel,
  Radio,
  createStyles,
  makeStyles,
  Theme,
  Typography,
  Box,
} from '@material-ui/core'
import { CheckCircle } from '@material-ui/icons'

import { LoadingSpinner } from '../loading-spinner'

export interface SettingsRadioProps {
  label: string
  subText?: string
  value: string
  updating?: boolean
}

export const SettingsRadio: FC<SettingsRadioProps> = ({
  label,
  value,
  subText,
  updating = false,
}) => {
  const classes = useStyles()

  return (
    <FormControlLabel
      className={classes.radioLabel}
      control={
        updating ? (
          <Box className={classes.radio}>
            <LoadingSpinner size={18} thickness={4} />
          </Box>
        ) : (
          <Radio
            size="small"
            className={classes.radio}
            checkedIcon={<CheckCircle color="primary" fontSize="small" />}
          />
        )
      }
      label={<Label label={label} subText={subText} />}
      labelPlacement="start"
      value={value}
    />
  )
}

interface LabelProps {
  label: string
  subText?: string
}
const Label: FC<LabelProps> = ({ label, subText }) => {
  const classes = useStyles()

  return (
    <Box className={classes.labelContainer}>
      <Typography className={classes.label}>{label}</Typography>
      {subText && (
        <Typography className={classes.subText}>{subText}</Typography>
      )}
    </Box>
  )
}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    radioLabel: {
      justifyContent: 'space-between',
      color: theme.palette.secondary.main,
    },
    radio: {
      padding: 5,
      fontSize: 5,
    },
    labelContainer: {
      display: 'flex',
      alignItems: 'center',
    },
    label: {
      color: theme.palette.secondary.main,
      fontSize: '0.88rem',
      fontWeight: theme.typography.fontWeightBold,
      marginRight: theme.spacing(0.5),
    },
    subText: {
      fontWeight: theme.typography.fontWeightLight,
      color: theme.palette.secondary.main,
      fontSize: '0.88rem',
    },
  })
)
