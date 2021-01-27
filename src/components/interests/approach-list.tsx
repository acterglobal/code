import { Interest, InterestType } from '@generated/type-graphql';
// import Avatar from '@material-ui/core/Avatar';
import Chip from '@material-ui/core/Chip';
// import FaceIcon from '@material-ui/icons/Face';
// import DoneIcon from '@material-ui/icons/Done';
// import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import React, { FC } from 'react';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: 'flex',
      justifyContent: 'center',
      flexWrap: 'wrap',
      listStyle: 'none',
      padding: theme.spacing(0.5),
      margin: 0,
      // display: 'flex',
      // justifyContent: 'center',
      // flexWrap: 'wrap',
      // '& > *': {
      //   margin: theme.spacing(0.5),
      // },
    },
    chip: {
      margin: theme.spacing(0.5),
    },

    // paper: {
    //   padding: theme.spacing(2),
    //   textAlign: 'center',
    //   color: theme.palette.text.secondary,
    // },
  }),
);
export interface ApproachListProps {
  type: InterestType
  interests: Interest[]
}

export const ApproachList: FC<ApproachListProps> = ({ interests }) => {

  const classes = useStyles();

  const handleDelete = () => {
    console.info('You clicked the delete icon.');
  };

  const handleClick = () => {
    console.info('You clicked the Chip.');
  };

  return (

    <div className={classes.root}>
      <Grid container>
        {/* <Grid item xs={6} sm={3}> */}
        {interests.map((interest) => (
          <Chip
            className={classes.chip}
            // avatar={<Avatar alt="Natacha" src="/static/images/avatar/1.jpg" />}
            label={`${interest.name}`}
            onClick={handleClick}
          // onDelete={handleDelete}
          />
          //  <Approach interest={interest} key={`interest-${interest.id}`} />
        ))}
        {/* </Grid> */}
      </Grid>
    </div>
  );
}


// interface ChipData {
//   key: number;
//   label: string;
// }

// const useStyles = makeStyles((theme: Theme) =>
//   createStyles({
//     root: {
//       display: 'flex',
//       justifyContent: 'center',
//       flexWrap: 'wrap',
//       listStyle: 'none',
//       padding: theme.spacing(0.5),
//       margin: 0,
//     },
//     chip: {
//       margin: theme.spacing(0.5),
//     },
//   }),
// );

// export default function ChipsArray() {
//   const classes = useStyles();
//   const [chipData, setChipData] = React.useState<ChipData[]>([
//     { key: 0, label: 'Angular' },
//     { key: 1, label: 'jQuery' },
//     { key: 2, label: 'Polymer' },
//     { key: 3, label: 'React' },
//     { key: 4, label: 'Vue.js' },
//   ]);

//   const handleDelete = (chipToDelete: ChipData) => () => {
//     setChipData((chips) => chips.filter((chip) => chip.key !== chipToDelete.key));
//   };

//   return (
//     <Paper component="ul" className={classes.root}>
//       {chipData.map((data) => {
//         let icon;

//         if (data.label === 'React') {
//           icon = <TagFacesIcon />;
//         }

//         return (
//           <li key={data.key}>
//             <Chip
//               icon={icon}
//               label={data.label}
//               onDelete={data.label === 'React' ? undefined : handleDelete(data)}
//               className={classes.chip}
//             />
//           </li>
//         );
//       })}
//     </Paper>
//   );
// }