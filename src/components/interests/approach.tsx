import { Interest } from '@generated/type-graphql';
import { Chip } from '@material-ui/core';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import React, { FC } from 'react';

console.log('approach');

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    chip: {
      margin: theme.spacing(0.5),
    },
  }),
);
export interface ApproachProps {
  interest: Interest
}

export const Approach: FC<ApproachProps> = ({ interest }) => {
  const classes = useStyles();
  console.log('approach', interest);
  return <Chip
    className={classes.chip}
    label={interest.name}
  />
}
