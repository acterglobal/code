import { Interest } from '@generated/type-graphql';
import { Chip } from '@material-ui/core';
import Avatar from '@material-ui/core/Avatar';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import React, { FC } from 'react';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    chip: {
      margin: theme.spacing(0.5),
    },
  }),
);
export interface TagProps {
  interest: Interest
}

export const Tag: FC<TagProps> = ({ interest }) => {
  const classes = useStyles();
  const [color, setChipColors] = React.useState('default');

  const handleClick = (event: React.setOnClickListener, []) => {
    setChipColors('primary');
  };
  return <Chip
    clickable
    color={color}
    avatar={<Avatar>M</Avatar>}
    className={classes.chip}
    label={interest.name}
    onClick={handleClick}
  />
}