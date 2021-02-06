import { Interest } from '@generated/type-graphql';
import { Chip } from '@material-ui/core';
import { createStyles, makeStyles, Theme, withStyles } from '@material-ui/core/styles';
import FaceIcon from '@material-ui/icons/Face';
import React, { FC } from 'react';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    chip: {
      margin: theme.spacing(0.5),
    },
  }),
);
export interface FocusProps {
  interest: Interest
}

export const Focus: FC<FocusProps> = ({ interest }) => {
  const classes = useStyles();
  console.log('inside focus component', interest.name);
  const color = (interest.name === 'Transportation' ? 'green' : interest.name === 'Social' ? 'red' : interest.name === 'Economy' ? 'orange' : 'yellow') as string;

  const StyleChip = withStyles({
    root: {
      backgroundColor: color,
    },
  })(Chip);

  return <StyleChip
    color='default'
    icon={<FaceIcon />}
    // style={{ backgroundColor: 'green' }}
    className={classes.chip}
    label={interest.name}
    clickable
  />

}

//         (interest.name === 'Economy' ? (
            //           <div>{interest.name}</div>
            //           {
            //     interest.map((economy) => (
            //       <Focus interest={economy} />)})) : interest.name === 'Environment' ?
            // (<div>{interest.name}</div>{interest.map((environment) => (
            //         <Focus interest={environment} />))}) : interest.name === 'Social' ?
            // (<div>{interest.name}</div>
            // { interest.map((social) => (
            //   <Focus interest={social} />))}
            // )
            // )