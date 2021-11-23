import React, { FC, useState } from 'react'

import {
  makeStyles,
  Theme,
  createStyles,
  Tabs,
  Tab,
  Box,
  Grid,
} from '@material-ui/core'

import { AccessabilitySettings } from '@acter/components/acter/settings/accessability-settings'
import { TopBar } from '@acter/components/acter/settings/top-bar'
import { VisibilitySettings } from '@acter/components/acter/settings/visibility-settings'
import { InvitesSection } from '@acter/components/invites'
import { Links as LinkSection } from '@acter/components/links'
import { useActer } from '@acter/lib/acter/use-acter'
import { SettingsTabs } from '@acter/lib/constants'

const { SETTINGS, INVITE, LINKS } = SettingsTabs

export const ActerSettings: FC = () => {
  const classes = useStyles()

  const [currentTab, setCurrentTab] = useState(0)
  const tabs = [SETTINGS, LINKS, INVITE]

  const handleChange = (_, tab) => setCurrentTab(tab)

  return (
    <>
      <TopBar />
      <Box className={classes.container}>
        <Tabs
          classes={{ root: classes.tabs, indicator: classes.indicator }}
          value={currentTab}
          onChange={handleChange}
          variant="fullWidth"
        >
          {tabs.map((tab, i) => (
            <Tab
              classes={{ root: classes.tab }}
              label={tab}
              id={tab}
              key={`tab-${i}`}
            />
          ))}
        </Tabs>

        <Grid container className={classes.tabContent} xs={12} md={6}>
          {tabs[currentTab] === SETTINGS && <SettingsSection />}
          {tabs[currentTab] === LINKS && <LinkSection />}
          {tabs[currentTab] === INVITE && <InvitesSection />}
        </Grid>
      </Box>
    </>
  )
}

const SettingsSection: FC = () => {
  const { acter } = useActer()
  if (!acter) return null

  return (
    <Grid item xs={12} md={6}>
      <AccessabilitySettings acter={acter} />
      <VisibilitySettings acter={acter} />
    </Grid>
  )
}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    container: {
      margin: 'auto',
      minHeight: '94vh',
      backgroundColor: theme.colors.white,
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
    },
    tabs: {
      minWidth: 300,
      marginBottom: theme.spacing(3),
      '& .Mui-selected': {
        fontWeight: theme.typography.fontWeightBold,
      },
    },
    indicator: {
      display: 'flex',
      justifyContent: 'center',
      backgroundColor: theme.palette.secondary.main,
    },
    tab: {
      minWidth: theme.spacing(10),
      fontWeight: theme.typography.fontWeightRegular,
      color: theme.palette.secondary.main,
      textTransform: 'capitalize',
    },
    tabContent: {
      maxWidth: '80%',
      display: 'flex',
      justifyContent: 'center',
    },
  })
)
