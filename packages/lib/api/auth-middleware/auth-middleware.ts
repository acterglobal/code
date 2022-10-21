import { NextMiddleware, NextRequest, NextResponse } from 'next/server'

export const getAuthMiddleware =
  (authKey: string): NextMiddleware =>
  (request: NextRequest) => {
    const authHeader = request.headers.get('authorization')
    if (authHeader !== authKey) {
      // eslint-disable-next-line no-console
      console.info('Bad notify job request', {
        url: request.url,
        authHeader,
        authKey,
      })

      return NextResponse.rewrite(
        `${request.nextUrl.protocol}//${request.nextUrl.host}/401`,
        {
          status: 401,
        }
      );
    }

    return NextResponse.next()
  }
