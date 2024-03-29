import React, { FC, useState } from 'react'

import {
  createStyles,
  makeStyles,
  Theme,
  Box,
  Tabs,
  Tab,
} from '@material-ui/core'

import { MembersSection } from '@acter/components/acter/landing-page/members-section'
import { About as AboutSection } from '@acter/components/group/sections/tabs/about'
import { Settings as SettingsSection } from '@acter/components/group/sections/tabs/settings'
import { InvitesSection } from '@acter/components/invites'
import { Links as LinksSection } from '@acter/components/links'
import { Drawer } from '@acter/components/util/drawer'
import { useActer } from '@acter/lib/acter/use-acter'
import { SectionTabs as GroupSectionTabs } from '@acter/lib/constants'
import { useTranslation } from '@acter/lib/i18n/use-translation'
import { useUser } from '@acter/lib/user/use-user'
import { userHasRoleOnActer } from '@acter/lib/user/user-has-role-on-acter'
import { ActerConnectionRole } from '@acter/schema'

const { ABOUT, LINKS, MEMBERS, INVITE, SETTINGS } = GroupSectionTabs
const tabs = [ABOUT, LINKS, MEMBERS, INVITE, SETTINGS]
interface ManageContentProps {
  openDrawer: boolean
  setDrawer: (open: boolean) => void
  contentTab: GroupSectionTabs
}

export const ManageContent: FC<ManageContentProps> = ({
  openDrawer,
  setDrawer,
  contentTab,
}) => {
  const [currentTab, setCurrentTab] = useState(tabs.indexOf(contentTab))
  const classes = useStyles()
  const { t } = useTranslation('common')

  const { user } = useUser()
  const { acter } = useActer()

  if (!acter) return null

  const isAdmin = userHasRoleOnActer(user, ActerConnectionRole.ADMIN, acter)

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
              label={t(tab)}
              id={tab}
              key={`tab-${i}`}
              disableRipple
            />
          ))}
        </Tabs>

        <Box className={classes.tabContent}>
          {tabs[currentTab] === ABOUT && <AboutSection />}
          {tabs[currentTab] === LINKS && <LinksSection />}
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
      minWidth: theme.spacing(11),
      fontWeight: theme.typography.fontWeightRegular,
      color: theme.colors.black,
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
