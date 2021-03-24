import { NextPage } from 'next'
import { useRouter, NextRouter } from 'next/router'
import { AddActerType } from 'src/components/acter/add-acter-type'
import { Layout } from 'src/components/layout'

const _handleClick = (router: NextRouter) => (acterType: string) =>
  router.push(`/${acterType}s/new`)

export const NewActerTypeSelectPage: NextPage = () => {
  const router = useRouter()
  return (
    <Layout headTitle="New Acter">
      <AddActerType onClick={_handleClick(router)} />
    </Layout>
  )
}

export default NewActerTypeSelectPage
