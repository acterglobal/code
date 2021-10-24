import { useState, useEffect, useMemo } from 'react'

import { useRouter } from 'next/router'

import { ApolloError, QueryResult, useLazyQuery } from '@apollo/client'

import { acterTypeAsUrl } from '@acter/lib/acter-types/acter-type-as-url'
import { useActerTypes } from '@acter/lib/acter-types/use-acter-types'
import QUERY_ACTER_ID from '@acter/schema/queries/acter-by-id.graphql'
import QUERY_ACTER_SLUG from '@acter/schema/queries/acter-by-slug.graphql'
import { Acter, ActerType } from '@acter/schema/types'

type FindFirstActerData = {
  findFirstActer: Acter
}

type UseActerData = {
  acter: Acter
} & FindFirstActerData

type ActerData = UseActerData

type UseActerVariables = {
  acterTypeId: string
  slug: string
}

type UseActerError = ApolloError | Error

export type ActerQueryResult = Omit<
  QueryResult<UseActerData, UseActerVariables>,
  'error'
> & {
  acter: Acter
  error: UseActerError
}

type UseActerProps = {
  acterId?: string
  fetchParent?: boolean
  acterTypeName?: string
  slug?: string
}

/**
 * Get the acter
 * @param options for passing acterId/fetchParent/acterTypeName/slug which are optional
 * @returns an acter along with rest of query results such as loading, error
 */
export const useActer = (options?: UseActerProps): ActerQueryResult => {
  const { acterId, fetchParent = false } = options || {}
  const [acter, setActer] = useState<Acter>()
  const [loading, setLoading] = useState<boolean>(false)
  const [errors, setErrors] = useState<UseActerError>()
  const router = useRouter()

  const slug = options?.slug || router.query?.slug
  const acterTypeName = options?.acterTypeName || router.asPath.split('/')[1]

  const {
    acterTypes,
    loading: acterTypesLoading,
    error: acterTypesError,
  } = useActerTypes()

  const acterType = useMemo<ActerType>(() => {
    if (acterId) return null

    if (acterTypes) {
      const result = acterTypes.find(
        (type) => acterTypeAsUrl(type) === acterTypeName
      )
      if (!result?.id) {
        setErrors(Error('Not valid acter type'))
        return null
      }
      return result
    }
  }, [acterTypes, acterTypeName, acterId])

  const query = acterId ? QUERY_ACTER_ID : QUERY_ACTER_SLUG

  const [
    fetchActer,
    { data, loading: dataLoading, error: dataError, ...restQueryResult },
  ] = useLazyQuery<ActerData>(query)

  useEffect(() => {
    if (acterId) {
      return fetchActer({ variables: { acterId } })
    }
    setActer(null)
  }, [acterId])

  useEffect(() => {
    if (acterType && slug) {
      return fetchActer({
        variables: {
          acterTypeId: acterType.id,
          slug,
        },
      })
    }
    setActer(null)
  }, [acterType, slug])

  useEffect(() => {
    if (data) {
      if (acterId) {
        setActer(data.acter)
      } else {
        const { findFirstActer: acter } = data
        if (fetchParent && acter?.Parent) {
          return fetchActer({
            variables: {
              acterTypeId: acter.Parent.ActerType.id,
              slug: acter.Parent.slug,
            },
          })
        }
        setActer(acter)
      }
    }
  }, [data])

  useEffect(() => {
    setLoading(acterTypesLoading || dataLoading)
  }, [acterTypesLoading, dataLoading])

  useEffect(() => {
    if (acterTypesError) return setErrors(acterTypesError)
    if (dataError) return setErrors(dataError)
  }, [acterTypesError, dataError])

  return {
    ...(restQueryResult as ActerQueryResult),
    acter,
    loading,
    error: errors,
  }
}
