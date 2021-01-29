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
  const [color, setChipColors] = React.useState('default');

  const handleClick = (event: React.setOnClickListener, []) => {
    setChipColors('primary');
  };
  return <Chip
    clickable
    color={color}
    icon={<FaceIcon />}
    className={classes.chip}
    label={interest.name}
    onClick={handleClick}
  />

}