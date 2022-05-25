import 'reflect-metadata'

import { test, expect } from '@playwright/test'

import omit from 'just-omit'

import { ExampleActer, ExampleUser } from '@acter/schema/fixtures'
import { prisma } from '@acter/schema/prisma'

test.describe('Search page', () => {
  test.beforeAll(async () => {
    const acterType = await prisma.acterType.findFirst()
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const userData: Record<string, any> = omit(ExampleUser, 'id')
    await prisma.acter.create({
      data: {
        ...omit(ExampleActer, [
          'id',
          'acterTypeId',
          'createdByUserId',
          'deletedByUserId',
          'parentActerId',
          'ActerType',
          'Following',
        ]),
        name: 'Test Acter',
        slug: 'test-acter',
        createdByUser: {
          create: { ...userData },
        },
        ActerType: { connect: { id: acterType.id } },
      },
    })
  })

  test.afterAll(async () => {
    const deleteActers = prisma.acter.deleteMany()
    const deleteUsers = prisma.user.deleteMany()
    await prisma.$transaction([deleteActers, deleteUsers])
    await prisma.$disconnect()
  })

  test('should land on the search page', async ({ page }) => {
    await page.goto('/')
    await page.waitForSelector('h6')
    const acterHeading = await page.locator('h6').allInnerTexts()
    await expect(acterHeading).toContain('Test Acter')
  })
})
