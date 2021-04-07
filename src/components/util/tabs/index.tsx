import React, { FC } from 'react'
import { withStyles, createStyles, Theme } from '@material-ui/core/styles'
import { Tabs as MUITabs, Tab as MUITab } from '@material-ui/core'

// ? overriding the MaterialUI tab styles
const StyledTabs = withStyles((theme: Theme) =>
  createStyles({
    root: {
      backgroundColor: theme.palette.background.paper,
      borderColor: theme.palette.divider,
      borderWidth: 'thin',
      borderStyle: 'solid',
      borderRadius: theme.spacing(1),
    },
    indicator: {
      backgroundColor: theme.palette.primary.main,
      width: '8px',
    },
  })
)(MUITabs)

const StyledTab = withStyles((theme: Theme) =>
  createStyles({
    root: {
      textTransform: 'capitalize',
      fontSize: '0.8rem',
      borderBottomColor: theme.palette.divider,
      borderBottomWidth: 'thin',
      borderBottomStyle: 'solid',
      borderBottomRadius: theme.spacing(2),
    },
  })
)(MUITab)
export interface TabProps {
  tabLabels: string[]
  handleTabChange: (tab: string) => void
  initialValue: string
}

export const Tabs: FC<TabProps> = ({
  tabLabels,
  initialValue,
  handleTabChange,
}) => {
  return (
    <StyledTabs
      orientation="vertical"
      value={initialValue}
      indicatorColor="primary"
      // eslint-disable-next-line  @typescript-eslint/no-explicit-any
      onChange={(evt: React.ChangeEvent<any>, value: string) => {
        handleTabChange(value)
      }}
    >
      {tabLabels.map((tabLabel) => {
        return <StyledTab key={tabLabel} value={tabLabel} label={tabLabel} />
      })}
    </StyledTabs>
  )
}
