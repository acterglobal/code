import React from 'react'

import { useRouter } from 'next/router'

import { NextPageWithLayout } from 'pages/_app'

import { ActerDeleteConfirmDialog } from '@acter/components/acter/delete-confirm-dialog'
import { LoadingSpinner } from '@acter/components/util/loading-spinner'
import { useActer } from '@acter/lib/acter/use-acter'
import { useDeleteActer } from '@acter/lib/acter/use-delete-acter'

export const DeleteActerPage: NextPageWithLayout = () => {
  const router = useRouter()
  const { acter, loading: acterLoading } = useActer()

  const [deleteActer] = useDeleteActer()

  if (!acter || acterLoading) return <LoadingSpinner />

  return (
    <ActerDeleteConfirmDialog
      acter={acter}
      onCancel={router.back}
      onSubmit={() => deleteActer(acter.id)}
    />
  )
}

export default DeleteActerPage
