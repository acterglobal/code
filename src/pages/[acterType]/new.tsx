import React from 'react'
import { GetServerSideProps, NextPage } from 'next'
import { useRouter, NextRouter } from 'next/router'
import { useMutation } from '@apollo/client'

import { initializeApollo } from 'src/lib/apollo'
import { acterTypeAsUrl } from 'src/lib/acter-types/acter-type-as-url'

import Head from 'next/head'
import { Layout } from 'src/components/layout'
import { ActerForm } from 'src/components/acter/form'

import { Acter, ActerType } from '@generated/type-graphql'
import QUERY_ACTER_TYPES from 'graphql/queries/query-acter-types.graphql'
import MUTATE_ACTER_CREATE from 'graphql/mutations/mutate-create-acter.graphql'

/**
 * Returns an onSubmit handler
 * @param createActerFn Function returned from useMutation
 * @param acterType The ActerType to use for Acter creation
 */
export const _handleSubmit = (
  createActerFn: (any) => any,
  acterType: ActerType
) => async (data: Acter) => {
  return await createActerFn({
    variables: {
      ...data,
      acterTypeId: acterType.id,
    },
  })
}

/**
 * Returns a handler for useMutaion onComplete
 * @param router NextRouter returned from useRouter
 * @param acterType The ActerType to use for routing
 */
export const _handleOnComplete = (
  router: NextRouter,
  acterType: ActerType
) => ({ createActer }: { createActer: Acter }) =>
  router.push(`/${acterTypeAsUrl(createActer.ActerType)}/${createActer.slug}`)

interface NewActerPageProps {
  /**
   * The ActerType we are creating
   */
  acterType: ActerType
}
export const NewActerPage: NextPage<NewActerPageProps> = ({ acterType }) => {
  const router: NextRouter = useRouter()
  const [createActer, { loading, error }] = useMutation(MUTATE_ACTER_CREATE, {
    onCompleted: _handleOnComplete(router, acterType),
  })

  return (
    <Layout>
      <Head>
        <title>New {acterType.name}</title>
      </Head>
      <main>
        <ActerForm
          acterType={acterType}
          loading={loading}
          error={error?.message}
          onSubmit={_handleSubmit(createActer, acterType)}
        />
      </main>
    </Layout>
  )
}

export const getServerSideProps: GetServerSideProps = async ({ params }) => {
  const apollo = initializeApollo()

  const { data, error } = await apollo.query({
    query: QUERY_ACTER_TYPES,
  })

  if (error) {
    return {
      props: {
        error,
      },
    }
  }

  const { acterTypes }: { acterTypes: [ActerType] } = data

  const acterType = acterTypes.find(
    (type) => acterTypeAsUrl(type) === params.acterType
  )

  if (!acterType) {
    return {
      notFound: true,
    }
  }

  return {
    props: {
      acterTypes,
      acterType,
    },
  }
}

export default NewActerPage
