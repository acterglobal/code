import React, { FC, useState } from 'react'

import { Box } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'

import { DisplayActers } from '@acter/components/acter/landing-page/members-section/display-acters'
import { DisplayMembers } from '@acter/components/acter/landing-page/members-section/display-members'
import { Selectors } from '@acter/components/acter/landing-page/members-section/selectors'
import { LoadingSpinner } from '@acter/components/atoms/loading/spinner'
import { SidebarProfile } from '@acter/components/user/profile/info/side-bar'
import { Drawer } from '@acter/components/util/drawer'
import { getFollowersByType } from '@acter/lib/acter/get-followers-by-type'
import { getSelectors } from '@acter/lib/acter/get-selectors'
import { useActer } from '@acter/lib/acter/use-acter'
import { MemberType } from '@acter/lib/constants'

const { ACTERS, PEOPLE } = MemberType

export const MembersSection: FC = () => {
  const classes = useStyles()
  const [activeSelector, setActiveSelector] = useState<MemberType>(PEOPLE)
  const [openDrawer, setDrawerOpen] = useState(false)
  const [acterId, setActerId] = useState(null)
  const heading = 'User Profile' as string

  const { acter, fetching: acterLoading } = useActer()

  if (acterLoading) return <LoadingSpinner />
  if (!acter) return null

  const validFollowers = getFollowersByType(acter, activeSelector)

  const selectors = getSelectors(acter)

  const handleSelectorChange = (selector: MemberType) => {
    setActiveSelector(selector)
  }

  const handleDrawerOpen = (mentionActerId: string) => {
    setActerId(mentionActerId)
    setDrawerOpen(true)
  }

  const handleDrawerClose = () => {
    setDrawerOpen(false)
    setActerId(null)
  }

  return (
    <Box className={classes.container}>
      <Selectors
        selectors={selectors}
        activeSelector={activeSelector}
        onChange={handleSelectorChange}
        totalResults={validFollowers?.length}
      />
      {activeSelector === PEOPLE && (
        <DisplayMembers
          followers={validFollowers}
          handleOpenSidePanel={handleDrawerOpen}
        />
      )}
      {activeSelector === ACTERS && (
        <DisplayActers followers={validFollowers} />
      )}

      {acterId && (
        <Drawer
          heading={heading}
          open={openDrawer}
          handleClose={handleDrawerClose}
        >
          <SidebarProfile acterId={acterId} />
        </Drawer>
      )}
    </Box>
  )
}

const useStyles = makeStyles({
  container: {
    width: '100%',
  },
})
