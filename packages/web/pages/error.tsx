import { Typography } from '@material-ui/core'

import { NextPageWithLayout } from 'pages/_app'

import { Head } from '@acter/components/atoms/head'

const ErrorPage: NextPageWithLayout = () => {
  return (
    <>
      <Head title="Acter" />
      <main>
        <Typography
          variant="body1"
          style={{ textAlign: 'center', marginTop: 20 }}
        >
          There was an error. Please try again.
        </Typography>
      </main>
    </>
  )
}

export default ErrorPage
