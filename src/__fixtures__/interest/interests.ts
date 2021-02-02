export const Interests = {
  data: {
    interestTypes: [
      {
        id: 'a96a445a-b50a-4aa2-8559-9add91c7bf5c',
        name: 'root',
        parentInterestTypeId: null,
        Interests: [],
        __typename: 'InterestType',
      },
      {
        id: '9c7ebca5-6359-43de-913a-6bd9107fdf54',
        name: 'Focus',
        parentInterestTypeId: 'a96a445a-b50a-4aa2-8559-9add91c7bf5c',
        Interests: [],
        __typename: 'InterestType',
      },
      {
        id: '5c45bf26-01a2-4cf5-b6b0-9ef73aec8636',
        name: 'Approach',
        parentInterestTypeId: 'a96a445a-b50a-4aa2-8559-9add91c7bf5c',
        Interests: [
          {
            id: '4dd8fcf6-9f8c-45e4-aeb6-a57611959d38',
            name: 'Debate',
            __typename: 'Interest',
          },
          {
            id: '3b13fbfa-1aa5-4e4f-934a-c36ac67c200d',
            name: 'Demonstrations',
            __typename: 'Interest',
          },
          {
            id: 'a2901213-c29d-4701-8a3c-8e6d149b8bfd',
            name: 'Education',
            __typename: 'Interest',
          },
          {
            id: '649ea91c-5f64-4f8a-9d16-30913d512f4c',
            name: 'Innovation',
            __typename: 'Interest',
          },
          {
            id: '8f75941b-aaaf-4ef3-b3ee-511cee53f9e0',
            name: 'Collaboration',
            __typename: 'Interest',
          },
          {
            id: '35815c82-7df3-4344-b70a-865213598079',
            name: 'Knowledge sharing',
            __typename: 'Interest',
          },
          {
            id: 'bb3eb421-6556-4ea3-b595-369cad9d950e',
            name: 'Investment',
            __typename: 'Interest',
          },
          {
            id: 'ef3baef0-c182-46d4-8058-b7767767989c',
            name: 'Lobbyism',
            __typename: 'Interest',
          },
          {
            id: '223f1775-c84a-41a9-ba15-2175217adf5f',
            name: 'Mobilising',
            __typename: 'Interest',
          },
          {
            id: 'cd2121b4-f93a-4272-a680-9f130946bb90',
            name: 'Policy making',
            __typename: 'Interest',
          },
          {
            id: 'c3ef5f37-d6c5-46ce-817a-7b0ffcdfcb08',
            name: 'Divestment',
            __typename: 'Interest',
          },
          {
            id: '93e3d273-d6d6-4306-bd50-82e74ca31ccc',
            name: 'Partnerships',
            __typename: 'Interest',
          },
          {
            id: '2313caa0-f124-4b2e-b45b-1d236f1578e7',
            name: 'Research',
            __typename: 'Interest',
          },
          {
            id: '1abfee15-9cac-4a69-9b00-92790bd8e47b',
            name: 'Petitions',
            __typename: 'Interest',
          },
          {
            id: '92eadbee-873c-4c13-9d12-9aa0043ec55d',
            name: 'Workshops',
            __typename: 'Interest',
          },
          {
            id: '9a2d7bb5-15e7-4a9d-b5d9-5a77b1bb5c91',
            name: 'Write opinion pieces',
            __typename: 'Interest',
          },
          {
            id: 'fe76debd-cd1b-42c7-97c2-b912a86c031e',
            name: 'Youth involvement',
            __typename: 'Interest',
          },
          {
            id: 'a212860f-6a1b-4b47-b16e-e623640f66cd',
            name: 'Technology',
            __typename: 'Interest',
          },
          {
            id: 'edd374fa-6158-432a-8d17-3841f581a5bc',
            name: 'Talks',
            __typename: 'Interest',
          },
          {
            id: '371f88a7-6624-4a87-94b2-73b7ff1dd801',
            name: 'Conferences',
            __typename: 'Interest',
          },
        ],
        __typename: 'InterestType',
      },
      {
        id: '58bcc446-ead1-4c7f-80e6-8f19c8eddb42',
        name: 'Tags',
        parentInterestTypeId: 'a96a445a-b50a-4aa2-8559-9add91c7bf5c',
        Interests: [
          {
            id: '0e2c268c-a988-4294-8caa-8b0186e677c9',
            name: 'GreenNewDeal',
            __typename: 'Interest',
          },
          {
            id: 'e9661112-b2d1-4025-b5fc-093417a9df23',
            name: 'BalticSeaYouthPlatform',
            __typename: 'Interest',
          },
          {
            id: '640b0e0a-4a6b-49ab-8303-bb661dfefc81',
            name: 'Dropoliendan',
            __typename: 'Interest',
          },
          {
            id: 'a6634244-756d-427d-a35b-8562e788c285',
            name: 'DoughnutModel',
            __typename: 'Interest',
          },
          {
            id: '2ad5160c-8cdb-4b5d-ab17-2ef20bed84cd',
            name: 'Banfossilfuels',
            __typename: 'Interest',
          },
          {
            id: '5ce5417b-50fa-43b9-9399-6b6ffb50dc7f',
            name: 'EuropeanGreenDeal',
            __typename: 'Interest',
          },
          {
            id: 'c0ab42e0-063d-47b7-ae15-adc43f1f4113',
            name: 'GreenFridayAarhus',
            __typename: 'Interest',
          },
          {
            id: '38f719b9-f605-418d-9fcb-af79e4cff89c',
            name: 'Feminism',
            __typename: 'Interest',
          },
          {
            id: '434aa279-9093-4d9e-af32-05fbcf584dd1',
            name: 'GreenlightAarhus',
            __typename: 'Interest',
          },
          {
            id: '26614146-de4d-47cc-9def-79fb62d4566d',
            name: 'Kommunalvalg2021',
            __typename: 'Interest',
          },
          {
            id: '410cc434-52b9-4130-91f3-9a3d82469816',
            name: 'GrønneAktørerAarhus',
            __typename: 'Interest',
          },
          {
            id: '1328191a-2d9d-4904-8f3c-03cf5e4484d3',
            name: 'Klimaplan',
            __typename: 'Interest',
          },
          {
            id: '7572c4b3-c713-42d7-b2a7-a47a58c5d964',
            name: 'MellowDesigns',
            __typename: 'Interest',
          },
          {
            id: '273addea-9f9e-41b0-8f43-f8f33e1fd46f',
            name: 'AntiRacism',
            __typename: 'Interest',
          },
          {
            id: '3d3887df-629a-46d6-8370-3219eeb8ffbe',
            name: 'PostGrowth',
            __typename: 'Interest',
          },
          {
            id: 'a998bcd8-e635-45f8-aafc-c56d4acf96a1',
            name: 'BalticSea',
            __typename: 'Interest',
          },
          {
            id: 'e49a9f47-5723-4509-a387-5c02d10a1ad6',
            name: 'COP26',
            __typename: 'Interest',
          },
          {
            id: '237e0780-1727-4553-9d60-3e0563629b79',
            name: 'SCM',
            __typename: 'Interest',
          },
          {
            id: '78fe034b-e81a-463b-93fb-7c443bb9755e',
            name: 'ReGeneration2030',
            __typename: 'Interest',
          },
          {
            id: '350e0fd3-1a99-4868-a990-0eb658a46a38',
            name: 'BlackLivesMatter',
            __typename: 'Interest',
          },
          {
            id: '66620217-21fd-41a9-99ea-74e7dcd12d0b',
            name: 'CreativeCircle',
            __typename: 'Interest',
          },
          {
            id: 'df71cbcc-6898-4b42-9f72-69e87fc1ca70',
            name: 'UniteTheWorld',
            __typename: 'Interest',
          },
          {
            id: 'bc5fbb0a-e048-48d8-9473-515f3954e7a8',
            name: 'Stopbalticpipeline',
            __typename: 'Interest',
          },
          {
            id: '7ca86848-c65c-4d34-a35e-f2f60adbb684',
            name: 'Grøngenstart',
            __typename: 'Interest',
          },
        ],
        __typename: 'InterestType',
      },
      {
        id: '6d1e0337-cca1-43dc-84a9-4f4c2be21e5c',
        name: 'Economy',
        parentInterestTypeId: '9c7ebca5-6359-43de-913a-6bd9107fdf54',
        Interests: [
          {
            id: '381c6a10-d18a-4473-95c4-4d7639474a99',
            name: 'Transportation',
            __typename: 'Interest',
          },
          {
            id: '72527c98-3c62-4670-b381-0e64f5d2723d',
            name: 'Consumption',
            __typename: 'Interest',
          },
          {
            id: 'da486000-06ba-4026-9252-435c274ac7b9',
            name: 'Food',
            __typename: 'Interest',
          },
          {
            id: '18dc87c3-f9c8-4312-ac7a-487572b14162',
            name: 'Production',
            __typename: 'Interest',
          },
          {
            id: 'e28e7e0d-743f-4106-a7f7-b45f082ccb2c',
            name: 'Economic system',
            __typename: 'Interest',
          },
          {
            id: 'a97a910b-9b51-4a5a-9758-c20466745a15',
            name: 'Energy',
            __typename: 'Interest',
          },
          {
            id: '67a6b6f1-8a7e-4302-a817-855d293ca8b4',
            name: 'Decent work',
            __typename: 'Interest',
          },
          {
            id: '4d2f352b-3a32-4ce8-b2fe-010ae83c7828',
            name: 'Agriculture',
            __typename: 'Interest',
          },
          {
            id: 'ff4dfffc-11f5-4105-a8a8-6ae2f89eb76b',
            name: 'Waste',
            __typename: 'Interest',
          },
        ],
        __typename: 'InterestType',
      },
      {
        id: '55f7ab0b-e0ce-4e14-a5fc-a322d8fbaf5b',
        name: 'Environment',
        parentInterestTypeId: '9c7ebca5-6359-43de-913a-6bd9107fdf54',
        Interests: [
          {
            id: '8306d902-51b6-47e2-9c9e-3e4fc870fb19',
            name: 'Air',
            __typename: 'Interest',
          },
          {
            id: 'f298fcbc-5fb2-4993-aef5-09505b0a8d33',
            name: 'Biodiversity water',
            __typename: 'Interest',
          },
          {
            id: 'e4720c6b-209e-46e2-9db1-1629d787e285',
            name: 'Clean freshwater',
            __typename: 'Interest',
          },
          {
            id: '35a70cc2-b42b-49b9-90a8-d1329f8e6e57',
            name: 'Forest',
            __typename: 'Interest',
          },
          {
            id: 'c4368b13-508a-48af-a642-c64a8d836cd7',
            name: 'Clean oceans',
            __typename: 'Interest',
          },
          {
            id: 'c5715944-44b8-40a5-9f12-669b4905324a',
            name: 'Biodiversity land',
            __typename: 'Interest',
          },
          {
            id: '81225eff-34ae-417b-b8b6-799d3b765767',
            name: 'Soil',
            __typename: 'Interest',
          },
          {
            id: '69c94fa5-c62c-4ad9-af73-5dbdeca32201',
            name: 'Climate change',
            __typename: 'Interest',
          },
        ],
        __typename: 'InterestType',
      },
      {
        id: 'c7a2c99e-1ed4-405c-85d9-4a8b7256f595',
        name: 'Social',
        parentInterestTypeId: '9c7ebca5-6359-43de-913a-6bd9107fdf54',
        Interests: [
          {
            id: '5b5b2365-3387-4202-ac72-b6e6229e306d',
            name: 'Gender Equality',
            __typename: 'Interest',
          },
          {
            id: 'b4abfb01-5ac7-43f1-8a4d-09d430398fbe',
            name: 'Violence & Abuse',
            __typename: 'Interest',
          },
          {
            id: 'a641a90a-a9d9-48b2-abee-9ef73728cbe6',
            name: 'Corruption',
            __typename: 'Interest',
          },
          {
            id: '19369dcf-2192-48fa-827a-de79d9e06669',
            name: 'Housing',
            __typename: 'Interest',
          },
          {
            id: '03cd6491-c100-4bd4-b543-8c585d8f6560',
            name: 'Refugees',
            __typename: 'Interest',
          },
          {
            id: '6454b0dc-9b52-42dd-9e47-ee9b5e96a3c8',
            name: 'Health',
            __typename: 'Interest',
          },
          {
            id: '63ca7c98-a7df-4397-ac2b-e9b3cb99d9c8',
            name: 'Education',
            __typename: 'Interest',
          },
          {
            id: '8d1591b3-e024-4933-8428-3d508db3aacd',
            name: 'Urban planning',
            __typename: 'Interest',
          },
          {
            id: 'b4d294b1-b08d-457f-9800-ceb777534101',
            name: 'Drinking water',
            __typename: 'Interest',
          },
          {
            id: 'f039ece7-4fb4-4be0-b135-183d00d88e77',
            name: 'Hunger',
            __typename: 'Interest',
          },
          {
            id: 'da9e3c70-e765-4f3b-8719-cbf54136d6da',
            name: 'Poverty',
            __typename: 'Interest',
          },
          {
            id: '9f0cc43a-5375-47fd-807e-98f117ccdb26',
            name: 'Indigenous people',
            __typename: 'Interest',
          },
          {
            id: '80e46702-8de5-4024-84b5-25fcdf1a6e93',
            name: 'Inequality',
            __typename: 'Interest',
          },
        ],
        __typename: 'InterestType',
      },
    ],
  },
}
