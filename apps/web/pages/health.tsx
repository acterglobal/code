import { useQuery } from 'urql'

import HEALTH_CHECK from '@acter/schema/queries/health-check.graphql'

import { NextPageWithLayout } from './_app'

const Health: NextPageWithLayout = () => {
  const [{ fetching, data }] = useQuery({ query: HEALTH_CHECK })
  if (fetching || !data) return null

  return <>ok</>
}

Health.getLayout = (page) => <>{page}</>

export default Health
