import { ExampleUser } from 'src/__fixtures__'

export const ExampleActivity = {
  id: '9a64149c-5641-4841-96b1-1b2ec85f88aa',
  acterId: '9a64149c-5641-4841-96b1-1b2ec85f99bb',
  title: 'Green eco talk',
  description:
    'Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut ratione doloribus distinctio sequi accusantium amet voluptate quo, veritatis deserunt. Doloremque quis harum eos dolor laborum, eaque voluptates beatae ipsa quae.    Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut ratione doloribus distinctio sequi accusantium amet voluptate quo, veritatis deserunt. Doloremque quis harum eos dolor laborum, eaque voluptates beatae ipsa quae.',
  startDate: '19 MAR. 17.00',
  endDate: '20 MAR. 18.00',
  //   location: 'online',
  location: 'Fiskerivej 2H, 8000 Aarhus',
  interests: [
    {
      Interest: {
        id: '01eb2484-9b0a-45a4-95d8-d9ed6eb1ae04',
        name: 'ReGeneration2030',
        interestType: {
          id: 'f71e86ac-3a8a-41a5-b1f5-383557c5ecd3',
          name: 'Tags',
          parentInterestTypeId: 'a7d783fa-53e8-40ed-b335-22e4fe7105ef',
          __typename: 'InterestType',
        },
        __typename: 'Interest',
      },
      __typename: 'ActerInterest',
    },
    {
      Interest: {
        id: '3dc41221-e8a0-4660-b323-a26dd5dfaa6a',
        name: 'Feminism',
        interestType: {
          id: 'f71e86ac-3a8a-41a5-b1f5-383557c5ecd3',
          name: 'Tags',
          parentInterestTypeId: 'a7d783fa-53e8-40ed-b335-22e4fe7105ef',
          __typename: 'InterestType',
        },
        __typename: 'Interest',
      },
      __typename: 'ActerInterest',
    },
    {
      Interest: {
        id: '30a146a0-25cc-4099-af08-cec29d03275a',
        name: 'Dropoliendan',
        interestType: {
          id: 'f71e86ac-3a8a-41a5-b1f5-383557c5ecd3',
          name: 'Tags',
          parentInterestTypeId: 'a7d783fa-53e8-40ed-b335-22e4fe7105ef',
          __typename: 'InterestType',
        },
        __typename: 'Interest',
      },
      __typename: 'ActerInterest',
    },
    {
      Interest: {
        id: '836fa5e5-ecd5-42d4-90f3-e47e9b916078',
        name: 'BlackLivesMatter',
        interestType: {
          id: 'f71e86ac-3a8a-41a5-b1f5-383557c5ecd3',
          name: 'Tags',
          parentInterestTypeId: 'a7d783fa-53e8-40ed-b335-22e4fe7105ef',
          __typename: 'InterestType',
        },
        __typename: 'Interest',
      },
      __typename: 'ActerInterest',
    },
    {
      Interest: {
        id: 'ff2fe80f-c3fe-4ff5-a864-6b7e1debfe8e',
        name: 'GreenFridayAarhus',
        interestType: {
          id: 'f71e86ac-3a8a-41a5-b1f5-383557c5ecd3',
          name: 'Tags',
          parentInterestTypeId: 'a7d783fa-53e8-40ed-b335-22e4fe7105ef',
          __typename: 'InterestType',
        },
        __typename: 'Interest',
      },
      __typename: 'ActerInterest',
    },
    {
      Interest: {
        id: '73cbd6d8-9c41-4869-998b-b445185f2c8f',
        name: 'Drinking water',
        interestType: {
          id: '70f47ddb-0461-4736-95cc-ad7649017f4c',
          name: 'Social',
          parentInterestTypeId: 'd0a1a481-deb0-406a-95c0-3ad9e599a81b',
          __typename: 'InterestType',
        },
        __typename: 'Interest',
      },
      __typename: 'ActerInterest',
    },
    {
      Interest: {
        id: '6c1b3aca-c7c0-4680-864d-e01fe1048f0b',
        name: 'Indigenous people',
        interestType: {
          id: '70f47ddb-0461-4736-95cc-ad7649017f4c',
          name: 'Social',
          parentInterestTypeId: 'd0a1a481-deb0-406a-95c0-3ad9e599a81b',
          __typename: 'InterestType',
        },
        __typename: 'Interest',
      },
      __typename: 'ActerInterest',
    },
    {
      Interest: {
        id: 'e74ef6c3-6fb0-4a86-88f0-9ce9ae21742e',
        name: 'Urban planning',
        interestType: {
          id: '70f47ddb-0461-4736-95cc-ad7649017f4c',
          name: 'Social',
          parentInterestTypeId: 'd0a1a481-deb0-406a-95c0-3ad9e599a81b',
          __typename: 'InterestType',
        },
        __typename: 'Interest',
      },
      __typename: 'ActerInterest',
    },
    {
      Interest: {
        id: '7d13cda1-5371-400d-9f6f-a218bc423831',
        name: 'Poverty',
        interestType: {
          id: '70f47ddb-0461-4736-95cc-ad7649017f4c',
          name: 'Social',
          parentInterestTypeId: 'd0a1a481-deb0-406a-95c0-3ad9e599a81b',
          __typename: 'InterestType',
        },
        __typename: 'Interest',
      },
      __typename: 'ActerInterest',
    },
    {
      Interest: {
        id: 'eaa0710b-ea98-4a23-8484-a45412bbe525',
        name: 'Health',
        interestType: {
          id: '70f47ddb-0461-4736-95cc-ad7649017f4c',
          name: 'Social',
          parentInterestTypeId: 'd0a1a481-deb0-406a-95c0-3ad9e599a81b',
          __typename: 'InterestType',
        },
        __typename: 'Interest',
      },
      __typename: 'ActerInterest',
    },
    {
      Interest: {
        id: '5ad127db-6172-40cd-9e62-f53eff273799',
        name: 'Petitions',
        interestType: {
          id: '8989e824-5b2e-426a-93ce-f13156b5522a',
          name: 'Approach',
          parentInterestTypeId: 'a7d783fa-53e8-40ed-b335-22e4fe7105ef',
          __typename: 'InterestType',
        },
        __typename: 'Interest',
      },
      __typename: 'ActerInterest',
    },
    {
      Interest: {
        id: 'cbd5bc39-19b4-4373-8f30-59c627142bff',
        name: 'Write opinion pieces',
        interestType: {
          id: '8989e824-5b2e-426a-93ce-f13156b5522a',
          name: 'Approach',
          parentInterestTypeId: 'a7d783fa-53e8-40ed-b335-22e4fe7105ef',
          __typename: 'InterestType',
        },
        __typename: 'Interest',
      },
      __typename: 'ActerInterest',
    },
    {
      Interest: {
        id: 'ea5cefe8-9d0c-497e-903d-e5723fb3f107',
        name: 'Youth involvement',
        interestType: {
          id: '8989e824-5b2e-426a-93ce-f13156b5522a',
          name: 'Approach',
          parentInterestTypeId: 'a7d783fa-53e8-40ed-b335-22e4fe7105ef',
          __typename: 'InterestType',
        },
        __typename: 'Interest',
      },
      __typename: 'ActerInterest',
    },
    {
      Interest: {
        id: 'f230304f-b8f2-4661-b01d-ec1e5d992c30',
        name: 'Knowledge sharing',
        interestType: {
          id: '8989e824-5b2e-426a-93ce-f13156b5522a',
          name: 'Approach',
          parentInterestTypeId: 'a7d783fa-53e8-40ed-b335-22e4fe7105ef',
          __typename: 'InterestType',
        },
        __typename: 'Interest',
      },
      __typename: 'ActerInterest',
    },
    {
      Interest: {
        id: 'b8bbcf08-0d27-4352-86fc-95cad525e6b0',
        name: 'Workshops',
        interestType: {
          id: '8989e824-5b2e-426a-93ce-f13156b5522a',
          name: 'Approach',
          parentInterestTypeId: 'a7d783fa-53e8-40ed-b335-22e4fe7105ef',
          __typename: 'InterestType',
        },
        __typename: 'Interest',
      },
      __typename: 'ActerInterest',
    },
  ],
  people: [
    // {
    //   id: '9a64149c-5641-4841-96b1-1b2ec85f87ba',
    //   acterTypeId: UserActerType.id,
    //   ActerType: UserActerType,
    //   name: 'Malik Shaik',
    //   location: 'Aarhus Denmark',
    //   slug: 'my-organisation',
    //   description: `Lorem ipsum dolor sit amet consectetur adipisicing
    //   elit. Quam laudantium quas voluptates assumenda deserunt, sequi
    //   alias veritatis vitae eum culpa amet delectus eveniet tempore
    //   quibusdam repellat ut? Corrupti, consequuntur ipsam`,
    //   url: 'company url',
    //   avatarUrl: `https://res.cloudinary.com/dfglnmgmx/image/upload/v1612778108/acter/acter-logo-144.png`,
    //   bannerUrl: `https://res.cloudinary.com/dfglnmgmx/image/upload/v1612781078/acter/top-banner.png`,
    //   createdAt: new Date(),
    //   updatedAt: new Date(),
    //   createdByUserId: ExampleUser.id,
    //   autoApproveFollowers: true,
    // },
  ],
  organisations: [],
  image: 'https://acter.ams3.cdn.digitaloceanspaces.com/assets/tree.png',
  createdAt: new Date(),
  updatedAt: new Date(),
  createdByUserId: ExampleUser.id,
}
