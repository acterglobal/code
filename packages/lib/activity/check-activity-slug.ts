import { useEffect, useState } from 'react'

import { useRouter } from 'next/router'

import _ from 'lodash'

export const getActivitySlug = (): string | string[] => {
  const [activity, setActivity] = useState<string | string[]>(null)
  const router = useRouter()
  const { query } = router

  useEffect(() => {
    if (router.asPath.includes('activity')) {
      const camelCaseQuery = _.mapKeys(query, (value, key) => _.camelCase(key))
      const { activitySlug } = camelCaseQuery
      setActivity(activitySlug)
    }
  }, [router.asPath])

  return activity
}
