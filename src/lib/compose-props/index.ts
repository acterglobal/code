import {
  GetServerSideProps,
  GetServerSidePropsContext,
  GetServerSidePropsResult,
} from 'next'
import merge from 'deepmerge'
import { ParsedUrlQuery } from 'querystring'

/**
 * Extend Next.js' GetServerSidePropsContext to include GetServerSidePropsResult
 */
export type ComposedGetServerSidePropsContext<
  Q extends ParsedUrlQuery = ParsedUrlQuery
> = GetServerSidePropsContext<Q> & {
  props: { [key: string]: any }
}

/**
 * Extend Next.js' GetServerSideProps to use ComposedGetServerSidePropsContext
 */
export type ComposedGetServerSideProps<
  P extends { [key: string]: any } = { [key: string]: any },
  Q extends ParsedUrlQuery = ParsedUrlQuery & P
> = (
  context: ComposedGetServerSidePropsContext<Q>
) => Promise<GetServerSidePropsResult<P>>

/**
 * Compose props but exit on notFound, redirect or error
 *
 * @param ctx Context as provided by Next.js
 * @param steps list of GetServerSideProps functions
 */
export const composeProps = async (
  ctx: ComposedGetServerSidePropsContext<ParsedUrlQuery>,
  ...steps: ComposedGetServerSideProps[]
) => {
  return (await steps.reduce(async (composed, fn) => {
    const prev = await composed
    if (
      'notFound' in prev ||
      'redirect' in prev ||
      (typeof prev['props'] === 'object' && 'error' in prev['props'])
    ) {
      return prev
    }
    const res = await fn(ctx)
    const merged = merge(prev, res as Partial<{ [key: string]: any }>)
    ctx.props = merged.props
    return merged
  }, Promise.resolve({}))) as GetServerSidePropsResult<{
    [key: string]: any
  }>
}
