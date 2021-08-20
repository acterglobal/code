import { useState, useEffect } from 'react'
import { useQuery, ApolloError, QueryResult } from '@apollo/client'
import QUERY_ACTER from '@acter/schema/queries/acter-by-slug.graphql'
import { Acter, ActerType } from '@acter/schema/types'
import { useRouter } from 'next/router'
import { useActerTypes } from '../acter-types/use-acter-types'
import { acterTypeAsUrl } from '../acter-types/acter-type-as-url'
import { ParsedUrlQuery } from 'querystring'

type findFirstActerData = {
  findFirstActer: Acter
}

type useActerData = {
  acter: Acter
} & findFirstActerData

type useActerVariables = {
  acterTypeId: string
  slug: string
}

type useActerError = Error | ApolloError

type ActerQueryResult = Omit<
  QueryResult<useActerData, useActerVariables>,
  'error'
> & { error: useActerError }

/**
 * Get the acter
 * @param acterTypeId this is the id of the acter type that is queried
 * @param slug this is the parsed URL slug of the acter
 * @returns an acter that was queried based on the slug & url slug
 */
export const useActer = (): [Acter, ActerQueryResult] => {
  const [acter, setActer] = useState<Acter>()
  const [acterType, setActerType] = useState<ActerType>(null)
  const [loading, setLoading] = useState<boolean>(false)
  const [errors, setErrors] = useState<useActerError>()
  const { query }: { query: ParsedUrlQuery } = useRouter()

  const [acterTypes, { loading: acterTypesLoading }] = useActerTypes()

  useEffect(() => {
    if (acterTypes) {
      setActerType(
        acterTypes.find((type) => acterTypeAsUrl(type) === query.acterType)
      )
    }
  }, [acterTypes])

  const {
    loading: dataLoading,
    error: dataError,
    ...restQueryResult
  } = useQuery<findFirstActerData>(QUERY_ACTER, {
    variables: {
      acterTypeId: acterType?.id,
      slug: query.slug,
    },
    onCompleted: (data) => {
      const { findFirstActer: acter } = data
      setActer(acter)
    },
  })

  useEffect(() => {
    setLoading(dataLoading)
  }, [dataLoading, acterTypesLoading])

  useEffect(() => {
    setErrors(dataError)
  }, [dataError])

  return [
    acter,
    {
      loading,
      error: errors,
      ...(restQueryResult as ActerQueryResult),
    },
  ]
}
