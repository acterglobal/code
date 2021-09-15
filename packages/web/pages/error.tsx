import { NextPage } from 'next'

import { Typography } from '@material-ui/core'

import { Layout } from '@acter/components/layout'
import { Head } from '@acter/components/layout/head'

const ErrorPage: NextPage = () => {
  return (
    <Layout>
      <Head title="Acter" />
      <main>
        <Typography
          variant="body1"
          style={{ textAlign: 'center', marginTop: 20 }}
        >
          There was an error. Please try again.
        </Typography>
      </main>
    </Layout>
  )
}

export default ErrorPage
