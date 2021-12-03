/* eslint-disable */
// This file was copy-pasta from an example and I don't feel like adding types for it now
import cookie from 'cookie'
import { JWT } from 'jose'
import { Issuer, generators } from 'openid-client'

const NETLIFY_JWT_EXPIRATION_SECONDS = 14 * 24 * 3600
const LOGIN_COOKIE_MAX_AGE = 30 * 60 * 1000
const AUTH0_LOGIN_COOKIE_NAME = 'auth0_login_cookie'
const NETLIFY_COOKIE_NAME = 'nf_jwt'
const isRunningLocally = process.env.NETLIFY_DEV === 'true'

const getOpenIDClient = async () => {
  const issuer = await Issuer.discover(`https://${process.env.AUTH0_DOMAIN}`)
  return new issuer.Client({
    client_id: process.env.AUTH0_CLIENT_ID,
    redirect_uris: [`${process.env.URL}/.netlify/functions/callback`],
    response_types: ['id_token'],
  })
}

const generateNetlifyJWT = async (tokenData) => {
  const iat = Math.floor(Date.now() / 1000)
  const exp = Math.floor(iat + NETLIFY_JWT_EXPIRATION_SECONDS)
  //copy over appropriate properties from the original token data
  //Refer to Netlify Documentation for token formatting - https://docs.netlify.com/visitor-access/role-based-access-control/#external-providers
  const tokenPayload = {
    exp,
    iat,
    updated_at: iat,
    aud: tokenData.aud,
    sub: tokenData.sub,
    app_metadata: {
      authorization: {
        roles: tokenData[`${process.env.AUTH0_TOKEN_NAMESPACE}/roles`],
      },
    },
  }
  return await JWT.sign(tokenPayload, process.env.TOKEN_SECRET, {
    algorithm: 'HS256',
    header: {
      typ: 'JWT',
    },
  })
}

const generateAuth0LoginCookie = (nonce, encodedStateStr) => {
  const cookieData = { nonce, state: encodedStateStr }
  return cookie.serialize(AUTH0_LOGIN_COOKIE_NAME, JSON.stringify(cookieData), {
    secure: !isRunningLocally,
    path: '/',
    maxAge: LOGIN_COOKIE_MAX_AGE,
    httpOnly: true,
  })
}

const generateEncodedStateString = (route) => {
  const state = { route: route || '/', nonce: generators.nonce() }
  const stateBuffer = Buffer.from(JSON.stringify(state))
  return stateBuffer.toString('base64')
}

const generateAuth0LoginResetCookie = () => {
  return cookie.serialize(AUTH0_LOGIN_COOKIE_NAME, '', {
    secure: !isRunningLocally,
    httpOnly: true,
    path: '/',
    maxAge: new Date(0),
  })
}

const generateLogoutCookie = () => {
  return cookie.serialize(NETLIFY_COOKIE_NAME, '', {
    secure: !isRunningLocally,
    path: '/',
    maxAge: new Date(0),
    httpOnly: true,
  })
}

const generateNetlifyCookieFromAuth0Token = async (tokenData) => {
  const netlifyToken = await generateNetlifyJWT(tokenData)
  return cookie.serialize(NETLIFY_COOKIE_NAME, netlifyToken, {
    secure: !isRunningLocally,
    path: '/',
    maxAge: NETLIFY_JWT_EXPIRATION_SECONDS,
  })
}

const generateAuth0LogoutUrl = () => {
  const auth0DomainLogout = `https://${process.env.AUTH0_DOMAIN}/v2/logout`
  const urlReturnTo = `returnTo=${encodeURIComponent(process.env.URL)}`
  const urlClientId = `client_id=${process.env.AUTH0_CLIENT_ID}`
  return `${auth0DomainLogout}?${urlReturnTo}&${urlClientId}`
}

export const handleLogin = async (event) => {
  if (!event || !event.headers) {
    throw new Error('Malformed event')
  }
  const openIDClient = await getOpenIDClient()
  const referer = event.headers.referer

  const nonce = generators.nonce()
  const state = generateEncodedStateString(referer)
  //authorizationUrl docs - https://github.com/panva/node-openid-client/tree/master/docs#clientauthorizationurlparameters
  const authRedirectURL = openIDClient.authorizationUrl({
    scope: 'openid email profile',
    response_mode: 'form_post',
    nonce,
    state,
  })
  return {
    statusCode: 302,
    headers: {
      Location: authRedirectURL,
      'Cache-Control': 'no-cache',
      'Set-Cookie': generateAuth0LoginCookie(nonce, state),
    },
  }
}

export const handleCallback = async (event) => {
  if (!event || !event.headers || !event.headers.cookie) {
    throw new Error('Invalid request')
  }
  const openIDClient = await getOpenIDClient()

  const loginCookie = cookie.parse(event.headers.cookie)[
    AUTH0_LOGIN_COOKIE_NAME
  ]
  const { nonce, state } = JSON.parse(loginCookie)

  /* NOTE: method, body, and url are all required for the openIDClient to work with
    the request*/
  const req = {
    method: 'POST',
    body: event.body,
    url: event.headers.host,
  }
  //callbackParams documentation - https://github.com/panva/node-openid-client/tree/master/docs#clientcallbackparamsinput
  const params = openIDClient.callbackParams(req)

  //callback docs - https://github.com/panva/node-openid-client/tree/master/docs#clientcallbackredirecturi-parameters-checks-extras
  const tokenSet = await openIDClient.callback(
    `${process.env.URL}/.netlify/functions/callback`,
    params,
    {
      nonce,
      state,
    }
  )

  const netlifyCookie = await generateNetlifyCookieFromAuth0Token(
    tokenSet.claims()
  )

  const auth0LoginCookie = generateAuth0LoginResetCookie()

  //Get the redirect URL from the decoded state
  const buff = Buffer.from(state, 'base64')
  const decodedState = JSON.parse(buff.toString('utf8'))
  return {
    statusCode: 302,
    headers: {
      Location: decodedState.route,
      'Cache-Control': 'no-cache',
    },
    multiValueHeaders: {
      'Set-Cookie': [netlifyCookie, auth0LoginCookie],
    },
  }
}

export const handleLogout = async () => {
  return {
    statusCode: 302,
    headers: {
      Location: generateAuth0LogoutUrl(),
      'Cache-Control': 'no-cache',
      'Set-Cookie': generateLogoutCookie(),
    },
  }
}
