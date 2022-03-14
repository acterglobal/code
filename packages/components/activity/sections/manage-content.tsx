import React, { FC, useState } from 'react'

import { Theme, Box, Tabs, Tab } from '@mui/material'
import createStyles from '@mui/styles/createStyles'
import makeStyles from '@mui/styles/makeStyles'

import { MembersSection } from '@acter/components/acter/landing-page/members-section'
import { SettingsSection } from '@acter/components/acter/settings/settings-section'
import { InvitesSection } from '@acter/components/invites'
import { Drawer } from '@acter/components/util/drawer'
import { useActer } from '@acter/lib/acter/use-acter'
import { SectionTabs as ActivitySectionTabs } from '@acter/lib/constants'
import { useUser } from '@acter/lib/user/use-user'
import { userHasRoleOnActer } from '@acter/lib/user/user-has-role-on-acter'
import { ActerConnectionRole } from '@acter/schema'

const { MEMBERS, INVITE, SETTINGS } = ActivitySectionTabs

interface ManageContentProps {
  openDrawer: boolean
  setDrawer: (open: boolean) => void
  contentTab: ActivitySectionTabs
}

export const ManageContent: FC<ManageContentProps> = ({
  openDrawer,
  setDrawer,
  contentTab,
}) => {
  const classes = useStyles()

  const { acter } = useActer()
  const { user } = useUser()

  const isAdmin = userHasRoleOnActer(user, ActerConnectionRole.ADMIN, acter)
  const tabs = [MEMBERS, INVITE, isAdmin && SETTINGS]

  const [currentTab, setCurrentTab] = useState(tabs.indexOf(contentTab))

  if (!acter) return null

  const handleClose = () => setDrawer(false)
  const handleChange = (_, tab) => setCurrentTab(tab)

  return (
    <Drawer heading={acter.name} open={openDrawer} handleClose={handleClose}>
      <Box className={classes.root}>
        <Tabs
          classes={{ root: classes.tabs }}
          value={currentTab}
          onChange={handleChange}
        >
          {tabs.map((tab, i) => (
            <Tab
              classes={{ root: classes.tab }}
              label={tab}
              id={tab}
              key={`tab-${i}`}
              disableRipple
            />
          ))}
        </Tabs>

        <Box className={classes.tabContent}>
          {/* TODO - ADD ABOUT SECTION WHEN EDIT ACTIVITIES SECTION DESIGN IS READY */}
          {tabs[currentTab] === MEMBERS && <MembersSection />}
          {tabs[currentTab] === INVITE && <InvitesSection />}
          {isAdmin && tabs[currentTab] === SETTINGS && <SettingsSection />}
        </Box>
      </Box>
    </Drawer>
  )
}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      width: 530,
      '& .Mui-selected': {
        color: theme.palette.secondary.main,
        '& .MuiTab-wrapper': {
          fontWeight: theme.typography.fontWeightBold,
        },
      },
      '& .MuiTabs-indicator': {
        backgroundColor: theme.palette.secondary.main,
        minWidth: theme.spacing(10),
      },
    },
    tabs: {
      paddingLeft: theme.spacing(3),
      paddingRight: theme.spacing(3),
      backgroundColor: theme.palette.background.default,
    },
    tab: {
      minWidth: theme.spacing(12),
      fontWeight: theme.typography.fontWeightRegular,
      color: 'black',
      fontSize: '0.88rem',
      textTransform: 'capitalize',
    },
    tabContent: {
      paddingLeft: theme.spacing(3),
      paddingRight: theme.spacing(3),
      display: 'flex',
      justifyContent: 'center',
    },
  })
)
