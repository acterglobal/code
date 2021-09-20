import { useRouter, NextRouter } from 'next/router'

import { NextPageWithLayout } from 'pages/_app'

import { AddActerType } from '@acter/components/acter/add-acter-type'
import { Head } from '@acter/components/layout/head'

const _handleClick = (router: NextRouter) => (acterType: string) =>
  router.push(`/${acterType}s/new`)

export const NewActerTypeSelectPage: NextPageWithLayout = () => {
  const router = useRouter()
  return (
    <>
      <Head title="New Acter" />

      <AddActerType onClick={_handleClick(router)} />
    </>
  )
}

export default NewActerTypeSelectPage
