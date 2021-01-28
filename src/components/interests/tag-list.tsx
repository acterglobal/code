import { Interest, InterestType } from '@generated/type-graphql';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import React, { FC } from 'react';
import { Tag } from 'src/components/interests/tag';

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
export interface TagListProps {
  type: InterestType
  interests: Interest[]
}

export const TagList: FC<TagListProps> = ({ interests }) => {

  const classes = useStyles();

  return (
    <div className={classes.root}>
      {interests.map((interest) => (
        <Tag interest={interest} />
      ))}
    </div>
  );
}