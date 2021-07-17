import React, { useState, useEffect } from 'react'
import { NextPage } from 'next'
import { Layout } from '@acter/components/layout'
import { Head } from '@acter/components/layout/head'
import {
  getUserProfile,
  getActerTypes,
  setActerType,
  getActer,
  getLinks,
} from 'props'
import {
  composeProps,
  ComposedGetServerSideProps,
} from '@acter/lib/compose-props'
import CREATE_ACTER_CONNECTION from '@acter/schema/mutations/acter-connection-create.graphql'
import DELETE_ACTER_CONNECTION from '@acter/schema/mutations/acter-connection-delete.graphql'
import UPDATE_ACTER_CONNECTION from '@acter/schema/mutations/acter-connection-update.graphql'
import GET_ACTER from '@acter/schema/queries/acter-by-slug.graphql'
import GET_USER from '@acter/schema/queries/user-by-id.graphql'
import { Acter, ActerType, Link as LinkType, User } from '@acter/schema/types'
import { ActerActivities } from '@acter/components/acter/activities'
import { useNotificationMutation } from '@acter/lib/apollo/use-notification-mutation'
import ACTER_CONNECTION_FRAGMENT from '@acter/schema/fragments/acter-connection-full.fragment.graphql'
import { useCreateActer } from '@acter/lib/acter/use-create-acter'
import { updateActerGroups } from '@acter/lib/group/update-acter-groups'

interface ActivitiesPageProps {
  acter: Acter
  acterTypes: ActerType[]
  user: User
  links: LinkType[]
}

export const ActerActivitiesPage: NextPage<ActivitiesPageProps> = ({
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

  useEffect(() => {
    setDisplayActer(acter)
  }, [acter])

  const writeCache = (cache) => {
    cache.writeQuery({
      query: GET_ACTER,
      data: {
        getActer: displayActer,
      },
    })
    cache.writeQuery({
      query: GET_USER,
      data: {
        getUser: user,
      },
    })
  }
  const [
    createConnection,
    { loading: creatingConnection },
  ] = useNotificationMutation(CREATE_ACTER_CONNECTION, {
    update: (cache, { data }) => {
      acter.Followers.push(data.createActerConnection)
      writeCache(cache)
    },
    getSuccessMessage: ({
      createActerConnection: {
        Follower: { name },
      },
    }) => `Connected to ${acter.name} as ${name}`,
  })
  const [
    deleteConnection,
    { loading: deletingConnection },
  ] = useNotificationMutation(DELETE_ACTER_CONNECTION, {
    update: (cache, { data }) => {
      const withoutConnection = (a) => a.id !== data.deleteActerConnection.id
      acter.Followers = acter.Followers.filter(withoutConnection)
      writeCache(cache)
    },
    getSuccessMessage: () => `Disconnected from ${acter.name}`,
  })
  const [
    updateConnection,
    { loading: updatingConnection },
  ] = useNotificationMutation(UPDATE_ACTER_CONNECTION, {
    update: (cache, { data }) => {
      const { updateActerConnection: connection } = data
      const connectionIndex = acter.Followers.findIndex(
        ({ Follower }) => Follower.id === connection.followerActerId
      )
      acter.Followers = [
        ...acter.Followers.slice(0, connectionIndex),
        connection,
        ...acter.Followers.slice(connectionIndex + 1, acter.Followers.length),
      ]
      cache.writeFragment({
        id: cache.identify(connection),
        fragment: ACTER_CONNECTION_FRAGMENT,
        fragmentName: 'ActerConnectionFull',
        data: connection,
      })
    },
  })

  return (
    <Layout
      acter={displayActer}
      acterTypes={acterTypes}
      user={user}
      onGroupSubmit={createGroup}
      links={displayLinks}
    >
      <Head title={`${acter.name} Settings - Acter`} />

      <ActerActivities
        acter={acter}
        user={user}
        onJoin={() => null}
        onLeave={() => null}
        loading={creatingConnection || deletingConnection || updatingConnection}
      />
      <h3>activities here</h3>
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
    getLinks
  )

export default ActerActivitiesPage
