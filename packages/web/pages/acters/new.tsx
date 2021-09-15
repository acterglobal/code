import { NextPage } from 'next'
import { useRouter, NextRouter } from 'next/router'

import { AddActerType } from '@acter/components/acter/add-acter-type'
import { Layout } from '@acter/components/layout'
import { Head } from '@acter/components/layout/head'

const _handleClick = (router: NextRouter) => (acterType: string) =>
  router.push(`/${acterType}s/new`)

export const NewActerTypeSelectPage: NextPage = () => {
  const router = useRouter()
  return (
    <Layout>
      <Head title="New Acter" />

      <AddActerType onClick={_handleClick(router)} />
    </Layout>
  )
}

export default NewActerTypeSelectPage
