import React from 'react'

import { NextPageWithLayout } from 'pages/_app'

import { NotFoundMessage } from '@acter/components/error-messages/not-found'

const Custom404: NextPageWithLayout = () => {
  return <NotFoundMessage />
}

export default Custom404
