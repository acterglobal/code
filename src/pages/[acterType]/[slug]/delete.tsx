import React from 'react'
import { NextPage } from 'next'
import { useRouter } from 'next/router'
import { useMutation } from '@apollo/client'
import { useSnackbar } from 'notistack'
import { capitalize } from 'lodash'

import {
  getUserProfile,
  getActerTypes,
  setActerType,
  getActer,
} from 'src/props'
import {
  composeProps,
  ComposedGetServerSideProps,
} from '@acter/lib/compose-props'

import { ActerDeleteConfirmDialog } from '@acter/components/acter/delete-confirm-dialog'

import { Acter } from '@schema'
import DELETE_ACTER from '@acter/schema/mutations/acter-delete.graphql'

interface DeleteActerPageProps {
  /**
   * The Acter to be deleted
   */
  acter: Acter
}

export const DeleteActerPage: NextPage<DeleteActerPageProps> = ({ acter }) => {
  const router = useRouter()
  const { enqueueSnackbar } = useSnackbar()
  const [deleteActer] = useMutation(DELETE_ACTER, {
    update: (cache, { data }) => {
      cache.modify({
        id: cache.identify(data.deleteActer),
        fields(fieldValue, details) {
          return details.DELETE
        },
      })
    },
    onError: (err) => {
      enqueueSnackbar(err.message, { variant: 'error' })
    },
    onCompleted: () => {
      router.push('/dashboard')
      enqueueSnackbar(
        `${capitalize(acter.ActerType.name)} ${acter.name} deleted`,
        { variant: 'success' }
      )
    },
  })

  return (
    <ActerDeleteConfirmDialog
      acter={acter}
      onCancel={router.back}
      onSubmit={() =>
        deleteActer({
          variables: {
            acterId: acter.id,
          },
        })
      }
    />
  )
}

export const getServerSideProps: ComposedGetServerSideProps = (ctx) =>
  composeProps(ctx, getUserProfile(true), getActerTypes, setActerType, getActer)

export default DeleteActerPage
