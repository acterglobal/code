import { GetServerSideProps } from 'next'

import { NextPageWithLayout } from 'pages/_app'

import { Head } from '@acter/components/atoms/head'

const Home: NextPageWithLayout = () => (
  <>
    <Head title="Acter" />

    <main>
      <p>The platform for coordinating action on global challenges.</p>
      <p>
        In a world that requires new ways of collaborating, Acter help people,
        organisations and systems build and manage small communities to large
        ecosystems, enabling them to accelerate their impact.
      </p>
    </main>
  </>
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
