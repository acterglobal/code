import React, { FC } from 'react'

import {
  Grid,
  MenuList,
  Typography,
  createStyles,
  withStyles,
  Theme,
} from '@material-ui/core'

export const SettingsContainer: FC = ({ children }) => (
  <StyledSettingsContainer container>{children}</StyledSettingsContainer>
)

const StyledSettingsContainer = withStyles((theme: Theme) =>
  createStyles({
    root: {
      padding: theme.spacing(4),
    },
  })
)(Grid)

export const SettingsMenu: FC = ({ children }) => (
  <StyledSettingsMenu item xs={2}>
    <MenuList>{children}</MenuList>
  </StyledSettingsMenu>
)

const StyledSettingsMenu = withStyles((theme: Theme) =>
  createStyles({
    root: {
      borderRight: `1px solid ${theme.palette.grey[500]}`,
    },
  })
)(Grid)

export const SettingsContent: FC = ({ children }) => (
  <StyledSettingsContent item xs={10}>
    {children}
  </StyledSettingsContent>
)

const StyledSettingsContent = withStyles((theme: Theme) =>
  createStyles({
    root: {
      paddingLeft: theme.spacing(5),
      '& h2': {},
    },
  })
)(Grid)

export const SettingsSectionHeading: FC = ({ children }) => (
  <StyledSettingsSectionHeading variant="h2">
    {children}
  </StyledSettingsSectionHeading>
)

const StyledSettingsSectionHeading = withStyles((theme: Theme) =>
  createStyles({
    root: {
      width: '75%',
      fontSize: '1.2rem',
      paddingBottom: theme.spacing(1),
      marginBottom: theme.spacing(2),
      borderBottom: `1px solid ${theme.palette.grey[500]}`,
    },
  })
)(Typography)
