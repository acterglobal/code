import React, { FC } from 'react'
import { FormControlLabel, Switch } from '@material-ui/core'

import { Acter } from '@schema'

export interface ActerUsersSettingsProps {
  /**
   * The Acter on which we are adjusting users settings
   */
  acter: Acter
  /**
   * Callback for updating Acter users settings
   */
  onSettingsChange: (acter: Acter) => void
  /**
   * Whether we're in the middle of updating
   */
  loading: boolean
}

export const ActerUsersSettings: FC<ActerUsersSettingsProps> = ({
  acter,
  onSettingsChange,
  loading,
}) => {
  return (
    <FormControlLabel
      label="New members must be approved by an admin"
      control={
        <Switch
          checked={acter.useAdmins === true}
          disabled={loading}
          onChange={(evt) =>
            onSettingsChange({
              ...acter,
              useAdmins: evt.target.checked,
            })
          }
        />
      }
    />
  )
}
