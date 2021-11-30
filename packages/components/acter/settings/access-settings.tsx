import React, { FC, useState, useEffect } from 'react'

import { RadioGroup } from '@material-ui/core'
import { Box, makeStyles, Theme } from '@material-ui/core'

import { Switch } from '@acter/components/styled/switch'
import { SettingsRadio } from '@acter/components/util/forms'
import {
  Setting,
  SettingContainer,
} from '@acter/components/util/forms/setting-container'
import { ActerVariables } from '@acter/lib/acter/use-create-acter'
import { useUpdateActer } from '@acter/lib/acter/use-update-acter'
import { Size } from '@acter/lib/constants'
import {
  Acter,
  ActerJoinSettings,
  ActerWhoCanJoinSettings,
} from '@acter/schema'

const { ALL, ACTERS, PEOPLE } = ActerWhoCanJoinSettings

const { SMALL } = Size

export interface AccessSettingsProps {
  /**
   * Acter for settings
   */
  acter: Acter
}

export const AccessSettings: FC<AccessSettingsProps> = ({ acter }) => {
  const classes = useStyles()

  const [{ fetching: updatingSetting }, updateActer] = useUpdateActer(acter)

  const handleChangeJoinSetting = (event) => {
    updateActer({
      ...acter,
      acterJoinSetting: event.target.value,
    } as ActerVariables)
  }

  const [acterCanJoinSetting, setActerCanJoinSetting] = useState(
    [ALL, ACTERS].includes(
      acter.acterWhoCanJoinSetting as ActerWhoCanJoinSettings
    )
  )
  const [peopleCanJoinSetting, setPeopleCanJoinSetting] = useState(
    [ALL, PEOPLE].includes(
      acter.acterWhoCanJoinSetting as ActerWhoCanJoinSettings
    )
  )

  const handleChangeActerCanJoinSetting = (checked: boolean): void => {
    setActerCanJoinSetting(checked)
    if (!checked && !peopleCanJoinSetting) setPeopleCanJoinSetting(true)
  }

  const handleChangePeopleCanJoinSetting = (checked: boolean): void => {
    setPeopleCanJoinSetting(checked)
    if (!checked && !acterCanJoinSetting) setActerCanJoinSetting(true)
  }

  useEffect(() => {
    const whoCanJoinSettingUpdate: ActerWhoCanJoinSettings =
      acterCanJoinSetting && peopleCanJoinSetting
        ? ALL
        : acterCanJoinSetting
        ? ACTERS
        : PEOPLE

    if (whoCanJoinSettingUpdate !== acter.acterWhoCanJoinSetting) {
      updateActer({
        ...acter,
        acterWhoCanJoinSetting: whoCanJoinSettingUpdate,
      } as ActerVariables)
    }
  }, [acterCanJoinSetting, peopleCanJoinSetting])

  return (
    <SettingContainer heading="Access">
      <Setting title="Who can access">
        <RadioGroup
          aria-label="member-join-setting"
          name="acterJoinSetting"
          value={acter.acterJoinSetting}
          onChange={handleChangeJoinSetting}
        >
          <SettingsRadio
            label="Everyone"
            value={ActerJoinSettings.EVERYONE}
            updating={
              acter.acterJoinSetting === ActerJoinSettings.RESTRICTED &&
              updatingSetting
            }
          />
          <SettingsRadio
            label="Restricted"
            subText="(Needs approval)"
            value={ActerJoinSettings.RESTRICTED}
            updating={
              acter.acterJoinSetting === ActerJoinSettings.EVERYONE &&
              updatingSetting
            }
          />
        </RadioGroup>
      </Setting>
      <Setting title="Who can join">
        <Box className={classes.switchSection}>
          <Box className={classes.label}>Acters</Box>
          <Switch
            name="Acters"
            checked={acterCanJoinSetting}
            onChange={handleChangeActerCanJoinSetting}
            size={SMALL}
            updating={updatingSetting}
            value
          />
        </Box>

        <Box className={classes.switchSection}>
          <Box className={classes.label}>People</Box>
          <Switch
            name="People"
            checked={peopleCanJoinSetting}
            onChange={handleChangePeopleCanJoinSetting}
            size={SMALL}
            updating={updatingSetting}
            value
          />
        </Box>
      </Setting>
    </SettingContainer>
  )
}

const useStyles = makeStyles((theme: Theme) => ({
  switchSection: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: theme.spacing(1.5),
    marginLeft: theme.spacing(1.8),
    marginTop: theme.spacing(1),
  },
  label: {
    color: theme.palette.secondary.main,
    fontSize: '0.88rem',
    fontWeight: theme.typography.fontWeightBold,
    marginRight: theme.spacing(0.5),
  },
}))
