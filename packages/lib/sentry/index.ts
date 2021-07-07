import * as Sentry from '@sentry/nextjs'
import { RewriteFrames } from '@sentry/integrations'

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export const initSentry = () => {
  if (process.env.NEXT_PUBLIC_SENTRY_DSN) {
    const integrations = []
    if (
      process.env.NEXT_IS_SERVER === 'true' &&
      process.env.NEXT_PUBLIC_SENTRY_SERVER_ROOT_DIR
    ) {
      // For Node.js, rewrite Error.stack to use relative paths, so that source
      // maps starting with ~/_next map to files in Error.stack with path
      // app:///_next
      integrations.push(
        new RewriteFrames({
          iteratee: (frame) => {
            frame.filename = frame.filename.replace(
              process.env.NEXT_PUBLIC_SENTRY_SERVER_ROOT_DIR,
              'app:///'
            )
            frame.filename = frame.filename.replace('.next', '_next')
            return frame
          },
        })
      )
    }

    Sentry.init({
      enabled: process.env.NODE_ENV === 'production',
      integrations,
      dsn: process.env.NEXT_PUBLIC_SENTRY_DSN,
      release: process.env.NEXT_PUBLIC_COMMIT_SHA,
      environment: process.env.SENTRY_ENVIRONMENT,
    })
  }
}
