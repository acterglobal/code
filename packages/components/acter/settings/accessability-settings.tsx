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

export interface AccessabilitySettingsProps {
  /**
   * Acter for settings
   */
  acter: Acter
}

export const AccessabilitySettings: FC<AccessabilitySettingsProps> = ({
  acter,
}) => {
  const classes = useStyles()

  const [acterJoinSetting, setActerJoinSetting] = useState<ActerJoinSettings>(
    ActerJoinSettings[acter.acterJoinSetting]
  )

  const [{ fetching: updatingSetting }, updateActer] = useUpdateActer(acter, {
    onCompleted: (data) => {
      setActerJoinSetting(
        ActerJoinSettings[data.updateActerCustom.acterJoinSetting]
      )
      setWhoCanJoinSetting(
        ActerWhoCanJoinSettings[data.updateActerCustom.acterWhoCanJoinSetting]
      )
    },
  })

  const handleChangeJoinSetting = (event) => {
    updateActer({
      ...acter,
      acterJoinSetting: event.target.value,
    } as ActerVariables)
  }

  const [
    whoCanJoinSetting,
    setWhoCanJoinSetting,
  ] = useState<ActerWhoCanJoinSettings>(
    ActerWhoCanJoinSettings[acter.acterWhoCanJoinSetting]
  )

  const [acterSetting, setActerSetting] = useState(
    (whoCanJoinSetting === ACTERS || whoCanJoinSetting === ALL) && true
  )
  const [peopleSetting, setPeopleSetting] = useState(
    (whoCanJoinSetting === PEOPLE || whoCanJoinSetting === ALL) && true
  )

  const handleChangeActersWhoCanJoin = (setting: ActerWhoCanJoinSettings) => (
    checked: boolean
  ) => {
    setActerSetting(checked)
    console.log('This is aceters value ', checked)
    toggleSetting(ACTERS)
    toggleUpdateActer()
  }

  const handleChangePeopleWhoCanJoin = (value) => {
    setPeopleSetting(value)
    toggleSetting(PEOPLE)
    console.log('This is aceters value 3 after toggle ', acterSetting)
    toggleUpdateActer()
  }

  const toggleUpdateActer = () =>
    updateActer({
      ...acter,
      acterWhoCanJoinSetting: whoCanJoinSetting,
    } as ActerVariables)

  const toggleSetting = (toggle) => {
    if (toggle === ACTERS) {
      console.log('This is aceters value 2 toggle ', acterSetting)
      if (acterSetting && peopleSetting) setWhoCanJoinSetting(ALL)
      else if (acterSetting) setWhoCanJoinSetting(ACTERS)
      else if (!acterSetting && !peopleSetting) {
        setWhoCanJoinSetting(ACTERS)
        setActerSetting(true)
        setPeopleSetting(false)
      } else if (!acterSetting) setWhoCanJoinSetting(PEOPLE)
    } else if (toggle === PEOPLE) {
      if (acterSetting && peopleSetting) setWhoCanJoinSetting(ALL)
      else if (peopleSetting) setWhoCanJoinSetting(PEOPLE)
      else if (!acterSetting && !peopleSetting) {
        setWhoCanJoinSetting(ACTERS)
        setActerSetting(true)
        setPeopleSetting(false)
      } else if (!peopleSetting) setWhoCanJoinSetting(ACTERS)
    }
  }

  // useEffect(() => {
  //   toggleSetting(ACTERS)
  //   toggleUpdateActer()
  //   // updateActer({
  //   //   ...acter,
  //   //   acterWhoCanJoinSetting: whoCanJoinSetting,
  //   // } as ActerVariables)
  // }, [acterSetting])

  // useEffect(() => {
  //   toggleSetting(PEOPLE)
  //   toggleUpdateActer()
  //   // updateActer({
  //   //   ...acter,
  //   //   acterWhoCanJoinSetting: whoCanJoinSetting,
  //   // } as ActerVariables)
  // }, [peopleSetting])

  // useEffect(() => {
  //   console.log('This is UPDATING settingn ', peopleSetting)

  // }, [whoCanJoinSetting])

  return (
    <SettingContainer heading="Accessability">
      <Setting title="Who can access">
        <RadioGroup
          aria-label="member-join-setting"
          name="acterJoinSetting"
          value={acterJoinSetting}
          onChange={handleChangeJoinSetting}
        >
          <SettingsRadio
            label="Everyone"
            value={ActerJoinSettings.EVERYONE}
            updating={
              acterJoinSetting === ActerJoinSettings.RESTRICTED &&
              updatingSetting
            }
          />
          <SettingsRadio
            label="Restricted"
            subText="(Needs approval)"
            value={ActerJoinSettings.RESTRICTED}
            updating={
              acterJoinSetting === ActerJoinSettings.EVERYONE && updatingSetting
            }
          />
        </RadioGroup>
      </Setting>
      <Setting title="Who can join">
        <Box className={classes.switchSection}>
          <Box>Acters</Box>
          <Switch
            name="Acters"
            checked={acterSetting}
            onChange={handleChangeActersWhoCanJoin(ACTERS)}
            size={SMALL}
            // updating={
            //   whoCanJoinSetting === ActerWhoCanJoinSettings.ACTERS &&
            //   updatingSetting
            // }
            value
          />
        </Box>

        <Box className={classes.switchSection}>
          <Box>People</Box>
          <Switch
            name="People"
            checked={peopleSetting}
            onChange={handleChangePeopleWhoCanJoin}
            size={SMALL}
            // updating={
            //   whoCanJoinSetting === ActerWhoCanJoinSettings.PEOPLE &&
            //   updatingSetting
            // }
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
  },
  joinName: {
    display: 'flex',
    alignItems: 'center',
  },
}))
