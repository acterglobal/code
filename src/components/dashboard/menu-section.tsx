import React, { FC } from 'react'
import {
  makeStyles,
  withStyles,
  createStyles,
  Theme,
} from '@material-ui/core/styles'
import MUITabs from '@material-ui/core/Tabs'
import MUITab from '@material-ui/core/Tab'

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

const MenuSection: FC = () => {
  const classes = useStyles()
  const [value, setValue] = React.useState('1')

  const handleChange = (event: React.ChangeEvent<{}>, newValue: any) => {
    setValue(newValue)
    console.log(newValue)
  }

  return (
    <div>
      <Tabs
        orientation="vertical"
        value={value}
        onChange={handleChange}
        className={classes.tabs}
      >
        <Tab
          style={{ borderRadius: '5px 5px 0px 0px', borderBottom: '0px' }}
          className={classes.tab}
          value="1"
          label="Forum"
        />
        <Tab className={classes.tab} value="2" label="Activitiies" />
        <Tab
          style={{ borderRadius: '0px 0px 5px 5px', borderTop: '0px' }}
          className={classes.tab}
          value="3"
          label="Members"
        />
      </Tabs>
    </div>
  )
}

export default MenuSection
