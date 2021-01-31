import React, { FC } from 'react'
import { Link } from '@material-ui/core'

import { ActerType } from '@generated/type-graphql'

interface AddActerLinkProps {
  /**
   * ActerType for which we are creating a new Acter
   */
  acterType: ActerType
}

export const AddActerLink: FC<AddActerLinkProps> = ({ acterType }) => {
  return (
    <Link color="inherit" href={``}>
      Add {acterType.name}
    </Link>
  )
}
