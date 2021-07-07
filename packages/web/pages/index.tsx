import { NextPage, GetServerSideProps } from 'next'
import { Head } from '@acter/components/layout/head'
import { Layout } from '@acter/components/layout'
import { User } from '@acter/schema/types'

interface HomeProps {
  user?: User
}

const Home: NextPage<HomeProps> = ({ user }) => (
  <Layout user={user}>
    <Head title="Acter" />

    <main>
      <p>The platform for coordinating action on global challenges.</p>
      <p>
        In a world that requires new ways of collaborating, Acter help people,
        organisations and systems build and manage small communities to large
        ecosystems, enabling them to accelerate their impact.
      </p>
    </main>
  </Layout>
)

export const getServerSideProps: GetServerSideProps = async () => {
  return {
    props: {},
    redirect: {
      destination: '/search',
    },
  }
}

export default Home
