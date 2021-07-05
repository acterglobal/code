import { GetServerSideProps } from 'next'
import { useRouter } from 'next/router'

const defaultRoute = '/profile/info'

export const UserProfilePage = (): void => {
  const router = useRouter()
  router.replace(defaultRoute)
}

export const getServerSideProps: GetServerSideProps = async () => {
  return {
    redirect: {
      destination: defaultRoute,
      permanent: false,
    },
  }
}

export default UserProfilePage
