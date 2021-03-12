import React from 'react'
import NextErrorComponent, { ErrorProps } from 'next/error'
import * as Sentry from '@sentry/node'
import { PHASE_PRODUCTION_SERVER } from 'next/constants'

export const ErrorWithSentry = ({ statusCode, hasGetInitialPropsRun, err }) => {
  if (process.env.NEXT_PUBLIC_SENTRY_DSN && !hasGetInitialPropsRun && err) {
    // getInitialProps is not called in case of
    // https://github.com/vercel/next.js/issues/8592. As a workaround, we pass
    // err via _app.js so it can be captured
    Sentry.captureException(err)
    // Flushing is not required in this case as it only happens on the client
  }

  return <NextErrorComponent statusCode={statusCode} />
}

ErrorWithSentry.getInitialProps = async (props) => {
  type MyErrorProps = ErrorProps & { hasGetInitialPropsRun: boolean }
  const errorInitialProps = (await NextErrorComponent.getInitialProps(
    props
  )) as MyErrorProps

  if (process.env.NEXT_PUBLIC_SENTRY_DSN) {
    const { err, asPath } = props
    // Workaround for https://github.com/vercel/next.js/issues/8592, mark when
    // getInitialProps has run
    errorInitialProps.hasGetInitialPropsRun = true

    // Running on the server, the response object (`res`) is available.
    //
    // Next.js will pass an err on the server if a page's data fetching methods
    // threw or returned a Promise that rejected
    //
    // Running on the client (browser), Next.js will provide an err if:
    //
    //  - a page's `getInitialProps` threw or returned a Promise that rejected
    //  - an exception was thrown somewhere in the React lifecycle (render,
    //    componentDidMount, etc) that was caught by Next.js's React Error
    //    Boundary. Read more about what types of exceptions are caught by Error
    //    Boundaries: https://reactjs.org/docs/error-boundaries.html

    if (err) {
      Sentry.captureException(err)

      // Flushing before returning is necessary if deploying to Vercel, see
      // https://vercel.com/docs/platform/limits#streaming-responses
      await Sentry.flush(2000)

      return errorInitialProps
    }

    // Only do this on prod server, i.e. don't report 404/500 w/o err during build
    if (process.env.NEXT_PHASE === PHASE_PRODUCTION_SERVER) {
      // If this point is reached, getInitialProps was called without any
      // information about what the error might be. This is unexpected and may
      // indicate a bug introduced in Next.js, so record it in Sentry
      Sentry.captureException(
        new Error(`_error.js getInitialProps missing data at path: ${asPath}`)
      )
    }

    await Sentry.flush(2000)
  }

  return errorInitialProps
}

export default ErrorWithSentry
