import { ComposedGetServerSideProps } from 'lib/compose-props'
import { getTokenUser } from 'src/lib/next-auth/jwt'

/**
 * Gets user session info from the JWT token
 * @param ctx.req the request context
 * @returns a user token, or redirect if no token is found
 */
export const getToken: ComposedGetServerSideProps = async ({ req }) => {
  const tokenUser = await getTokenUser(req)

  //TODO: make this configurable
  if (!tokenUser) {
    return {
      props: {},
      redirect: {
        destination: '/',
      },
    }
  }

  return {
    props: {
      tokenUser,
    },
  }
}
