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

export const Tag: FC<TagProps> = ({ interest }) => {
  const classes = useStyles();
  const [color, setChipColors] = React.useState('default');

  return <Button  >
    #{interest.name}
  </Button>
}