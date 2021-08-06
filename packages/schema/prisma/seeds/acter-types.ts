import { PrismaClient } from '@prisma/client'

import { ActerType, ActerTypeRule } from '@acter/schema'

interface typeMap {
  type?: ActerType
  rules: Record<string, ruleMap>
}

interface ruleMap {
  rule?: ActerTypeRule
  canCreate: boolean
  canJoin: boolean
  canBecome: boolean
}

const types: Record<string, typeMap> = {
  user: {
    rules: {
      user: {
        canCreate: false,
        canJoin: false,
        canBecome: false,
      },
      group: {
        canCreate: true,
        canJoin: true,
        canBecome: false,
      },
      organisation: {
        canCreate: true,
        canJoin: true,
        canBecome: false,
      },
      network: {
        canCreate: true,
        canJoin: true,
        canBecome: false,
      },
      activity: {
        canCreate: true,
        canJoin: true,
        canBecome: false,
      },
    },
  },
  group: {
    rules: {
      user: {
        canCreate: false,
        canJoin: false,
        canBecome: false,
      },
      group: {
        canCreate: false,
        canJoin: false,
        canBecome: false,
      },
      organisation: {
        canCreate: false,
        canJoin: true,
        canBecome: true,
      },
      network: {
        canCreate: false,
        canJoin: true,
        canBecome: true,
      },
      activity: {
        canCreate: true,
        canJoin: false,
        canBecome: false,
      },
    },
  },
  organisation: {
    rules: {
      user: {
        canCreate: false,
        canJoin: false,
        canBecome: false,
      },
      group: {
        canCreate: true,
        canJoin: false,
        canBecome: false,
      },
      organisation: {
        canCreate: false,
        canJoin: true,
        canBecome: true,
      },
      network: {
        canCreate: false,
        canJoin: true,
        canBecome: true,
      },
      activity: {
        canCreate: true,
        canJoin: false,
        canBecome: false,
      },
    },
  },
  network: {
    rules: {
      user: {
        canCreate: false,
        canJoin: false,
        canBecome: false,
      },
      group: {
        canCreate: true,
        canJoin: true,
        canBecome: false,
      },
      organisation: {
        canCreate: false,
        canJoin: true,
        canBecome: true,
      },
      network: {
        canCreate: false,
        canJoin: true,
        canBecome: true,
      },
      activity: {
        canCreate: true,
        canJoin: false,
        canBecome: false,
      },
    },
  },
  activity: {
    rules: {
      user: {
        canCreate: false,
        canJoin: false,
        canBecome: false,
      },
      group: {
        canCreate: false,
        canJoin: false,
        canBecome: false,
      },
      organisation: {
        canCreate: false,
        canJoin: false,
        canBecome: false,
      },
      network: {
        canCreate: false,
        canJoin: false,
        canBecome: false,
      },
      activity: {
        canCreate: false,
        canJoin: false,
        canBecome: false,
      },
    },
  },
}

const upsertActerType = async (
  prisma: PrismaClient,
  name: string
): Promise<ActerType> => {
  return await prisma.acterType.upsert({
    create: { name },
    update: {},
    where: { name },
  })
}

export const seedActerTypes = async (prisma: PrismaClient): Promise<void> => {
  // First loop is to create the ActerTypes
  await Promise.all(
    Object.keys(types).map(async (name) => {
      types[name].type = await upsertActerType(prisma, name)
      console.log('ActerType created: ', types[name].type)
    })
  )

  // Now create rules for all the types
  await Promise.all(
    Object.keys(types).map(async (name) => {
      await Promise.all(
        Object.keys(types[name].rules).map(async (name2) => {
          const { canCreate, canJoin, canBecome } = types[name].rules[name2]
          types[name].rules[name2].rule = await prisma.acterTypeRule.upsert({
            create: {
              objectActerTypeId: types[name].type.id,
              subjectActerTypeId: types[name2].type.id,
              canCreate,
              canJoin,
              canBecome,
            },
            update: {},
            where: {
              subject_object_acter_type_ids: {
                objectActerTypeId: types[name].type.id,
                subjectActerTypeId: types[name2].type.id,
              },
            },
          })
          console.log('ActerTypeRule created: ', types[name].rules[name2].rule)
        })
      )
    })
  )
}
