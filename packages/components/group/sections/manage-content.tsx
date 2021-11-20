import React, { FC, useState } from 'react'

import {
  createStyles,
  makeStyles,
  Theme,
  Box,
  Tabs,
  Tab,
} from '@material-ui/core'

import { About } from '@acter/components/group/sections/tabs/about'
import { InvitesSection } from '@acter/components/invites'
import { Drawer } from '@acter/components/util/drawer'
import { useActer } from '@acter/lib/acter/use-acter'
import { GroupSectionTabs } from '@acter/lib/constants'

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

  const { acter } = useActer()
  if (!acter) return null

  const handleChange = (_, tab) => setCurrentTab(tab)

  return (
    <Drawer
      heading={acter.name}
      open={openDrawer}
      handleClose={() => setDrawer(false)}
    >
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
          {tabs[currentTab] === INVITE && <InvitesSection />}
          {tabs[currentTab] === ABOUT && <About />}
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
      color: theme.colors.black,
      fontSize: '0.88rem',
      textTransform: 'capitalize',
    },
    tabContent: {
      display: 'flex',
      justifyContent: 'center',
    },
  })
)
