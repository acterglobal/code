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

  const subtypes = interestTypes.filter(subtype => subtype.parentInterestTypeId === interestType.id)
  // { console.log('subtypes.length>0', subtypes.length) }
  if (subtypes.length > 0) {
    return (
      <>
        { console.log('indisde subtypes')}

        {subtypes.map(subtype => <><div key={subtype.name}>{subtype.name}</div>
          <InterestList key={subtype.name} interestType={subtype} interestTypes={interestTypes} />
        </>)}
      </>
    )
  }

  return (
    <>
      {/* { console.log('interestType', interestType)} */}
      {
        interestType.Interests.map(interest => {
          { console.log('interest', interestType.name, interest) }
          switch (interestType.name) {
            case ('Focus'):
            case ('Economy'):
            case ('Social'):
            case ('Environment'):
              { console.log('Focus') }
              return <Focus key={interest.name} interest={interest} />
            case ('Approach'):
              return <Approach key={interest.name} interest={interest} />
            case ('Tags'):
              return <Tag key={interest.name} interest={interest} />
            default:
              <div key={interest.name}>{interest.name}</div>
              { console.log('default') }
          }
        })
      }
    </>
  )
}