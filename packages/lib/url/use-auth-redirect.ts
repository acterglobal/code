import { NextRouter, useRouter } from 'next/router'

type Redirect = () => void
type UseAuthRedirectResponse = {
  loginUrl: string
  loginRedirect: Redirect
  signupUrl: string
  signupRedirect: Redirect
}

const getQuery = (loginRedirectPath: string, router: NextRouter) => {
  if (loginRedirectPath) return `?returnTo=${loginRedirectPath}`
  if (router?.asPath) return `?returnTo=${router.asPath}`
  return null
}

/**
 * Can be used to redirect to login/signup
 */
export const useAuthRedirect = (
  loginRedirectPath?: string
): UseAuthRedirectResponse => {
  const router = useRouter()
  const authPath = '/api/auth'
  const query = getQuery(loginRedirectPath, router)

  const loginUrl = router?.route.includes('/search')
    ? `${authPath}/login?returnTo=/dashboard`
    : `${authPath}/login${query}`
  const loginRedirect = () => window.location.assign(loginUrl)

  const signupUrl = `${authPath}/signup${query}`
  const signupRedirect = () => window.location.assign(signupUrl)

  return {
    loginUrl,
    loginRedirect,
    signupUrl,
    signupRedirect,
  }
}
