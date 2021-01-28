import { Interest, InterestType } from '@generated/type-graphql';
import AppBar from '@material-ui/core/AppBar';
import Box from '@material-ui/core/Box';
import { createStyles, makeStyles, Theme, useTheme } from '@material-ui/core/styles';
import Tab from '@material-ui/core/Tab';
import Tabs from '@material-ui/core/Tabs';
import Typography from '@material-ui/core/Typography';
import React, { FC } from 'react';
import SwipeableViews from 'react-swipeable-views';
import { Approach } from 'src/components/interests/approach';
import { Focus } from './focus';
import { Tag } from './tag';
interface TabPanelProps {
  children?: React.ReactNode;
  dir?: string;
  index: any;
  value: any;
}

function TabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`full-width-tabpanel-${index}`}
      aria-labelledby={`full-width-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

function a11yProps(index: any) {
  return {
    id: `full-width-tab-${index}`,
    'aria-controls': `full-width-tabpanel-${index}`,
  };
}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: 'flex',
      justifyContent: 'center',
      flexWrap: 'wrap',
      listStyle: 'none',
      padding: theme.spacing(0.5),
      margin: 0,
      backgroundColor: theme.palette.background.paper,
    },
  }),
);

export interface InterestsListProps {
  type: InterestType
  interests: Interest[]
  approaches: Interest[]
  focuses: Interest[]
  tags: Interest[]
}

export const InterestsList: FC<InterestsListProps> = ({ approaches, focuses, tags }) => {
  const classes = useStyles();
  const theme = useTheme();
  const [value, setValue] = React.useState(0);

  const handleChange = (event: React.ChangeEvent<{}>, newValue: number) => {
    setValue(newValue);
  };

  const handleChangeIndex = (index: number) => {
    setValue(index);
  };

  return (

    <div className={classes.root}>
      <AppBar position="static" color="default">
        <Tabs
          value={value}
          onChange={handleChange}
          indicatorColor="primary"
          textColor="primary"
          variant="fullWidth"
          aria-label="full width tabs example"
        >
          <Tab label="Focus" {...a11yProps(0)} />
          <Tab label="Approach" {...a11yProps(1)} />
          <Tab label="Tags" {...a11yProps(2)} />
        </Tabs>
      </AppBar>
      <SwipeableViews
        axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
        index={value}
        onChangeIndex={handleChangeIndex}
      >
        <TabPanel value={value} index={0} dir={theme.direction}>
          {focuses.map((focus) => (
            <Focus interest={focus} />
          ))}
        </TabPanel>
        <TabPanel value={value} index={1} dir={theme.direction}>
          {approaches.map((approach) => (
            <Approach interest={approach} />
          ))}
        </TabPanel>
        <TabPanel value={value} index={2} dir={theme.direction}>
          {tags.map((tag) => (
            <Tag interest={tag} />
          ))}
        </TabPanel>
      </SwipeableViews>
    </div>
  );
}
