import React, { useEffect, useState } from 'react'

import { useRouter } from 'next/router'

import { GraphQLError } from 'graphql'
import { NextPageWithLayout } from 'pages/_app'

import { ActerSettings } from '@acter/components/acter/settings'
import { Head } from '@acter/components/atoms/head'
import { ActerLayout } from '@acter/components/layout/acter'
import { LoadingSpinner } from '@acter/components/util/loading-spinner'
import { getPrivacySettings } from '@acter/lib/acter/get-privacy-settings'
import { useActer } from '@acter/lib/acter/use-acter'
import {
  NotAuthorizedError,
  NotLoggedError,
} from '@acter/lib/errors/graphql-errors'
import { useUser } from '@acter/lib/user/use-user'
import { userHasRoleOnActer } from '@acter/lib/user/user-has-role-on-acter'
import { ActerConnectionRole } from '@acter/schema'

export const ActerSettingsPage: NextPageWithLayout = () => {
  const router = useRouter()
  const baseTitle = 'Settings - Acter'
  const [title, setTitle] = useState(baseTitle)
  const { acter, fetching: acterLoading, error: acterError } = useActer()
  const { user, fetching: userLoading } = useUser()

  useEffect(() => {
    if (acter?.name) setTitle(`${acter.name} - ${baseTitle}`)
  }, [acter])

  const isPrivate = getPrivacySettings(acter)
  const isAdmin = userHasRoleOnActer(user, ActerConnectionRole.ADMIN, acter)

  useEffect(() => {
    if (acterError) {
      const { graphQLErrors }: GraphQLError[] | any = acterError
      graphQLErrors.forEach((err) => {
        if (err.message === NotAuthorizedError.message) {
          router.push('/403')
        }
        if (err.message === NotLoggedError.message) {
          router.push('/401')
        }
      })
    }
  }, [acterError])

  useEffect(() => {
    if (isPrivate && !isAdmin) {
      router.push('/403')
    }
  }, [isAdmin, user, isPrivate])

  if (acterLoading || userLoading) return <LoadingSpinner />

  return (
    <>
      <Head title={title} />
      <main>
        <ActerSettings />
      </main>
    </>
  )
}

ActerSettingsPage.getLayout = (page) => <ActerLayout>{page}</ActerLayout>

export default ActerSettingsPage
