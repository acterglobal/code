import { Interest } from '@generated/type-graphql';
import { Chip } from '@material-ui/core';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import FaceIcon from '@material-ui/icons/Face';
import React, { FC } from 'react';
import { Environment } from 'src/__fixtures__';

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
  console.log('approach', interest);

  return <Chip
    color='default'
    icon={<FaceIcon />}
    className={classes.chip}
    label={interest.name}
    clickable
  />

}