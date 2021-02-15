import React, { FC } from 'react'
import {
  makeStyles,
  withStyles,
  createStyles,
  Theme,
} from '@material-ui/core/styles'
import { Tabs as MUITabs, Tab as MUITab } from '@material-ui/core'

// ? overriding the MaterialUI tab styles
const Tabs = withStyles((theme: Theme) =>
  createStyles({
    indicator: {
      backgroundColor: theme.palette.primary.main,
      width: '8px',
    },
  })
)(MUITabs)

const Tab = withStyles((theme: Theme) =>
  createStyles({
    selected: {
      color: theme.palette.primary.main,
      fontWeight: 'bold',
    },
  })
)(MUITab)

//  ? custom styles
const useStyles = makeStyles((theme: Theme) => ({
  tabs: {
    borderRadius: '5px',
    width: '200px',
  },
  tab: {
    border: `1px solid ${theme.palette.secondary.dark}`,
    textTransform: 'none',
    fontSize: '0.8rem',
  },
}))

export interface TabProps {
  tabLabels: string[]
  handleTabChange: (vent: React.ChangeEvent<{}>, newValue: any) => void
  initialValue: number
}

const TabsComponent: FC<TabProps> = ({
  tabLabels,
  initialValue,
  handleTabChange,
}) => {
  const classes = useStyles()

  return (
    <Tabs
      orientation="vertical"
      value={initialValue}
      onChange={handleTabChange}
      className={classes.tabs}
    >
      {tabLabels.map((tabLabel, index) => {
        let styles
        if (index === 0) {
          styles = { borderRadius: '5px 5px 0px 0px', borderBottom: '0px' }
        }
        if (index === tabLabels.length - 1) {
          styles = { borderRadius: '0px 0px 5px 5px', borderTop: '0px' }
        }
        return (
          <Tab
            key={index}
            className={classes.tab}
            value={index}
            label={tabLabel}
            style={styles}
          />
        )
      })}
    </Tabs>
  )
}

export default TabsComponent
