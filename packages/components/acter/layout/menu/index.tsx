import React, { FC } from 'react'

import { GroupsSection } from '@acter/components/acter/layout/menu/groups'
import { ActerMenuHeader } from '@acter/components/acter/layout/menu/header'
import { ActerMenuItems } from '@acter/components/acter/layout/menu/items'
import { LinksList } from '@acter/components/acter/layout/menu/links'
import { PartOfSection } from '@acter/components/acter/layout/menu/part-of'
import { SecondaryMenu } from '@acter/components/layout/side-bar/secondary-menu'
import { LoadingSpinner } from '@acter/components/util/loading-spinner'
import { useActer } from '@acter/lib/acter/use-acter'
import { useUser } from '@acter/lib/user/use-user'
import { userHasRoleOnActer } from '@acter/lib/user/user-has-role-on-acter'
import { ActerConnectionRole } from '@acter/schema'

export const ActerMenu: FC = () => {
  const { acter, loading: acterLoading } = useActer({ fetchParent: true })
  const { user, loading: userLoading } = useUser()

  if (acterLoading || userLoading) return <LoadingSpinner />
  if (!acter) return null

  const isAdmin = userHasRoleOnActer(user, ActerConnectionRole.ADMIN, acter)
  const isMember = userHasRoleOnActer(user, ActerConnectionRole.MEMBER, acter)

  return (
    <SecondaryMenu>
      <ActerMenuHeader />

      <ActerMenuItems />

      {(isAdmin || isMember) && <LinksList />}

      {(isAdmin || isMember) && <GroupsSection />}

      <PartOfSection />
    </SecondaryMenu>
  )
}
