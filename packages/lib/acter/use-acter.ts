import { useState, useEffect, useMemo } from 'react'

import { useRouter } from 'next/router'

import { CombinedError, useQuery, UseQueryState } from 'urql'

import { acterTypeAsUrl } from '@acter/lib/acter-types/acter-type-as-url'
import { useActerTypes } from '@acter/lib/acter-types/use-acter-types'
import { Acter } from '@acter/schema'
import QUERY_ACTER_ID from '@acter/schema/queries/acter-by-id.graphql'
import QUERY_ACTER_SLUG from '@acter/schema/queries/acter-by-slug.graphql'

type FindFirstActerData = {
  findFirstActer: Acter
}

type UseActerData = {
  acter: Acter
} & FindFirstActerData

type ActerData = UseActerData

type UseActerVariablesById = {
  acterId: string
}

type UseActerVariablesByTypeAndSlug = {
  acterTypeId: string
  slug: string
}

type UseActerVariables = UseActerVariablesById | UseActerVariablesByTypeAndSlug

type UseActerError = CombinedError | Error

export type ActerQueryResult = Omit<
  UseQueryState<UseActerData, UseActerVariables>,
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
  const { fetchParent = false } = options || {}
  const [acter, setActer] = useState<Acter>()
  const [acterId, setActerId] = useState<string>(options?.acterId)
  const [fetching, setFetching] = useState<boolean>(false)
  const [errors, setErrors] = useState<UseActerError>()
  const router = useRouter()
  const {
    acterTypes,
    fetching: acterTypesFetching,
    error: acterTypesError,
  } = useActerTypes()

  useEffect(() => {
    setActerId(options?.acterId)
  }, [options?.acterId])

  const acterTypeName = useMemo(
    () => options?.acterTypeName || router.asPath.split('/')[1],
    [options?.acterTypeName, router.asPath]
  )

  const acterTypeId = useMemo(() => {
    if (acterTypes?.length > 0 && acterTypeName) {
      const result = acterTypes.find(
        (type) => acterTypeAsUrl(type) === acterTypeName
      )
      if (!result?.id) {
        setErrors(Error('Not valid acter type'))
      }
      return result.id
    }
  }, [acterTypes?.length, acterTypeName])

  const slug = useMemo(() => options?.slug || (router.query?.slug as string), [
    options?.slug,
    router.query?.slug,
  ])

  const variables = useMemo<UseActerVariables>(() => {
    if (acterId) {
      return {
        acterId,
      } as UseActerVariablesById
    }

    if (acterTypeId && slug) {
      return {
        acterTypeId,
        slug,
      } as UseActerVariablesByTypeAndSlug
    }

    return {} as UseActerVariables
  }, [acterId, acterTypeId, slug])

  const pause = useMemo(
    () => !variables || Object.keys(variables).length === 0,
    [JSON.stringify(variables)]
  )

  const query = acterId ? QUERY_ACTER_ID : QUERY_ACTER_SLUG

  const [
    { data, fetching: dataFetching, error: dataError, ...restQueryResult },
  ] = useQuery<ActerData>({
    query,
    variables,
    pause,
  })

  useEffect(() => {
    if (data) {
      if (acterId) {
        setActer(data.acter)
      } else {
        const { findFirstActer: acter } = data
        if (fetchParent && acter?.Parent) {
          setActerId(acter.Parent.id)
        }
        setActer(acter)
      }
    }
  }, [data])

  useEffect(() => {
    setFetching(acterTypesFetching || dataFetching)
  }, [acterTypesFetching, dataFetching])

  useEffect(() => {
    if (acterTypesError) return setErrors(acterTypesError)
    if (dataError) return setErrors(dataError)
  }, [acterTypesError, dataError])

  return {
    ...(restQueryResult as ActerQueryResult),
    acter,
    fetching,
    error: errors,
  }
}
