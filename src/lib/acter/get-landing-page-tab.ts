import { NextRouter } from 'next/router'
import { ActerMenu } from 'src/constants'

const { ACTIVITIES, MEMBERS, FEED, FORUM, SETTINGS } = ActerMenu

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
    case FEED:
    case FORUM:
      return tab
    default:
      return defaultTab
  }
}
