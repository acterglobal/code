import { Interest, InterestType } from '@generated/type-graphql';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import React, { FC } from 'react';
import { Approach } from 'src/components/interests/approach';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: 'flex',
      justifyContent: 'center',
      flexWrap: 'wrap',
      listStyle: 'none',
      padding: theme.spacing(0.5),
      margin: 0,
    },
  }),
);
export interface ApproachListProps {
  type: InterestType
  interests: Interest[]
}

export const ApproachList: FC<ApproachListProps> = ({ interests }) => {

  const classes = useStyles();

  return (
    <div className={classes.root}>
      {interests.map((interest) => (
        <Approach interest={interest} />
      ))}
    </div>
  );
}