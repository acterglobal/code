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
import { useUpdateActer } from 'src/lib/acter/use-update-acter'
import { useCreateActer } from 'src/lib/acter/use-create-acter'
import { useNotificationMutation } from 'src/lib/apollo/use-notification-mutation'

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
  const [createActer] = useCreateActer(displayActer)
  const [updateActer, { loading: acterUpdateLoading }] = useUpdateActer(
    displayActer,
    setDisplayActer
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

  return (
    <Layout
      acter={displayActer}
      acterTypes={acterTypes}
      user={user}
      onGroupSubmit={createActer}
      links={displayLinks}
    >
      <Head title={`${acter.name} Settings - Acter`} />
      <main>
        <ActerSettings
          acter={displayActer}
          onSettingsChange={updateActer}
          loading={acterUpdateLoading}
          links={displayLinks}
          onLinkSubmit={handleLinks}
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
