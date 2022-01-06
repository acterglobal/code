import React from 'react'

import { NextPageWithLayout } from 'pages/_app'

import { NotAuthorizedMessage } from '@acter/components/error-messages/not-authorized'

const Custom403: NextPageWithLayout = () => {
  return <NotAuthorizedMessage />
}

export default Custom403
