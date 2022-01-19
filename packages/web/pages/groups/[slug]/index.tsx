import { useEffect } from 'react'

import { useRouter } from 'next/router'

import { GraphQLError } from 'graphql'
import { NextPageWithLayout } from 'pages/_app'

import { Head } from '@acter/components/atoms/head'
import { GroupLanding } from '@acter/components/group'
import { GroupLayout } from '@acter/components/group/layout/overall'
import { useActer } from '@acter/lib/acter/use-acter'
import { useActerTitle } from '@acter/lib/acter/use-title'
import {
  NotAuthorizedError,
  NotLoggedError,
} from '@acter/lib/errors/graphql-errors'

export const GroupLandingPage: NextPageWithLayout = () => {
  const router = useRouter()
  const { title } = useActerTitle('Acter')
  const { error: acterError } = useActer()

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

  return (
    <>
      <Head title={title} />
      <GroupLanding />
    </>
  )
}

GroupLandingPage.getLayout = (page) => <GroupLayout>{page}</GroupLayout>

export default GroupLandingPage
