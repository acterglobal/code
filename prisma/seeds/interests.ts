import { PrismaClient } from '@prisma/client'

import { Interest, InterestType } from '@generated/type-graphql'

interface interestTypeMap {
  id?: string
  name: string
  types?: interestTypeMap[]
  interests?: string[]
}

const interestTypes: interestTypeMap[] = [
  {
    name: 'Focus',
    types: [
      {
        name: 'Environment',
        interests: [
          'Air',
          'Biodiversity land',
          'Biodiversity water',
          'Clean freshwater',
          'Clean oceans',
          'Climate change',
          'Forest',
          'Soil',
        ],
      },
      {
        name: 'Social',
        interests: [
          'Corruption',
          'Drinking water',
          'Education',
          'Gender Equality',
          'Health',
          'Housing',
          'Hunger',
          'Indigenous people',
          'Inequality',
          'Poverty',
          'Refugees',
          'Urban planning',
          'Violence & Abuse',
        ],
      },
      {
        name: 'Economy',
        interests: [
          'Agriculture',
          'Consumption',
          'Decent work',
          'Economic system',
          'Energy',
          'Food',
          'Production',
          'Transportation',
          'Waste',
        ],
      },
    ],
  },
  {
    name: 'Approach',
    interests: [
      'Collaboration',
      'Conferences',
      'Debate',
      'Demonstrations',
      'Divestment',
      'Education',
      'Innovation',
      'Investment',
      'Knowledge sharing',
      'Lobbyism',
      'Mobilising',
      'Partnerships',
      'Petitions',
      'Policy making',
      'Research',
      'Talks',
      'Technology',
      'Workshops',
      'Write opinion pieces',
      'Youth involvement',
    ],
  },
  {
    name: 'Tags',
    interests: [
      'AntiRacism',
      'BalticSea',
      'BalticSeaYouthPlatform',
      'Banfossilfuels',
      'BlackLivesMatter',
      'COP26',
      'CreativeCircle',
      'DoughnutModel',
      'Dropoliendan',
      'EuropeanGreenDeal',
      'Feminism',
      'GreenFridayAarhus',
      'GreenlightAarhus',
      'GreenNewDeal',
      'Grøngenstart',
      'GrønneAktørerAarhus',
      'Klimaplan',
      'Kommunalvalg2021',
      'MellowDesigns',
      'PostGrowth',
      'ReGeneration2030',
      'SCM',
      'Stopbalticpipeline',
      'UniteTheWorld',
    ],
  },
]

export const seedInterests = async (prisma: PrismaClient): Promise<void[]> => {
  const upsertInterestType = async (
    name: string,
    parent?: interestTypeMap
  ): Promise<InterestType> => {
    const parentId = parent?.id || null
    const type = await prisma.interestType.upsert({
      create: { name, parentInterestTypeId: parentId },
      update: {},
      where: {
        nameUniqueForParentInterestType: {
          name,
          parentInterestTypeId: parentId,
        },
      },
    })
    console.log('Created InterestType: ', type)
    return type
  }

  const upsertInterest = (type: InterestType) => async (
    name: string
  ): Promise<Interest> => {
    const interest = await prisma.interest.upsert({
      create: { name, interestTypeId: type.id },
      update: {},
      where: {
        nameUniqueForInterestType: { name, interestTypeId: type.id },
      },
    })
    console.log('Created Interest: ', interest)
    return interest
  }

  const seedInterestType = (parent?: interestTypeMap) => async (
    type: interestTypeMap
  ) => {
    const interestType = await upsertInterestType(type.name, parent)

    if (type.interests?.length) {
      await Promise.all(type.interests.map(upsertInterest(interestType)))
    }

    if (type.types?.length) {
      await Promise.all(type.types.map(seedInterestType(interestType)))
    }
  }

  // We need to add the root InterestType manually because of how Prisma deals with null values in a unique
  let rootInterestType = await prisma.interestType.findFirst({
    where: { name: 'root' },
  })
  if (!rootInterestType) {
    rootInterestType = await prisma.interestType.create({
      data: { name: 'root' },
    })
  }
  console.log('Root Interest Type created: ', rootInterestType)

  return await Promise.all(
    interestTypes.map(seedInterestType(rootInterestType))
  )
}
