import React, { useState } from 'react'
import { NextPage } from 'next'
import { Layout } from 'src/components/layout'
import { Head } from 'src/components/layout/head'
import { composeProps, ComposedGetServerSideProps } from 'src/lib/compose-props'
import {
  checkRole,
  getUserProfile,
  getActerTypes,
  getActer,
  setActerType,
  getLinks,
} from 'src/props'
import { ActerSettings } from 'src/components/acter/settings'
import {
  Acter,
  ActerConnectionRole,
  ActerType,
  User,
  Link as LinkType,
} from '@schema'
import { useUpdateActer } from 'src/lib/acter/use-update-acter'
import { useCreateActer } from 'src/lib/acter/use-create-acter'
import { useCreateLink } from 'src/lib/links/use-create-link'
import { useNotificationMutation } from 'src/lib/apollo/use-notification-mutation'
import { updateActerGroups } from 'src/lib/group/update-acter-groups'
import { useCreateUpdateLink } from 'src/lib/links/use-create-update-link'
import { useDeleteLink } from 'src/lib/links/use-delete-link'

interface ActerSettingsPageProps {
  acter: Acter
  acterTypes: ActerType[]
  user: User
  links: LinkType[]
}

export const ActerSettingsPage: NextPage<ActerSettingsPageProps> = ({
  acter,
  acterTypes,
  user,
  links,
}) => {
  const [displayActer, setDisplayActer] = useState(acter)
  const [displayLinks, setDisplayLinks] = useState(links)
  const [createGroup] = useCreateActer({
    onCompleted: ({ createActer }) => {
      setDisplayActer(updateActerGroups(displayActer, createActer))
    },
  })
  const [updateGroup, { loading: updateGroupLoading }] = useUpdateActer(
    displayActer,
    {
      onCompleted: ({ updateActer }) =>
        setDisplayActer(updateActerGroups(displayActer, updateActer)),
    }
  )

  const [handleLink] = useCreateUpdateLink(
    acter,
    user,
    displayLinks,
    setDisplayLinks
  )
  const [handleDeleteLink] = useDeleteLink(displayLinks, setDisplayLinks)

  return (
    <Layout
      acter={displayActer}
      acterTypes={acterTypes}
      user={user}
      onGroupSubmit={createGroup}
      links={displayLinks}
    >
      <Head title={`${acter.name} Settings - Acter`} />
      <main>
        <ActerSettings
          acter={displayActer}
          onSettingsChange={updateGroup}
          loading={updateGroupLoading}
          links={displayLinks}
          onLinkSubmit={handleLink}
          onLinkDelete={handleDeleteLink}
        />
      </main>
    </Layout>
  )
}

export const getServerSideProps: ComposedGetServerSideProps = (ctx) =>
  composeProps(
    ctx,
    getUserProfile(true),
    getActerTypes,
    setActerType,
    getActer,
    checkRole(ActerConnectionRole.ADMIN),
    getLinks
  )

export default ActerSettingsPage
