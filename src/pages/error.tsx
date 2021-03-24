import { NextPage } from 'next'
import { composeProps, ComposedGetServerSideProps } from 'lib/compose-props'
import { getUserProfile } from 'src/props'
import { Typography } from '@material-ui/core'
import { Layout } from 'src/components/layout'

import { User } from '@schema'

interface ErrorProps {
  user?: User
}

const ErrorPage: NextPage<ErrorProps> = ({ user }) => {
  return (
    <Layout headTitle="Acter" user={user}>
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
