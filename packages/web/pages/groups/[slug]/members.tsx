import React, { useEffect } from 'react'

import { useRouter } from 'next/router'

import { GraphQLError } from 'graphql'
import { NextPageWithLayout } from 'pages/_app'

import { Head } from '@acter/components/atoms/head'
import { GroupLayout } from '@acter/components/group/layout/overall'
import { GroupMembers } from '@acter/components/group/members'
import { LoadingSpinner } from '@acter/components/util/loading-spinner'
import { useActer } from '@acter/lib/acter/use-acter'
import {
  NotAuthorizedError,
  NotLoggedError,
} from '@acter/lib/errors/graphql-errors'

export const GroupMembersPage: NextPageWithLayout = () => {
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
      <Head title={`${acter?.name} Members - Acter`} />
      <GroupMembers />
    </>
  )
}

GroupMembersPage.getLayout = (page) => <GroupLayout>{page}</GroupLayout>

export default GroupMembersPage
