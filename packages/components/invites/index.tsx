import React, { FC, useState } from 'react'

import { useRouter } from 'next/router'

import {
  Box,
  createStyles,
  makeStyles,
  Tab,
  Tabs,
  Theme,
} from '@material-ui/core'

import { InviteForm } from '@acter/components/invites/form'
import { Invitations } from '@acter/components/invites/invitations'
import { Requests } from '@acter/components/invites/requests'
import { useActer } from '@acter/lib/acter/use-acter'
import { InviteTabs } from '@acter/lib/constants'
import { useTranslation } from '@acter/lib/i18n/use-translation'
import { useUser } from '@acter/lib/user/use-user'
import { userHasRoleOnActer } from '@acter/lib/user/user-has-role-on-acter'
import { ActerConnectionRole } from '@acter/schema'

const { INVITE, INVITATIONS, REQUESTS } = InviteTabs
interface InvitesSectionProps {
  setDrawerHeading?: (heading: string) => void
}

export const InvitesSection: FC<InvitesSectionProps> = ({
  setDrawerHeading,
}) => {
  const { t } = useTranslation('invitations')
  const classes = useStyles()
  const { query } = useRouter()

  const tabs = [INVITE, REQUESTS, INVITATIONS]
  const [currentTab, setCurrentTab] = useState(
    query?.inviteTab === InviteTabs.REQUESTS ? tabs.indexOf(REQUESTS) : 0
  )

  const handleChange = (_, tab) => {
    setCurrentTab(tab)
    setDrawerHeading?.(tabs[tab])
  }

  const { acter } = useActer()
  const { user } = useUser()

  if (!acter || !user) return null
  const isAdmin = userHasRoleOnActer(user, ActerConnectionRole.ADMIN, acter)
  const isMember = userHasRoleOnActer(user, ActerConnectionRole.MEMBER, acter)

  return (
    <Box className={classes.root}>
      {isMember && !isAdmin && <InviteForm />}

      {isAdmin && (
        <>
          <Tabs
            value={currentTab}
            onChange={handleChange}
            variant="fullWidth"
            aria-label="full width tabs example"
          >
            {tabs.map((tab, i) => (
              <Tab label={t(tab)} id={tab} key={`tab-${i}`} />
            ))}
          </Tabs>
          {tabs[currentTab] === INVITE && <InviteForm />}
          {tabs[currentTab] === REQUESTS && <Requests />}
          {tabs[currentTab] === INVITATIONS && <Invitations />}
        </>
      )}
    </Box>
  )
}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      width: 530,
      paddingLeft: theme.spacing(3),
      paddingRight: theme.spacing(3),
      '& .MuiTab-wrapper': {
        textTransform: 'capitalize',
        fontWeight: theme.typography.fontWeightLight,
      },
      '& .Mui-selected': {
        color: theme.palette.secondary.dark,
        '& .MuiTab-wrapper': {
          fontWeight: theme.typography.fontWeightBold,
        },
      },
    },
  })
)
