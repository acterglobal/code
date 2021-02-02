import React, { FC } from 'react'
import { Chip } from '@material-ui/core'

import { Interest } from '@generated/type-graphql'

export interface ApproachProps {
  interest: Interest
}

export const Approach: FC<ApproachProps> = ({ interest }) => {
  return <Chip label={interest.name} />
}
