import React, { FC } from 'react'

import { useRouter } from 'next/router'

import { GroupsSection } from '@acter/components/acter/layout/menu/groups'
import { ActerMenuHeader } from '@acter/components/acter/layout/menu/header'
import { ActerMenuItems } from '@acter/components/acter/layout/menu/items'
import { LinksList } from '@acter/components/acter/layout/menu/links'
import { PartOfSection } from '@acter/components/acter/layout/menu/part-of'
import { LoadingSpinner } from '@acter/components/atoms/loading/spinner'
import { SecondaryMenu } from '@acter/components/molecules/secondary-menu'
import { checkMemberAccess } from '@acter/lib/acter/check-member-access'
import { getParentActer } from '@acter/lib/acter/get-parent-acter'
import { useActer } from '@acter/lib/acter/use-acter'
import { useUser } from '@acter/lib/user/use-user'
import { userHasRoleOnActer } from '@acter/lib/user/user-has-role-on-acter'
import { ActerConnectionRole } from '@acter/schema'

export const ActerMenu: FC = () => {
  const router = useRouter()
  const { acter: fetchedActer, fetching: acterLoading } = useActer({
    acterId: router.query.fromActerId as string,
  })
  const { user, fetching: userLoading } = useUser()

  const acter = getParentActer(fetchedActer)

  if (acterLoading || userLoading) return <LoadingSpinner />
  if (!acter) return null

  const isAdmin = userHasRoleOnActer(user, ActerConnectionRole.ADMIN, acter)
  const isMember = checkMemberAccess(user, acter)

  return (
    <SecondaryMenu>
      <ActerMenuHeader acter={acter} />

      <ActerMenuItems acter={acter} />

      {(isAdmin || isMember) && <LinksList acter={acter} />}

      {(isAdmin || isMember) && <GroupsSection acter={acter} />}

      <PartOfSection acter={acter} />
    </SecondaryMenu>
  )
}
