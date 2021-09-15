import React from 'react'

import { useRouter } from 'next/router'

import { NextPageWithLayout } from 'pages/_app'
import { getActerTypes, setActerType, getActer } from 'props'

import { ActerDeleteConfirmDialog } from '@acter/components/acter/delete-confirm-dialog'
import { useDeleteActer } from '@acter/lib/acter/use-delete-acter'
import {
  composeProps,
  ComposedGetServerSideProps,
} from '@acter/lib/compose-props'
import { Acter } from '@acter/schema'

interface DeleteActerPageProps {
  /**
   * The Acter to be deleted
   */
  acter: Acter
}

export const DeleteActerPage: NextPageWithLayout<DeleteActerPageProps> = ({
  acter,
}) => {
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
  composeProps(ctx, getActerTypes, setActerType, getActer)

export default DeleteActerPage
