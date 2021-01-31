import React, { FC } from 'react'
import { MenuItem } from '@material-ui/core'

import { AddActerLink } from 'src/components/acter/add-acter-widget/add-acter-link'

import { ActerType } from '@generated/type-graphql'

export interface AddActerMenuProps {
  /**
   * The ActerType for which we are creating the new Acter
   */
  currentActerType: ActerType
  /**
   * List of all ActerTypes with ActerTypeRules
   */
  acterTypes: ActerType[]
}

export const AddActerMenu: FC<AddActerMenuProps> = ({
  currentActerType,
  acterTypes,
}) => {
  return (
    <>
      {acterTypes
        .filter((acterType) => {
          return currentActerType.ActerTypeRules.find(
            (rule) => rule.objectActerTypeId === acterType.id
          )?.canCreate
        })
        .map((acterType) => (
          <MenuItem key={acterType.id}>
            <AddActerLink acterType={acterType} />
          </MenuItem>
        ))}
    </>
  )
}
