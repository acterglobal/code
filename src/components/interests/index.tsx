import { InterestType } from '@generated/type-graphql';
import { AppBar, Box, Tab, Tabs, Typography } from '@material-ui/core';
import { createStyles, makeStyles, Theme, useTheme } from '@material-ui/core/styles';
import React, { FC } from 'react';
import SwipeableViews from 'react-swipeable-views';
import { Focus } from './focus';
import { Approach } from './approach';
import { Tag } from './tag';
import { interests } from 'src/__fixtures__'
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

const root = makeStyles((theme: Theme) =>
  createStyles({
    chip: {
      margin: theme.spacing(0.5),
    },
  }),
);
interface InterestsListProps {
  interests: InterestType[]
}

export const InterestsList: FC<InterestsListProps> = ({ interests }) => {

  const classes = useStyles();
  const theme = useTheme();
  const [value, setValue] = React.useState(0);
  const rootType = interests.find(type => type.parentInterestTypeId === null)
  if (!rootType) {
    //TODO: handle error
  }
  const topLevelTypes = interests.filter(type => type.parentInterestTypeId === rootType.id)

  const handleChange = (event: React.ChangeEvent<{}>, newValue: number) => {
    setValue(newValue);
  };

  const handleChangeIndex = (index: number) => {
    setValue(index);
  };

  // maybe i can try to make the loop inside the return statement
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
          {topLevelTypes.map(({ id, name }) => (
            <Tab label={name} key={`type-tab-${id}`}>{name}</Tab>
          ))}
        </Tabs>
      </AppBar>
      <SwipeableViews
        axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
        index={value}
        onChangeIndex={handleChangeIndex}
      >
        {topLevelTypes.map((topLevel) => (
          // value and index are safeguards. if they don't match, the presumption is that we are on the wrong table
          <TabPanel value={topLevel.name} index={topLevel.name} dir={theme.direction}>
            {topLevel.Interests.map((interest) => (
              topLevel.name === 'Approach' ?
                <Approach interest={interest} /> : topLevel.name === 'Tag' ?
                  <Tag interest={interest} /> : (topLevel.name === 'Focus' ?
                    <Approach interest={interest} /> : <Focus interest={interest} />)

              // I am mapping out every toplevel interest. I want to
              // if (interest.interestTypeId === topLevel.id) {
              //   <Approach interest={interest} />
              // } else {
              //   <Approach interest={interest} />
              // }
            ))}
            {/* {interests.filter(interests => interests.parentInterestTypeId === topLevel.id).map((secondLevel) => (
              <Approach interest={secondLevel} />
            ))} */}
            {/* {topLevel.map((interest) => (
              <Approach interest={interest} />
            ))} */}
            {/* {topLevelTypes.map((topLevel) => (
            <Focus interest={topLevel} />
          ))} */}
            {/* {topLevelTypes.map(type => {type.Interests.map(); type.})} */}
            {/* <div >Environment</div>
          {interests.filter(interests => interest === Environment.id).map((focus) => (
            <Focus interest={focus} />
          ))}
          <div >Social</div>
          {interests.filter(focus => focus.interestTypeId === Social.id).map((focus) => (
            <Focus interest={focus} />
          ))}
          <div >Economy</div>
          {interests.filter(focus => focus.interestTypeId === Economy.id).map((focus) => (
            <Focus interest={focus} />
          ))}
        </TabPanel>
        <TabPanel value={value} index={1} dir={theme.direction}>
          {interests.filter(approach => approach.interestTypeId === Approach.id).map((approach) => (
            <Approach interest={approach} />
          ))}
        </TabPanel>
        <TabPanel value={value} index={2} dir={theme.direction}>
          {interests.filter(tag => tag.interestTypeId === Tag.id).map((tag) => (
            <Tag interest={tag} />
          ))} */}

          </TabPanel>
        ))}

      </SwipeableViews>
    </div>
  );
}
