import { InterestType } from '@generated/type-graphql'
import { AppBar, Box, Tab, Tabs, Typography } from '@material-ui/core'
import { createStyles, makeStyles, Theme, useTheme } from '@material-ui/core/styles'
import React, { FC } from 'react'
import SwipeableViews from 'react-swipeable-views'
import { InterestList } from 'src/components/interests/interest-list'
interface TabPanelProps {
  children?: React.ReactNode;
  dir?: string;
  index: number;
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
export interface InterestTypeListProps {
  Interests: InterestType[]
}

export const InterestTypeList: FC<InterestTypeListProps> = ({ Interests }) => {
  const classes = useStyles();
  const theme = useTheme();
  const [currentTab, setCurrentTab] = React.useState(0);
  const rootType = Interests.find(type => type.parentInterestTypeId === null)
  if (!rootType) {
    //TODO: handle error
  }
  const topLevelTypes = Interests.filter(type => type.parentInterestTypeId === rootType.id)

  const handleChange = (event: React.ChangeEvent<{}>, newValue: number) => {
    setCurrentTab(newValue);
  };

  const handleChangeIndex = (index: number) => {
    setCurrentTab(index);
  };

  return (
    <div className={classes.root}>
      <AppBar position="static" color="default">
        <Tabs
          value={currentTab}
          onChange={handleChange}
          indicatorColor="primary"
          textColor="primary"
          variant="fullWidth"
          aria-label="full width tabs example"
        >
          {topLevelTypes.map((topLevelType, index) => (
            <Tab label={topLevelType.name} {...a11yProps(index)} key={`type-tabs-${topLevelType.id}`} />
          ))}
        </Tabs>
      </AppBar>
      <SwipeableViews
        axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
        index={currentTab}
        onChangeIndex={handleChangeIndex}
      >
        {topLevelTypes.map((topLevelType, index) => (
          <>
            <TabPanel value={index} key={topLevelType.id} index={index} dir={theme.direction}>
              <InterestList interestType={topLevelType} interestTypes={Interests} />
            </TabPanel>
          </>
        ))}
      </SwipeableViews>
    </div>
  );
}
