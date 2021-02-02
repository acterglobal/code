import { Interest } from '@generated/type-graphql'
import { Approach } from 'src/__fixtures__/interest/example-interest-type'

 export const approaches = [
   {
    id: 'c59196fa-2fba-4cee-b451-8736a185a22e',
    interestTypeId: Approach.id,
    name: 'Arts',
   } as Interest,
   {
    id: 'd9cefb52-6228-11eb-ae93-0242ac130002',
    interestTypeId: Approach.id,
    name: 'Biomimicry',
   } as Interest,
   {
    id: 'f4d489a7-5744-4d4f-8893-3647b77a5a58',
    interestTypeId: Approach.id,
    name: 'Example Approach',
   } as Interest,
  ]