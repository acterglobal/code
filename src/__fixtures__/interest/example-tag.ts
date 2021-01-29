import { Interest } from '@generated/type-graphql'
import { Tag } from 'src/__fixtures__/interest/example-interest-type'

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
   } as Interest,
 ]
