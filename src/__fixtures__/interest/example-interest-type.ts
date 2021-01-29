import { Interest, InterestType } from '@generated/type-graphql'

export const Focus: InterestType = {
  id: 'e5083f6a-9dab-468c-8fcd-0826ad2bf1e1',
  name: 'Focus',
}
export const Approach: InterestType = {
  id: '5474f20e-f14b-4335-8faa-7ebb27412459',
  name: 'Approach',
}
export const Tag: InterestType = {
  id: 'e4de70ac-4e9a-411b-8ebc-2d4e089946a6',
  name: 'Tag',
}

export const Environment: InterestType = {
  id: 'b3a0ff0b-74b0-4cfd-8f7a-b503ba99363b',
  interestTypeId: Focus.id,
  name: 'Environment',
}
export const Social: InterestType = {
  id: 'e4de70ac-4e9a-411b-8ebc-2d4e089946a2',
  interestTypeId: Focus.id,
  name: 'Social',
}
export const Economy: InterestType = {
  id: '6ce1549d-22d5-4929-ad7f-395eaeebb5a2',
  interestTypeId: Focus.id,
  name: 'Economy',
}

export const interests = [
   {
    id: 'd9cf08ea-6228-11eb-ae93-0242ac130002',
    interestTypeId: Environment.id,
    name: 'Air',
    selected: false,
   } as Interest,
   {
    id: 'd9cf0a70-6228-11eb-ae93-0242ac130002',
    interestTypeId: Environment.id,
    name: 'Biodiversity Land',
    selected: false,
   } as Interest,
   {
    id: 'd9cf0b24-6228-11eb-ae93-0242ac130002',
    interestTypeId: Social.id,
    name: 'Corruption',
    selected: false,
   } as Interest,
   {
    id: 'd9cf0be2-6228-11eb-ae93-0242ac130002',
    interestTypeId: Social.id,
    name: 'Drinking Water',
    selected: false,
   } as Interest,
   {
    id: 'd9cf1010-6228-11eb-ae93-0242ac130002',
    interestTypeId: Economy.id,
    name: 'Agriculture',
    selected: false,
   } as Interest,
   {
    id: 'd9cf10e2-6228-11eb-ae93-0242ac130002',
    interestTypeId: Economy.id,
    name: 'Consumption',
    selected: false,
   } as Interest,
   {
    id: 'c59196fa-2fba-4cee-b451-8736a185a22e',
    interestTypeId: Approach.id,
    name: 'Arts',
    selected: false,
   } as Interest,
   {
    id: 'd9cefb52-6228-11eb-ae93-0242ac130002',
    interestTypeId: Approach.id,
    name: 'Biomimicry',
    selected: false,
   } as Interest,
   {
    id: 'd9cf01f6-6228-11eb-ae93-0242ac130002',
    name: "#AntiRacism",
    interestTypeId: Tag.id,
    selected: false,
   } as Interest,
   {
    id: 'd9cf00de-6228-11eb-ae93-0242ac130002',
    name: "#BalticSea",
    interestTypeId: Tag.id,
    selected: false,
   } as Interest,
]