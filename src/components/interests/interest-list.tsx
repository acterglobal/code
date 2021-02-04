import { InterestType } from '@generated/type-graphql';
import React, { FC } from 'react';
import { Approach } from './approach';
import { Focus } from './focus';
import { Tag } from './tag';
interface InterestListProps {
  interestType: InterestType
  interestTypes: InterestType[]
}


// export interface ApproachProps {
//   interest: Interest
// }

// export const Approach: FC<ApproachProps> = ({ interest }) => {
//   const classes = useStyles();
//   console.log('approach', interest);
//   return <Chip
//     className={classes.chip}
//     label={interest.name}
//   />
// }
export const InterestList: FC<InterestListProps> = ({ interestType, interestTypes }) => {

  { console.log('inside  interest list') }
  { console.log('subtypes5', interestTypes) }
  // not showing Social, Env and Eco yet
  const subtypes = interestTypes.filter(subtype => subtype.parentInterestTypeId === interestType.id)
  { console.log('subtypes', subtypes) }

  // if (subtypes) {
  //   return (
  //     <>
  //       {subtypes.map(subtype => <InterestList key={subtype.name} interestType={subtype} interestTypes={interestTypes} />)}
  //     </>
  //   )
  // }

  return (
    <>
      { console.log('subtypes3')}
      {
        interestType.Interests.map(interest => {
          switch (interestType.name) {
            case ('Focus'):
              return <Focus key={interest.name} interest={interest} />
            case ('Approach'):
              return <Approach key={interest.name} interest={interest} />
            case ('Tag'):
              return <Tag key={interest.name} interest={interest} />
            default:
              return <div key={interest.name}>{interest.name}</div>
          }
        })
      }
    </>
  )
}