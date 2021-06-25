import { InterestType } from '@acter/schema/types'

export const Interests = {
  data: {
    interestTypes: [
      {
        id: 'f506ca1d-fa04-491f-ad93-b52cd10922ec',
        name: 'root',
        parentInterestTypeId: null,
        Interests: [],
      },
      {
        id: '7798ac34-11de-440d-8096-ff54c98c8e3f',
        name: 'Environment',
        parentInterestTypeId: 'd66610bf-0d40-4e43-9eb7-5596fd7eb7f9',
        Interests: [
          {
            id: 'b24139c9-a3a2-4561-901d-759a089cf914',
            name: 'Air',
            sdgNumber: '',
          },
          {
            id: '6176f48c-4481-40ff-b005-e52a9d273d45',
            name: 'Biodiversity land',
            sdgNumber: '15',
          },
          {
            id: '7c8c3ddf-a396-4e7e-9c02-b75330660dc5',
            name: 'Biodiversity water',
            sdgNumber: '14',
          },
          {
            id: '7236bff3-f9a2-4b85-9f69-f47b09e83276',
            name: 'Clean freshwater',
            sdgNumber: '6',
          },
          {
            id: 'b57d7a38-e5f2-4bea-81ef-60c983466047',
            name: 'Clean oceans',
            sdgNumber: '',
          },
          {
            id: '40686ab9-9a09-4f27-9584-65ee0c30ca6a',
            name: 'Climate change',
            sdgNumber: '13',
          },
          {
            id: '11cd592c-ebef-4db0-8f75-1f50fd5770ab',
            name: 'Forest',
            sdgNumber: '',
          },
          {
            id: 'fa77d292-2d88-479d-8344-f226ec38871b',
            name: 'Soil',
            sdgNumber: '',
          },
        ],
      },
      {
        id: 'd66610bf-0d40-4e43-9eb7-5596fd7eb7f9',
        name: 'Focus',
        parentInterestTypeId: 'f506ca1d-fa04-491f-ad93-b52cd10922ec',
        Interests: [
          {
            id: '58c3caf9-d811-4654-a4d3-8931aa8d0cd8',
            name: 'Partnerships',
            sdgNumber: '17',
          },
        ],
      },
      {
        id: '3aed3613-cafc-4ba4-b038-a60e64b3313d',
        name: 'Approach',
        parentInterestTypeId: 'f506ca1d-fa04-491f-ad93-b52cd10922ec',
        Interests: [
          {
            id: '58e1635a-83ad-4456-b6bf-8a28bd92e87c',
            name: 'Collaboration',
            sdgNumber: '',
          },
          {
            id: 'cd29ccc1-aa65-416e-998b-76266618dc3d',
            name: 'Conferences',
            sdgNumber: '',
          },
          {
            id: 'b7f2ef39-ef43-44ff-ac82-93b4d4f06714',
            name: 'Debate',
            sdgNumber: '',
          },
          {
            id: '279f04ed-c58c-498c-b018-68b142ea1b9e',
            name: 'Demonstrations',
            sdgNumber: '',
          },
          {
            id: '478f7bfc-2bdd-4326-81e0-37c34fc5b4b9',
            name: 'Divestment',
            sdgNumber: '',
          },
          {
            id: '67ce91f0-92e3-43a3-9909-79283bba27f4',
            name: 'Education',
            sdgNumber: '',
          },
          {
            id: '18b3c5ec-1791-46ca-b9ac-8874640869f9',
            name: 'Innovation',
            sdgNumber: '9',
          },
          {
            id: '1a5cb269-17d2-4ea5-8d2c-eee452719bd3',
            name: 'Investment',
            sdgNumber: '',
          },
          {
            id: 'cd4f9b86-13c9-4af5-a8df-10ef0286a8c8',
            name: 'Knowledge sharing',
            sdgNumber: '',
          },
          {
            id: '808d768c-19c0-4b8c-b6d1-d3c45a650cbe',
            name: 'Lobbyism',
            sdgNumber: '',
          },
          {
            id: '147dc5b3-90d4-4423-be44-fbd853b576f6',
            name: 'Mobilising',
            sdgNumber: '',
          },
          {
            id: 'a9cddd64-2150-4cf8-9f59-82e75ccdccde',
            name: 'Partnerships',
            sdgNumber: '',
          },
          {
            id: '3a6c7b60-f412-495b-b91a-74d17a117372',
            name: 'Petitions',
            sdgNumber: '',
          },
          {
            id: '66944a35-7e08-42cb-9d55-56c23f3681ea',
            name: 'Policy making',
            sdgNumber: '',
          },
          {
            id: 'e755a0ea-0df2-4e7d-8046-2029e63f805f',
            name: 'Research',
            sdgNumber: '',
          },
          {
            id: '5a12a9f4-a17f-42d8-8382-6ec49431af18',
            name: 'Talks',
            sdgNumber: '',
          },
          {
            id: '3f8d5acd-9acc-4620-b0ad-54e05813401c',
            name: 'Technology',
            sdgNumber: '',
          },
          {
            id: '08cde8d1-d494-42ef-be9f-7a162455e13b',
            name: 'Workshops',
            sdgNumber: '',
          },
          {
            id: '50e7ea15-a1cd-401d-b4a0-ebb450ee87b1',
            name: 'Write opinion pieces',
            sdgNumber: '',
          },
          {
            id: 'effba93e-797f-43f8-bdd8-da9d5dda5460',
            name: 'Youth involvement',
            sdgNumber: '',
          },
        ],
      },
      {
        id: '8caf1c62-233e-414c-bbdc-36d88e48b4e4',
        name: 'Social',
        parentInterestTypeId: 'd66610bf-0d40-4e43-9eb7-5596fd7eb7f9',
        Interests: [
          {
            id: '4963402a-32ba-48a9-b936-c20b586dbd10',
            name: 'Corruption',
            sdgNumber: '',
          },
          {
            id: 'f5b4e411-1c4c-4d1c-b390-86c7c5c0e91a',
            name: 'Drinking water',
            sdgNumber: '',
          },
          {
            id: 'c0f00f9f-76cd-4239-b834-676fadf83283',
            name: 'Education',
            sdgNumber: '4',
          },
          {
            id: 'ce79adcf-cc8d-4201-867f-ac388eb6bdfb',
            name: 'Gender Equality',
            sdgNumber: '5',
          },
          {
            id: 'cbb76b13-2ecb-47e5-8d4b-3c0efa786be1',
            name: 'Health',
            sdgNumber: '3',
          },
          {
            id: 'ccc49a3a-f198-4799-9f4a-bd4ae06f7c4e',
            name: 'Housing',
            sdgNumber: '',
          },
          {
            id: '6967d03a-dd45-4295-adab-e1693d88a0f6',
            name: 'Hunger',
            sdgNumber: '2',
          },
          {
            id: '6fc7766e-7333-4b65-9c3f-d8a6ddc82480',
            name: 'Indigenous people',
            sdgNumber: '',
          },
          {
            id: '894a646d-faed-43db-870e-723868231155',
            name: 'Inequality',
            sdgNumber: '10',
          },
          {
            id: '38870610-b32c-4403-862a-6305b42c9708',
            name: 'Poverty',
            sdgNumber: '1',
          },
          {
            id: '68d50ef1-3554-46f2-bf32-bec2c81c3f8f',
            name: 'Refugees',
            sdgNumber: '',
          },
          {
            id: 'fa61da7a-a75b-4b74-810d-08477a7eff24',
            name: 'Urban planning',
            sdgNumber: '',
          },
          {
            id: '984b41cb-ce4a-4177-bcce-4e9b59b04927',
            name: 'Violence & Abuse',
            sdgNumber: '',
          },
        ],
      },
      {
        id: '7b679a72-221c-4735-8781-8b25b0b7c5f9',
        name: 'Economy',
        parentInterestTypeId: 'd66610bf-0d40-4e43-9eb7-5596fd7eb7f9',
        Interests: [
          {
            id: '75ed58b2-e1c6-403e-a2a1-e9b614500ca0',
            name: 'Agriculture',
            sdgNumber: '',
          },
          {
            id: '3668568d-a089-40d0-804b-b00a1bc00980',
            name: 'Consumption',
            sdgNumber: '12',
          },
          {
            id: '1c341461-5dbc-49af-aeb8-c9b2af0b2247',
            name: 'Decent work',
            sdgNumber: '8',
          },
          {
            id: 'dad4c45e-22d7-4e59-b4ac-ecd30bdd83a6',
            name: 'Economic system',
            sdgNumber: '',
          },
          {
            id: 'aa91b844-cedf-458c-a9ce-c228ecb7c194',
            name: 'Energy',
            sdgNumber: '7',
          },
          {
            id: '701660f1-c478-4556-9cd7-792ec7a3ac51',
            name: 'Food',
            sdgNumber: '',
          },
          {
            id: '52fb3aab-1532-490d-8a4c-3fffba32c6fb',
            name: 'Production',
            sdgNumber: '',
          },
          {
            id: '32baa6df-fb3d-45f8-beed-0d3493bfe8ba',
            name: 'Transportation',
            sdgNumber: '',
          },
          {
            id: 'a6174f07-81c0-404a-818b-7ede42489044',
            name: 'Waste',
            sdgNumber: '',
          },
        ],
      },
      {
        id: '812c1255-8d91-496c-9763-65efd40669c2',
        name: 'Tags',
        parentInterestTypeId: 'f506ca1d-fa04-491f-ad93-b52cd10922ec',
        Interests: [
          {
            id: '438e9c3b-a547-465a-bf41-105ddafe3eb6',
            name: 'AntiRacism',
            sdgNumber: '',
          },
          {
            id: '1badcfc4-f701-4705-83c3-433145c9b40f',
            name: 'BalticSea',
            sdgNumber: '',
          },
          {
            id: '411a39d6-d6ee-4dcf-8794-cf265d56c608',
            name: 'BalticSeaYouthPlatform',
            sdgNumber: '',
          },
          {
            id: '04eba976-f03a-497f-ac66-2b8dff8936d2',
            name: 'Banfossilfuels',
            sdgNumber: '',
          },
          {
            id: '733c1cbf-696f-410c-b65f-b0476b9f3a1b',
            name: 'BlackLivesMatter',
            sdgNumber: '',
          },
          {
            id: '1070bbb9-ab16-4f0a-8ec5-2fbc75271c4c',
            name: 'COP26',
            sdgNumber: '',
          },
          {
            id: '86e58a8f-e816-42f1-8b37-e09ca424ec79',
            name: 'CreativeCircle',
            sdgNumber: '',
          },
          {
            id: 'afbaa696-f6ef-432d-93cc-375766d45c90',
            name: 'DoughnutModel',
            sdgNumber: '',
          },
          {
            id: '46f726ec-7fd6-4bb6-9d70-61a773da7ffd',
            name: 'Dropoliendan',
            sdgNumber: '',
          },
          {
            id: 'afb95aa1-d516-435b-834b-0b61f39d66fd',
            name: 'EuropeanGreenDeal',
            sdgNumber: '',
          },
          {
            id: '5ca57076-f2de-4916-9a69-d56cedbe0f13',
            name: 'Feminism',
            sdgNumber: '',
          },
          {
            id: '85d1a936-2671-4e74-8c84-efb9ae2473b5',
            name: 'GreenFridayAarhus',
            sdgNumber: '',
          },
          {
            id: 'c67a6993-f78a-420e-aed2-27359b945db2',
            name: 'GreenlightAarhus',
            sdgNumber: '',
          },
          {
            id: 'f8e43b04-14f9-4ea7-b023-8db0997e1efc',
            name: 'GreenNewDeal',
            sdgNumber: '',
          },
          {
            id: 'e064e11d-6a99-46d5-8f3d-466228401103',
            name: 'Grøngenstart',
            sdgNumber: '',
          },
          {
            id: '38493b38-8dba-42ce-99c3-a51ffb5992f3',
            name: 'GrønneAktørerAarhus',
            sdgNumber: '',
          },
          {
            id: 'f66f1b3d-d712-4dd0-94a9-f991eeb3c4b1',
            name: 'Klimaplan',
            sdgNumber: '',
          },
          {
            id: 'e5f758b7-915e-4f78-bea9-20bb7e06e8de',
            name: 'Kommunalvalg2021',
            sdgNumber: '',
          },
          {
            id: '0538cb4a-e530-4647-a2db-e125932f1c58',
            name: 'MellowDesigns',
            sdgNumber: '',
          },
          {
            id: '08d4159b-e186-4611-a528-a6f51343b17c',
            name: 'PostGrowth',
            sdgNumber: '',
          },
          {
            id: 'e7005dea-91ff-40d7-b1d8-8dc452c0f6b6',
            name: 'ReGeneration2030',
            sdgNumber: '',
          },
          {
            id: '770c9800-5515-42cc-9659-7084adb8b6ac',
            name: 'SCM',
            sdgNumber: '',
          },
          {
            id: 'b4288935-b793-45f9-8a51-e299690b5ac5',
            name: 'Stopbalticpipeline',
            sdgNumber: '',
          },
          {
            id: '71a0d132-5ec6-4207-ac15-01f6d45f2565',
            name: 'UniteTheWorld',
            sdgNumber: '',
          },
        ],
      },
    ] as InterestType[],
  },
}
