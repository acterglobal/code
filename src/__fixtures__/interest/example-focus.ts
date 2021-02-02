import { Interest } from '@generated/type-graphql'
import { Economy, Environment, Focus, Social } from 'src/__fixtures__/interest/example-interest-type'

 export const focuses = [
   {
  id: '71a92416-a65f-41f1-b4ec-e81012325cd8',
  interestTypeId: Focus.id,
  name: 'Example Focus',
  } as Interest,
  {
  id: 'd9cf08ea-6228-11eb-ae93-0242ac130002',
  interestTypeId: Environment.id,
  name: 'Air',
  } as Interest,
  {
  id: 'd9cf0a70-6228-11eb-ae93-0242ac130002',
  interestTypeId: Environment.id,
  name: 'Biodiversity Land',
  } as Interest,
  {
  id: 'd9cf0b24-6228-11eb-ae93-0242ac130002',
  interestTypeId: Social.id,
  name: 'Corruption',
  } as Interest,
  {
  id: 'd9cf0be2-6228-11eb-ae93-0242ac130002',
  interestTypeId: Social.id,
  name: 'Drinking Water',
  } as Interest,
  {
  id: 'd9cf1010-6228-11eb-ae93-0242ac130002',
  interestTypeId: Economy.id,
  name: 'Agriculture',
  } as Interest,
  {
  id: 'd9cf10e2-6228-11eb-ae93-0242ac130002',
  interestTypeId: Economy.id,
  name: 'Consumption',
  } as Interest
]