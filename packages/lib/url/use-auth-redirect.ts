import { useRouter } from 'next/router'

type Redirect = () => void
type UseAuthRedirectResponse = {
  loginUrl: string
  loginRedirect: Redirect
  signupUrl: string
  signupRedirect: Redirect
}

/**
 * Can be used to redirect to login/signup
 */
export const useAuthRedirect = (): UseAuthRedirectResponse => {
  const router = useRouter()
  const authPath = '/api/auth'
  const query = router?.asPath ? `?returnTo=${router.asPath}` : null

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
