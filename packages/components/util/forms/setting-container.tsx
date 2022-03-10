import React, { FC, ReactNode } from 'react'

import { Theme, Typography, FormControl, Box } from '@mui/material';

import makeStyles from '@mui/styles/makeStyles';
import createStyles from '@mui/styles/createStyles';

import { useActer } from '@acter/lib/acter/use-acter'

interface SettingContainerProps {
  heading: string
  children: ReactNode
}
export const SettingContainer: FC<SettingContainerProps> = ({
  heading,
  children,
}) => {
  const classes = useStyles()

  return (
    <Box className={classes.container}>
      <Typography className={classes.heading}>{heading}</Typography>
      {children}
    </Box>
  )
}

interface SettingProps {
  title: string
  children: ReactNode
}
export const Setting: FC<SettingProps> = ({ title, children }) => {
  const classes = useStyles()
  const { acter } = useActer()
  if (!acter) return null

  return (
    <FormControl component="fieldset" fullWidth>
      <Box className={classes.settingContent}>
        <Typography className={classes.title}>
          {title}
          <Typography className={classes.acterName}>{acter.name}</Typography>?
        </Typography>
        {children}
      </Box>
    </FormControl>
  )
}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    container: {
      marginBottom: theme.spacing(2.5),
    },
    settingContent: {
      marginBottom: theme.spacing(4),
    },
    heading: {
      fontSize: '1.12rem',
      color: theme.palette.secondary.main,
      fontWeight: theme.typography.fontWeightBold,
      borderBottom: '1px solid',
      borderBottomColor: theme.palette.secondary.main,
      marginBottom: theme.spacing(2.5),
    },
    title: {
      fontSize: '0.88rem',
      color: theme.colors.grey.main,
      fontWeight: theme.typography.fontWeightLight,
      display: 'flex',
      alignItems: 'center',
      marginBottom: theme.spacing(0.5),
    },
    acterName: {
      marginLeft: theme.spacing(0.5),
      marginRight: theme.spacing(0.5),
      fontSize: '0.88rem',
      color: theme.colors.grey.dark,
      fontWeight: theme.typography.fontWeightMedium,
    },
  })
)
