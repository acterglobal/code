import { Interest } from '@generated/type-graphql';
import Button from '@material-ui/core/Button';
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

export const TagComponent: FC<TagProps> = ({ interest }) => {
  const classes = useStyles();
  const [color, setChipColors] = React.useState('default');

  const handleClick = (event: React.setOnClickListener, []) => {
    setChipColors('primary');
  };
  return <Button onClick={handleClick} >
    {interest.name}
  </Button>
}