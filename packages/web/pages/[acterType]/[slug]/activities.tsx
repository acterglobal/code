import React, { useEffect } from 'react'

import { useRouter } from 'next/router'

import { GraphQLError } from 'graphql'
import { NextPageWithLayout } from 'pages/_app'

import { ActerActivities } from '@acter/components/acter/activities'
import { Head } from '@acter/components/atoms/head'
import { ActerLayout } from '@acter/components/layout/acter'
import { LoadingSpinner } from '@acter/components/util/loading-spinner'
import { useActer } from '@acter/lib/acter/use-acter'
import {
  NotAuthorizedError,
  NotLoggedError,
} from '@acter/lib/errors/graphql-errors'

export const ActerActivitiesPage: NextPageWithLayout = () => {
  const router = useRouter()
  const { acter, fetching: acterLoading, error: acterError } = useActer()

  useEffect(() => {
    if (acterError) {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
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

  if (acterLoading) return <LoadingSpinner />

  return (
    <>
      <>
        <Head title={`${acter?.name} Activities - Acter`} />

        <ActerActivities />
      </>
    </>
  )
}

ActerActivitiesPage.getLayout = (page) => <ActerLayout>{page}</ActerLayout>

export default ActerActivitiesPage
