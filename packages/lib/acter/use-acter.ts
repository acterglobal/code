import { useState, useEffect, useMemo } from 'react'

import { useRouter } from 'next/router'

import { ApolloError, QueryResult, useLazyQuery } from '@apollo/client'

import { acterTypeAsUrl } from '../acter-types/acter-type-as-url'
import { useActerTypes } from '../acter-types/use-acter-types'
import { ParsedUrlQuery } from 'querystring'

import QUERY_ACTER from '@acter/schema/queries/acter-by-slug.graphql'
import { Acter, ActerType } from '@acter/schema/types'

type FindFirstActerData = {
  findFirstActer: Acter
}

type UseActerData = {
  acter: Acter
} & FindFirstActerData

type UseActerVariables = {
  acterTypeId: string
  slug: string
}

type ActerQueryResult = QueryResult<UseActerData, UseActerVariables> & {
  acter: Acter
}

type UseActerProps = {
  fetchParent?: boolean
}

/**
 * Get the acter
 * @param acterTypeId this is the id of the acter type that is queried
 * @param slug this is the parsed URL slug of the acter
 * @returns an acter that was queried based on the slug & url slug
 */
export const useActer = (options?: UseActerProps): ActerQueryResult => {
  const { fetchParent = false } = options || {}
  const [acter, setActer] = useState<Acter>()
  const [loading, setLoading] = useState<boolean>(false)
  const [errors, setErrors] = useState<ApolloError>()
  const {
    query: { acterType: acterTypeName, slug },
  }: { query: ParsedUrlQuery } = useRouter()

  const {
    acterTypes,
    loading: acterTypesLoading,
    error: acterTypesError,
  } = useActerTypes()

  const acterType = useMemo<ActerType>(() => {
    if (acterTypes) {
      return acterTypes.find((type) => acterTypeAsUrl(type) === acterTypeName)
    }
  }, [acterTypes, acterTypeName])

  const [
    fetchActers,
    { data, loading: dataLoading, error: dataError, ...restQueryResult },
  ] = useLazyQuery<FindFirstActerData>(QUERY_ACTER)

  useEffect(() => {
    if (acterType && slug) {
      return fetchActers({
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
      const { findFirstActer: acter } = data
      if (fetchParent && acter.Parent) {
        return fetchActers({
          variables: {
            acterTypeId: acter.Parent.ActerType.id,
            slug: acter.Parent.slug,
          },
        })
      }
      setActer(acter)
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
