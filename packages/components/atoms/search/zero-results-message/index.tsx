import React, { FC } from 'react'

import { Typography } from '@material-ui/core'

export const ZeroResultsMessage: FC = () => (
  <Typography variant="body2" aria-label="zero-acters">
    Your search did not return any results. Try removing search terms and/or
    filters to see more.
  </Typography>
)
