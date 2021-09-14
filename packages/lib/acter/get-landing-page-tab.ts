import { useRouter } from 'next/router'

import { ActerMenu } from '@acter/lib/constants'

const { ACTIVITIES, MEMBERS, FORUM, SETTINGS } = ActerMenu

export const getLandingPageTab = (): ActerMenu => {
  const router = useRouter()
  const tab = [ACTIVITIES, MEMBERS, FORUM, SETTINGS].find((tab) =>
    router.route?.includes(tab)
  )
  return tab || FORUM
}
