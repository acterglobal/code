import React, { FC } from 'react'

import { Typography } from '@mui/material'

import { Link } from '@acter/components/util/anchor-link'

export const NotAuthorizedMessage: FC = () => {
  return (
    <Typography variant="body2" style={{ textAlign: 'center', paddingTop: 40 }}>
      Oops, looks like you are not authorized to view this page. Please{' '}
      <Link href="/dashboard">click here</Link> to go to your dashboard.
    </Typography>
  )
}
