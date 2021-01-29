import { Interest } from '@generated/type-graphql'

import { Tag } from 'src/__fixtures__/interest/example-interest-type'

export const ExampleTag: Interest = {
  id: '6d03b143-57e9-461e-aef8-c2c889a32ccb',
  interestTypeId: Tag.id,
  name: 'Example Tag',
  selected: false,
}

export const AntiRacism: Interest = {
  id: 'd9cf01f6-6228-11eb-ae93-0242ac130002',
  interestTypeId: Tag.id,
  name: '#AntiRacism',
  selected: false,
}

export const BalticSea: Interest = {
  id: 'd9cf00de-6228-11eb-ae93-0242ac130002',
  interestTypeId: Tag.id,
  name: '#BalticSea',
  selected: false,
}

 export const tags = [
   {
    id: 'd9cf01f6-6228-11eb-ae93-0242ac130002',
    name: "#AntiRacism",
    interestTypeId: Tag.id
   } as Interest,
   {
    id: 'd9cf00de-6228-11eb-ae93-0242ac130002',
    name: "#BalticSea",
    interestTypeId: Tag.id,
   } as Interest
 ]
