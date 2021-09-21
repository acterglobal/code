import { useState, useEffect, useMemo } from 'react'

import { useRouter } from 'next/router'

import { ApolloError, QueryResult, useLazyQuery } from '@apollo/client'

import { acterTypeAsUrl } from '@acter/lib/acter-types/acter-type-as-url'
import { useActerTypes } from '@acter/lib/acter-types/use-acter-types'
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

type UseActerError = ApolloError | Error

type ActerQueryResult = Omit<
  QueryResult<UseActerData, UseActerVariables>,
  'error'
> & {
  acter: Acter
  error: UseActerError
}

type UseActerProps = {
  fetchParent?: boolean
}

/**
 * Get the acter
 * @param options for passing fetchParent or acterType which are optional
 * @returns an acter along with rest of query results such as loading, error
 */
export const useActer = (options?: UseActerProps): ActerQueryResult => {
  const { fetchParent = false } = options || {}
  const [acter, setActer] = useState<Acter>()
  const [loading, setLoading] = useState<boolean>(false)
  const [errors, setErrors] = useState<UseActerError>()
  const {
    query: { slug },
    asPath,
  } = useRouter()

  const acterTypeName = asPath.split('/')[1]

  const {
    acterTypes,
    loading: acterTypesLoading,
    error: acterTypesError,
  } = useActerTypes()

  const acterType = useMemo<ActerType>(() => {
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
