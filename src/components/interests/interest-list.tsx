import React, { FC } from 'react';

import { Focus } from './focus';
import { Approach } from './approach';
import { Tag } from './tag';

import { InterestType } from '@generated/type-graphql';

interface InterestListProps {
  interestType: InterestType
  interestTypes: InterestType[]
}

export const InterestList: FC<InterestListProps> = ({ interestType, interestTypes }) => {
  // not showing Social, Env and Eco yet
  const subtypes = interestTypes.filter(subtype => subtype.parentInterestTypeId === interestType.id)
  { console.log('subtypes', subtypes) }

  if (subtypes) {
    return (
      <>
        { console.log('subtypes2')}
        {subtypes.map(subtype => <InterestList key={subtype.name} interestType={subtype} interestTypes={interestTypes} />)}
      </>
    )
  }

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