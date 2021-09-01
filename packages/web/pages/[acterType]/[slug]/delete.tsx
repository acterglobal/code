import React from 'react'
import { NextPage } from 'next'
import { useRouter } from 'next/router'
import { getUserProfile, getActerTypes, setActerType, getActer } from 'props'
import {
  composeProps,
  ComposedGetServerSideProps,
} from '@acter/lib/compose-props'

import { ActerDeleteConfirmDialog } from '@acter/components/acter/delete-confirm-dialog'

import { Acter } from '@acter/schema'
import { useDeleteActer } from '@acter/lib/acter/use-delete-acter'

interface DeleteActerPageProps {
  /**
   * The Acter to be deleted
   */
  acter: Acter
}

export const DeleteActerPage: NextPage<DeleteActerPageProps> = ({ acter }) => {
  const router = useRouter()

  const [deleteActer] = useDeleteActer()

  return (
    <ActerDeleteConfirmDialog
      acter={acter}
      onCancel={router.back}
      onSubmit={() => deleteActer(acter.id)}
    />
  )
}

export const getServerSideProps: ComposedGetServerSideProps = (ctx) =>
  composeProps(ctx, getUserProfile(true), getActerTypes, setActerType, getActer)

export default DeleteActerPage
