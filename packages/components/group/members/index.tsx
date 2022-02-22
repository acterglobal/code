import { FC, useState } from 'react'

import { GroupLanding } from '@acter/components/group'
import { ManageContent as GroupMembersSection } from '@acter/components/group/sections/manage-content'
import { SectionTabs as GroupSectionTabs } from '@acter/lib/constants'

export const GroupMembers: FC = () => {
  const [openDrawer, setOpenDrawer] = useState(true)

  return (
    <>
      <GroupLanding />
      <GroupMembersSection
        openDrawer={openDrawer}
        setDrawer={setOpenDrawer}
        contentTab={GroupSectionTabs.MEMBERS}
      />
    </>
  )
}
