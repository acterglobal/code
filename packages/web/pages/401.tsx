import React from 'react'

import { NextPageWithLayout } from 'pages/_app'

import { NotLoggedInMessage } from '@acter/components/error-messages/not-logged'

const Custom401: NextPageWithLayout = () => {
  return <NotLoggedInMessage />
}

export default Custom401
