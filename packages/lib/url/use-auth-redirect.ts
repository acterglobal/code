import { useRouter } from 'next/router'

type Redirect = () => Promise<boolean>

/**
 * Can be used to redirect to login/signup
 */
export const useAuthRedirect = (): Redirect[] => {
  const router = useRouter()

  const loginRedirect = () =>
    router.push(`/api/auth/login?redirectTo=${router.asPath}`)

  const signupRedirect = () =>
    router.push(`/api/auth/signup?redirectTo=${router.asPath}`)

  return [loginRedirect, signupRedirect]
}
