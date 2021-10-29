import { useState, useEffect, useMemo } from 'react'

import { useRouter } from 'next/router'

import { ActerVariables } from './use-create-acter'
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
  const [acterId, setActerId] = useState(options?.acterId)
  const [fetching, setFetching] = useState<boolean>(false)
  const [errors, setErrors] = useState<UseActerError>()
  const [pause, setPause] = useState(true)
  const [variables, setVariables] = useState<UseActerVariables>()
  const router = useRouter()

  const acterTypeName = options?.acterTypeName || router.asPath.split('/')[1]

  const {
    acterTypes,
    fetching: acterTypesFetching,
    error: acterTypesError,
  } = useActerTypes()

  const query = acterId ? QUERY_ACTER_ID : QUERY_ACTER_SLUG

  const [
    { data, fetching: dataFetching, error: dataError, ...restQueryResult },
  ] = useQuery<ActerData>({
    query,
    variables,
    pause,
  })

  useEffect(() => {
    if (!dataFetching) {
      if (acterId) {
        setPause(false)
        setVariables({
          acterId,
          acterTypeId: undefined,
          slug: undefined,
        })
        return
      }

      if (acterTypes) {
        const slug = options?.slug || router.query?.slug
        const result = acterTypes.find(
          (type) => acterTypeAsUrl(type) === acterTypeName
        )
        if (!result?.id) {
          setErrors(Error('Not valid acter type'))
        }
        setPause(!(!!result?.id && !!slug))
        setVariables({
          acterId: undefined,
          acterTypeId: result?.id,
          slug: slug as string,
        })
        return
      }

      setPause(true)
      setVariables(undefined)
    }
  }, [
    acterTypes?.length,
    acterTypeName,
    acterId,
    options?.slug,
    router.query?.slug,
  ])

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
