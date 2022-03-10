import React, { FC, useState } from 'react'

import { useRouter } from 'next/router'

import { Theme, Tabs, Tab, Box, Grid } from '@mui/material';

import makeStyles from '@mui/styles/makeStyles';
import createStyles from '@mui/styles/createStyles';

import { SettingsSection } from '@acter/components/acter/settings/settings-section'
import { TopBar } from '@acter/components/acter/settings/top-bar'
import { InvitesSection } from '@acter/components/invites'
import { Links as LinkSection } from '@acter/components/links'
import { InviteTabs, SettingsTabs } from '@acter/lib/constants'

const { SETTINGS, INVITE, LINKS } = SettingsTabs

export const ActerSettings: FC = () => {
  const classes = useStyles()
  const { query } = useRouter()

  const tabs = [SETTINGS, LINKS, INVITE]

  const [currentTab, setCurrentTab] = useState(
    query?.inviteTab === InviteTabs.REQUESTS ? tabs.indexOf(INVITE) : 0
  )
  const handleChange = (_, tab) => setCurrentTab(tab)

  return (
    <>
      <TopBar />
      <Box className={classes.acterSettings}>
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

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    acterSettings: {
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
