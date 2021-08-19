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

  const loginUrl = `/api/auth/login?returnTo=${router.asPath}`
  const loginRedirect = () => window.location.assign(loginUrl)

  const signupUrl = `/api/auth/signup?returnTo=${router.asPath}`
  const signupRedirect = () => window.location.assign(signupUrl)

  return {
    loginUrl,
    loginRedirect,
    signupUrl,
    signupRedirect,
  }
}
