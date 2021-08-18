import { NextPage } from 'next'
import {
  composeProps,
  ComposedGetServerSideProps,
} from '@acter/lib/compose-props'
import { getUserProfile } from 'props'
import { Typography } from '@material-ui/core'
import { Layout } from '@acter/components/layout'
import { Head } from '@acter/components/layout/head'

import { User } from '@acter/schema'

interface ErrorProps {
  user?: User
}

const ErrorPage: NextPage<ErrorProps> = ({ user }) => {
  return (
    <Layout user={user}>
      <Head title="Acter" />

      <main>
        <Typography variant="h4">
          There was an error. Please try again.
        </Typography>
      </main>
    </Layout>
  )
}

export const getServerSideProps: ComposedGetServerSideProps = (ctx) =>
  composeProps(ctx, getUserProfile(false))

export default ErrorPage
