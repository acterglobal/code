import { useRouter } from 'next/router'

import { ActerMenu } from '@acter/lib/constants'

const { ACTIVITIES, MEMBERS, FORUM, SETTINGS } = ActerMenu

export const getLandingPageTab = (): ActerMenu => {
  const router = useRouter()
  const tab = [ACTIVITIES, MEMBERS, FORUM, SETTINGS].find((tab) =>
    //TODO: router ends up being null from Storybook. Figure out why
    router?.route?.includes(tab)
  )
  return tab || FORUM
}
