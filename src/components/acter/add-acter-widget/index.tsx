import React, { FC } from 'react'
import { Button, MenuItem } from '@material-ui/core'

import { DropdownMenu } from 'src/components/util/dropdown-menu'
import { AddActerLink } from 'src/components/acter/add-acter-widget/add-acter-link'
import { AddActerMenu } from 'src/components/acter/add-acter-widget/add-acter-menu'

import { ActerType } from '@generated/type-graphql'

export interface AddActerWidgetProps {
  /**
   * The ActerType for which we are creating the new Acter
   */
  currentActerType: ActerType
  /**
   * List of all ActerTypes with ActerTypeRules
   */
  acterTypes: ActerType[]
}

export const AddActerWidget: FC<AddActerWidgetProps> = ({
  currentActerType,
  acterTypes,
}) => {
  return (
    <DropdownMenu anchorNode={<Button>+ Add</Button>}>
      <AddActerMenu
        currentActerType={currentActerType}
        acterTypes={acterTypes}
      />
    </DropdownMenu>
  )
}
