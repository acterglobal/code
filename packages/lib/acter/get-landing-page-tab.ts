import { NextRouter } from 'next/router'
import { ActerMenu } from '@acter/lib/constants'

const { ACTIVITIES, MEMBERS, FORUM, SETTINGS } = ActerMenu

export const getLandingPageTab = (
  router: NextRouter,
  defaultTab = ''
): string => {
  if (router.route?.includes(SETTINGS)) {
    return SETTINGS
  }

  if (!router.query.tab) {
    return defaultTab
  }

  const tab = router.query.tab[0]

  switch (tab) {
    case ACTIVITIES:
    case MEMBERS:
    case FORUM:
      return tab
    default:
      return defaultTab
  }
}
