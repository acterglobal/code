import { NextMiddleware, NextResponse } from 'next/server'

export const getAuthMiddleware =
  (authKey: string): NextMiddleware =>
  async ({ headers, url }) => {
    const authHeader = headers.get('authorization')
    if (authHeader !== authKey) {
      // eslint-disable-next-line no-console
      console.info('Bad notify job request', {
        url,
        authHeader,
      })
      return new Response('Not authorized', { status: 401 })
    }

    return NextResponse.next()
  }
