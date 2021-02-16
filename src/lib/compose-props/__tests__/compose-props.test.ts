import { GetServerSidePropsContext } from 'next'
import {
  composeProps,
  ComposedGetServerSidePropsContext,
} from 'lib/compose-props'

describe('composeProps', () => {
  it('should generate props from all steps', async () => {
    const a = jest.fn().mockReturnValue({ props: { a: 'a' } })
    const b = jest.fn().mockReturnValue({ props: { b: 'b' } })
    const c = jest.fn().mockReturnValue({ props: { c: 'c' } })

    const props = await composeProps(
      ({} as unknown) as ComposedGetServerSidePropsContext,
      a,
      b,
      c
    )

    expect(props).toEqual({
      props: {
        a: 'a',
        b: 'b',
        c: 'c',
      },
    })
  })

  it('should set generated props from all steps into context', async () => {
    const a = jest.fn().mockReturnValue({ props: { a: 'a' } })
    const b = jest.fn().mockReturnValue({ props: { b: 'b' } })
    const c = jest.fn().mockReturnValue({ props: { c: 'c' } })

    const ctx: ComposedGetServerSidePropsContext = ({} as unknown) as ComposedGetServerSidePropsContext

    const props = await composeProps(ctx, a, b, c)

    expect(ctx.props).toEqual({
      a: 'a',
      b: 'b',
      c: 'c',
    })
  })

  it('should replace subsequent values', async () => {
    const a = jest.fn().mockReturnValue({ props: { a: 'a' } })
    const b = jest.fn().mockReturnValue({ props: { a: 'b' } })

    const props = await composeProps(
      ({} as unknown) as ComposedGetServerSidePropsContext,
      a,
      b
    )

    expect(props).toEqual({
      props: {
        a: 'b',
      },
    })
  })

  it('should stop on notFound', async () => {
    const a = jest.fn().mockReturnValue({ props: { a: 'a' } })
    const b = jest.fn().mockReturnValue({ notFound: true })
    const c = jest.fn().mockReturnValue({ props: { c: 'c' } })

    const props = await composeProps(
      ({} as unknown) as ComposedGetServerSidePropsContext,
      a,
      b,
      c
    )

    expect(props).toEqual({
      props: {
        a: 'a',
      },
      notFound: true,
    })
  })

  it('should stop on redirect', async () => {
    const a = jest.fn().mockReturnValue({ props: { a: 'a' } })
    const b = jest.fn().mockReturnValue({ redirect: '/' })
    const c = jest.fn().mockReturnValue({ props: { c: 'c' } })

    const props = await composeProps(
      ({} as unknown) as ComposedGetServerSidePropsContext,
      a,
      b,
      c
    )

    expect(props).toEqual({
      props: {
        a: 'a',
      },
      redirect: '/',
    })
  })

  it('should stop on error', async () => {
    const a = jest.fn().mockReturnValue({ props: { a: 'a' } })
    const b = jest.fn().mockReturnValue({ props: { error: 'some error' } })
    const c = jest.fn().mockReturnValue({ props: { c: 'c' } })

    const props = await composeProps(
      ({} as unknown) as ComposedGetServerSidePropsContext,
      a,
      b,
      c
    )

    expect(props).toEqual({
      props: {
        a: 'a',
        error: 'some error',
      },
    })
  })
})
