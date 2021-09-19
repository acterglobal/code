import React, { FC } from 'react'

import { GroupsSection } from '@acter/components/layout/side-bar/acter-menu/groups'
import { ActerMenuHeader } from '@acter/components/layout/side-bar/acter-menu/header'
import { LinksList } from '@acter/components/layout/side-bar/acter-menu/links'
import { PartOfSection } from '@acter/components/layout/side-bar/acter-menu/part-of'
import { ActerMenuTabs } from '@acter/components/layout/side-bar/acter-menu/tabs'
import { LoadingSpinner } from '@acter/components/util/loading-spinner'
import { useActer } from '@acter/lib/acter/use-acter'
import { useLinks } from '@acter/lib/links/use-links'
import { useUser } from '@acter/lib/user/use-user'
import { userHasRoleOnActer } from '@acter/lib/user/user-has-role-on-acter'
import { ActerConnectionRole } from '@acter/schema'

export const ActerMenu: FC = () => {
  const { acter, loading: acterLoading } = useActer({ fetchParent: true })
  const { links, loading: linksLoading } = useLinks()
  const { user, loading: userLoading } = useUser()

  if (acterLoading || linksLoading || userLoading) return <LoadingSpinner />
  if (!acter || !links) return null

  const isAdmin = userHasRoleOnActer(user, ActerConnectionRole.ADMIN, acter)
  const isMember = userHasRoleOnActer(user, ActerConnectionRole.MEMBER, acter)

  return (
    <>
      <ActerMenuHeader acter={acter} />

      <ActerMenuTabs acter={acter} user={user} />

      {(isAdmin || isMember) && links.length > 0 && <LinksList links={links} />}

      {(isAdmin || isMember) && <GroupsSection acter={acter} />}

      <PartOfSection />
    </>
  )
}
