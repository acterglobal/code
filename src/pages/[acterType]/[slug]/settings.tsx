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
import CREATE_LINK from 'api/mutations/link-create.graphql'
import GET_LINKS from 'api/queries/links-by-acter.graphql'
import UPDATE_LINK from 'api/mutations/link-update.graphql'
import DELETE_LINK from 'api/mutations/delete-link.graphql'
import { useUpdateActer } from 'src/lib/acter/use-update-acter'
import { useCreateActer } from 'src/lib/acter/use-create-acter'
import { useNotificationMutation } from 'src/lib/apollo/use-notification-mutation'
import { updateActerGroups } from 'src/lib/group/update-acter-groups'

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

  const [createLink] = useNotificationMutation(CREATE_LINK, {
    update: (cache, { data }) => {
      const { createLink: newLink } = data
      const newDisplayLinks = [...displayLinks, newLink]
      setDisplayLinks(newDisplayLinks)
      cache.writeQuery({
        query: GET_LINKS,
        data: {
          links: newDisplayLinks,
        },
      })
    },
    getSuccessMessage: () => 'Link created',
  })

  const [updateLink] = useNotificationMutation(UPDATE_LINK, {
    update: (cache, { data }) => {
      const { updateLink: newLink } = data
      const newDisplayLinks = displayLinks.map((link) => {
        if (link.id === newLink.id) {
          return newLink
        }
        return link
      })
      setDisplayLinks(newDisplayLinks)
      cache.writeQuery({
        query: GET_LINKS,
        data: {
          links: newDisplayLinks,
        },
      })
    },
  })

  const handleLinks = async (values) => {
    {
      values.id
        ? updateLink({
            variables: {
              ...values,
              linkId: values.id,
              acterId: acter.id,
              userId: user.id,
            },
          })
        : createLink({
            variables: {
              ...values,
              acterId: acter.id,
              userId: user.id,
            },
          })
    }
  }

  const [deleteLink] = useNotificationMutation(DELETE_LINK, {
    update: (cache, { data }) => {
      const { deleteLink: deletedLink } = data
      const newDisplayLinks = displayLinks.filter(
        (link) => link.id !== deletedLink.id
      )
      setDisplayLinks(newDisplayLinks)
      cache.writeQuery({
        query: GET_LINKS,
        data: {
          links: newDisplayLinks,
        },
      })
    },
    getSuccessMessage: () => 'Link deleted',
  })
  const handleDeleteLink = async (id: unknown) => {
    deleteLink({
      variables: {
        linkId: id,
      },
    })
  }

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
          onLinkSubmit={handleLinks}
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
