import { PrismaClient } from '@prisma/client'

import { Interest, InterestType } from '@schema'

interface interestMap {
  name: string
  description: string
  sdgNumber: string
}
interface interestTypeMap {
  id?: string
  name: string
  sortOrder?: number
  types?: interestTypeMap[]
  interests?: interestMap[]
}

const interestTypes: interestTypeMap[] = [
  {
    name: 'Focus',
    sortOrder: 1,
    types: [
      {
        name: 'Environment',
        sortOrder: 1,
        interests: [
          { name: 'Air', description: '', sdgNumber: '' },
          { name: 'Biodiversity land', description: '', sdgNumber: '15' },
          { name: 'Biodiversity water', description: '', sdgNumber: '14' },
          { name: 'Clean freshwater', description: '', sdgNumber: '6' },
          { name: 'Clean oceans', description: '', sdgNumber: '' },
          { name: 'Climate change', description: '', sdgNumber: '13' },
          { name: 'Forest', description: '', sdgNumber: '' },
          { name: 'Soil', description: '', sdgNumber: '' },
        ],
      },
      {
        name: 'Social',
        sortOrder: 2,
        interests: [
          { name: 'Corruption', description: '', sdgNumber: '' },
          { name: 'Drinking water', description: '', sdgNumber: '' },
          { name: 'Education', description: '', sdgNumber: '4' },
          { name: 'Gender Equality', description: '', sdgNumber: '5' },
          { name: 'Health', description: '', sdgNumber: '3' },
          { name: 'Housing', description: '', sdgNumber: '' },
          { name: 'Hunger', description: '', sdgNumber: '2' },
          { name: 'Indigenous people', description: '', sdgNumber: '' },
          { name: 'Inequality', description: '', sdgNumber: '10' },
          { name: 'Poverty', description: '', sdgNumber: '1' },
          { name: 'Refugees', description: '', sdgNumber: '' },
          { name: 'Urban planning', description: '', sdgNumber: '' },
          { name: 'Violence & Abuse', description: '', sdgNumber: '' },
        ],
      },
      {
        name: 'Economy',
        sortOrder: 3,
        interests: [
          { name: 'Agriculture', description: '', sdgNumber: '' },
          { name: 'Consumption', description: '', sdgNumber: '12' },
          { name: 'Decent work', description: '', sdgNumber: '8' },
          { name: 'Economic system', description: '', sdgNumber: '' },
          { name: 'Energy', description: '', sdgNumber: '7' },
          { name: 'Food', description: '', sdgNumber: '' },
          { name: 'Production', description: '', sdgNumber: '' },
          { name: 'Transportation', description: '', sdgNumber: '' },
          { name: 'Waste', description: '', sdgNumber: '' },
        ],
      },
    ],
    interests: [{ name: 'Partnerships', description: '', sdgNumber: '17' }],
  },
  {
    name: 'Approach',
    sortOrder: 2,
    interests: [
      { name: 'Collaboration', description: '', sdgNumber: '' },
      { name: 'Conferences', description: '', sdgNumber: '' },
      { name: 'Debate', description: '', sdgNumber: '' },
      { name: 'Demonstrations', description: '', sdgNumber: '' },
      { name: 'Divestment', description: '', sdgNumber: '' },
      { name: 'Education', description: '', sdgNumber: '' },
      { name: 'Innovation', description: '', sdgNumber: '9' },
      { name: 'Investment', description: '', sdgNumber: '' },
      { name: 'Knowledge sharing', description: '', sdgNumber: '' },
      { name: 'Lobbyism', description: '', sdgNumber: '' },
      { name: 'Mobilising', description: '', sdgNumber: '' },
      { name: 'Partnerships', description: '', sdgNumber: '' },
      { name: 'Petitions', description: '', sdgNumber: '' },
      { name: 'Policy making', description: '', sdgNumber: '' },
      { name: 'Research', description: '', sdgNumber: '' },
      { name: 'Talks', description: '', sdgNumber: '' },
      { name: 'Technology', description: '', sdgNumber: '' },
      { name: 'Workshops', description: '', sdgNumber: '' },
      { name: 'Write opinion pieces', description: '', sdgNumber: '' },
      { name: 'Youth involvement', description: '', sdgNumber: '' },
    ],
  },
  {
    name: 'Tags',
    sortOrder: 3,
    interests: [
      { name: 'AntiRacism', description: '', sdgNumber: '' },
      { name: 'BalticSea', description: '', sdgNumber: '' },
      { name: 'BalticSeaYouthPlatform', description: '', sdgNumber: '' },
      { name: 'Banfossilfuels', description: '', sdgNumber: '' },
      { name: 'BlackLivesMatter', description: '', sdgNumber: '' },
      { name: 'COP26', description: '', sdgNumber: '' },
      { name: 'CreativeCircle', description: '', sdgNumber: '' },
      { name: 'DoughnutModel', description: '', sdgNumber: '' },
      { name: 'Dropoliendan', description: '', sdgNumber: '' },
      { name: 'EuropeanGreenDeal', description: '', sdgNumber: '' },
      { name: 'Feminism', description: '', sdgNumber: '' },
      { name: 'GreenFridayAarhus', description: '', sdgNumber: '' },
      { name: 'GreenlightAarhus', description: '', sdgNumber: '' },
      { name: 'GreenNewDeal', description: '', sdgNumber: '' },
      { name: 'Grøngenstart', description: '', sdgNumber: '' },
      { name: 'GrønneAktørerAarhus', description: '', sdgNumber: '' },
      { name: 'Klimaplan', description: '', sdgNumber: '' },
      { name: 'Kommunalvalg2021', description: '', sdgNumber: '' },
      { name: 'MellowDesigns', description: '', sdgNumber: '' },
      { name: 'PostGrowth', description: '', sdgNumber: '' },
      { name: 'ReGeneration2030', description: '', sdgNumber: '' },
      { name: 'SCM', description: '', sdgNumber: '' },
      { name: 'Stopbalticpipeline', description: '', sdgNumber: '' },
      { name: 'UniteTheWorld', description: '', sdgNumber: '' },
    ],
  },
]

export const seedInterests = async (prisma: PrismaClient): Promise<void[]> => {
  const upsertInterestType = async (
    interestType: interestTypeMap,
    parent?: interestTypeMap
  ): Promise<InterestType> => {
    const parentId = parent?.id || null
    const map = {
      name: interestType.name,
      sortOrder: interestType.sortOrder,
      parentInterestTypeId: parentId,
    }
    const type = await prisma.interestType.upsert({
      create: map,
      update: map,
      where: {
        nameUniqueForParentInterestType: {
          name: interestType.name,
          parentInterestTypeId: parentId,
        },
      },
    })
    console.log('Created InterestType: ', type)
    return type
  }

  const upsertInterest = (type: InterestType) => async (
    data: interestMap
  ): Promise<Interest> => {
    const interest = await prisma.interest.upsert({
      create: { ...data, interestTypeId: type.id },
      update: { ...data, interestTypeId: type.id },
      where: {
        nameUniqueForInterestType: { name: data.name, interestTypeId: type.id },
      },
    })
    console.log('Created Interest: ', interest)
    return interest
  }

  const seedInterestType = (parent?: interestTypeMap) => async (
    type: interestTypeMap
  ) => {
    const interestType = await upsertInterestType(type, parent)

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
